import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const ContextGlobalProvider = ({ children }) => {
    const navigate = useNavigate();

// Create New User
const createNewUser = async (newUser) => {
    try {
        const response = await axios.post("https://edd-application.onrender.com/register", newUser )
        console.log("Utilisateur enregistré avec succès", response.data);
        navigate('/register_confirm')
    } catch (error) {
        console.error("Erreur lors de l'inscription de l'utilisateur :", error.response.data);
    }
}

//Get Email for confirmation
const [confirmedEmail, setConfirmedEmail] = useState();

//Post Confirmation Code
const userConfirmation = async (confirmationData) => {
    try {
        const confirmedUser = await axios.post("https://edd-application.onrender.com/register_confirm", confirmationData );
        if (confirmedUser.data.token) {
            localStorage.setItem('token', confirmedUser.data.token); 
        };
        console.log("Utilisateur confirmé avec succès", confirmedUser.data);
                navigate('/dashboard')
    } catch (error) {
        console.error("Erreur lors de la confirmation :", error.confirmedUser.data);
        
    }
}
//Post Login Data

const checkLoginData = async (checkData) => {
        try {
            const response = await axios.post("https://edd-application.onrender.com/login", checkData);
                console.log("Utilisateur connecté avec succès", response.data);
                navigate('/dashboard')
        } catch (error) {
            console.error("Erreur lors de la connexion :", error.response.data);
        }
};


//Get Expensive Table Data
    const [getTableExpensiveData, upDateTableExpensiveData] = useState([]);

    useEffect(() => {
     axios
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


    useEffect( () => {
    axios
        .get("https://edd-application.onrender.com/dashboard")
        .then((response) => {
        upDateInsightData(response.data.income);
        })
        .catch((error) => {
        });
    }, []);

    if (getInsightData === null) {
    return "Chargement en cours... ";
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
    const upDateIncoming = (id, incomingToUpdate) => {
    axios
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
        confirmedEmail, 
        setConfirmedEmail,
        userConfirmation
        }}
    >
        {children}
    </ContextGlobal.Provider>
    );
};
export default ContextGlobalProvider;
