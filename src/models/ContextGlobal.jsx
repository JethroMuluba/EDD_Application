import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import axios from "axios";

const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const ContextGlobalProvider = ({ children }) => {
  //Get Expensive Table Data
    const [getTableExpensiveData, upDateTableExpensiveData] = useState([]);

    useEffect(() => {
    axios
        .get("http://localhost:3004/dashboard")
        .then((response) => {
        upDateTableExpensiveData(response.data.expenses);
        // console.log(response.data.expenses);
        })
        .catch((error) => {
        console.error("Une erruer est survenue :", error);
        });
    }, []);

    if (getTableExpensiveData === null) {
    return "Chargement en cours...";
    }

  //Post Expensive
    const addExpensive = async (newExpensive) => {
    await axios
        .post("http://localhost:3004/dashboard", newExpensive)
        .then((response) => {
            return upDateTableExpensiveData([
                response.data.createExpense,
                ...getTableExpensiveData,
            ]);
        });
    };

  //Get Insight Data
    const [getInsightData, upDateInsightData] = useState([]);
    // console.log(getInsightData);

    useEffect(() => {
    axios
        .get("http://localhost:3004/dashboard")
        .then((response) => {
        upDateInsightData(response.data.income);
        })
        .catch((error) => {
      // console.log(error);
        });
    }, []);

    if (getInsightData === null) {
    return "Chargement en cours... c'est vrai ça";
    }

  //Post Incoming
    const addIncoming = async (newIncoming) => {
        await axios
            .post("http://localhost:3004/dashboard", newIncoming)
            .then((response) => {
                return upDateInsightData([
                    response.data.createIncome, 
                    ...upDateInsightData,
                ])}
            ); 
    }
    // console.log('message : ', getInsightData);

  //Put Incoming
    const upDateIncoming = (id, incomingToUpdate) => {
    axios
        .put(`http://localhost:3000/insights/${id}`, incomingToUpdate)
        .then((res) => {
        if (res.status === 200) {
            upDateInsightData((prevData) => {
            return prevData.map((income) => {
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
        console.error("Error updating incoming:", error);
        });
    };

    return (
    <ContextGlobal.Provider
        value={{
        getTableExpensiveData,
        upDateTableExpensiveData,
        getInsightData,
        upDateInsightData,
        addIncoming,
        upDateIncoming,
        addExpensive,
        }}
    >
        {children}
    </ContextGlobal.Provider>
    );
};
export default ContextGlobalProvider;
