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

return (
    <ContextGlobal.Provider value={{getTableExpensiveData, 
                                    upDateTableExpensiveData, 
                                    getInsightData, 
                                    upDateInsightData}}>
        {children}
    </ContextGlobal.Provider>
)
};
export default  ContextGlobalProvider;