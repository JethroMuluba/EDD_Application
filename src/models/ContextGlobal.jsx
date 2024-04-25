import { createContext, useContext, useEffect, useState } from "react";
import data from '../data/data.json';
import axios from "axios";





const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const  ContextGlobalProvider = ({children}) => {
    //Get Expensive Table Data
    const [getTableExpensiveData, upDateTableExpensiveData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/tableData')
        .then(response => {
            upDateTableExpensiveData(response.data)
        })
        .catch (error => {
            console.error('Une erruer est survenue :', error);
        });
    }, []);

    if(getTableExpensiveData === null) {
        return 'Chargement en cours...'
    }

    //Post Expensive
    const addExpensive = (newExpensive) => {
        axios.post('http://localhost:3000/tableData', newExpensive)
        .then((response) => upDateTableExpensiveData([response.data, ...getTableExpensiveData]));
    };

    //Get Insight Data
    const [getInsightData, upDateInsightData]  = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/insights')
        .then(response => {
            upDateInsightData(response.data)
        })
        .catch (error => {
            console.error('Une erruer est survenue :', error);
        });
    }, []);

    if(getInsightData === null) {
        return 'Chargement en cours...'
    }

    //Post Incoming
    const addIncoming = (newIncoming) => {
        axios.post('http://localhost:3000/insights', newIncoming)
        .then((response) => upDateInsightData([response.data, ...getInsightData]));
    };

    //Put Incoming
    const upDateIncoming = (id, incomingToUpdate) => {
        axios.put(`http://localhost:3000/insights/${id}`, incomingToUpdate)
            .then((res) => {
                if (res.status === 200) {
                    upDateInsightData(prevData => {
                        return prevData.map(income => {
                            if (income.id === id) {
                                return { ...income, ...incomingToUpdate };
                            } else {
                                return income;
                            }
                        });
                    });
                }
            })
            .catch((error) => {
                console.error('Error updating incoming:', error);
            });
    }


return (
    <ContextGlobal.Provider value={{getTableExpensiveData, 
                                    upDateTableExpensiveData, 
                                    getInsightData, 
                                    upDateInsightData,
                                    addIncoming,
                                    upDateIncoming,
                                    addExpensive
                                    }}>
        {children}
    </ContextGlobal.Provider>
)
};
export default  ContextGlobalProvider;