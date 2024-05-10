import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const ContextGlobalProvider = ({ children }) => {

// Create New User
const createNewUser = async (newUser) => {
    try {
        const response = await axios.post("https://edd-application.onrender.com/register", newUser )
        console.log("Utilisateur enregistré avec succès", response.data);
        navigate('/dashboard')
    } catch (error) {
        console.error("Erreur lors de l'inscruption :", error.response.data);
    }
}

//Post Login Data
const navigate = useNavigate();

const checkLoginData = async (checkData) => {
        try {
            const response = await axios.post("https://edd-application.onrender.com/login", checkData);
                console.log("Utilisateur connecté avec succès", response.data);
                navigate('/dashboard')
        } catch (error) {
            console.error("Erreur lors de la connexion :", error.response.data);
        }
};

//Get User Id From JWT
    // const getUserIdFromToken = () => {
    //     const token = localStorage.getItem('token');
    //         if (!token) {
    //             return null;
    //         };
        
    //     const decodedToken = jwt.decode(token)
    //         if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
    //             return null;
    //         };
    //         return decodedToken.id;
    // }
    // console.log(getUserIdFromToken);
//Get Expensive Table Data
    const [getTableExpensiveData, upDateTableExpensiveData] = useState([]);

    useEffect( async () => {
    await axios
        .get("https://edd-application.onrender.com/dashboard")
        .then((response) => {
        upDateTableExpensiveData(response.data.expenses);
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
        .post("https://edd-application.onrender.com/dashboard", newExpensive)
        .then((response) => {
            return upDateTableExpensiveData([
                response.data.createExpense,
                ...getTableExpensiveData,
            ]);
        });
    };

  //Get Insight Data
    const [getInsightData, upDateInsightData] = useState([]);


    useEffect( async () => {
    await axios
        .get("https://edd-application.onrender.com/dashboard")
        .then((response) => {
        upDateInsightData(response.data.income);
        })
        .catch((error) => {
        });
    }, []);

    if (getInsightData === null) {
    return "Chargement en cours... c'est vrai ça";
    }

  //Post Incoming
    const addIncoming = async (newIncoming) => {
        await axios
            .post("https://edd-application.onrender.com/dashboard", newIncoming)
            .then((response) => {
                return upDateInsightData([
                    response.data.createIncome, 
                    ...upDateInsightData,
                ])}
            ); 
    }

  //Put Incoming
    const upDateIncoming = async (id, incomingToUpdate) => {
    await axios
        .put(`https://edd-application.onrender.com/insights/${id}`, incomingToUpdate)
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
        checkLoginData,
        createNewUser,
        }}
    >
        {children}
    </ContextGlobal.Provider>
    );
};
export default ContextGlobalProvider;
