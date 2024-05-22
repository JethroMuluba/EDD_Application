import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const ContextGlobalProvider = ({ children }) => {
    const navigate = useNavigate();

    //Manage Error Message
    const [errorMessage, getErrorMessage] = useState(null);
    console.log('Error during register :',errorMessage);

// Create New User
const createNewUser = async (newUser) => {
    try {
        const response = await axios.post("http://localhost:3004/register", newUser )
        console.log("Utilisateur enregistré avec succès", response.data);
        navigate('/register_confirm')
        getErrorMessage(null);
    } catch (error) {
        console.error("Erreur lors de l'inscription de l'utilisateur :", error.response.data.error);
        getErrorMessage(error.response.data.error);
    }
}

//Get Email for confirmation
const [confirmedEmail, setConfirmedEmail] = useState();

//Get Id Of User Who Is Connected
const [userLoggedId, setUserLoggedId] = useState();

//Post Confirmation Code
const userConfirmation = async (confirmationData) => {
    try {
        const confirmedUser = await axios.post("http://localhost:3004/register_confirm", confirmationData );
        if (confirmedUser.data.token) {
            localStorage.setItem('token', confirmedUser.data.token); 
        };
        console.log("Utilisateur confirmé avec succès", confirmedUser.data);
                navigate('/dashboard')
    } catch (error) {
        console.error("Erreur lors de la confirmation :", error.confirmedUser.data);
        
    };
};
//Post Login Data

    const [userId, setUserId] = useState();
    // console.log('Id of User Connected : ', userId);

const checkLoginData = async (checkData) => {
        try {
            const response = await axios.post("http://localhost:3004/login", checkData);

                // console.log("Utilisateur connecté avec succès", response.data);
                localStorage.setItem('token', response.data.token);
                if (response.data.user && response.data.user.id) {
                    setUserId(response.data.user.id);
                    console.log('Id of Logged User :', response.data.user.id);
                    navigate('/dashboard');
                    getErrorMessage(null)
                    } else {
                    console.error("Les données utilisateur sont manquantes dans la réponse.");
                    }

        } catch (error) {
            console.error("Erreur lors de la connexion :", error.response.data);
            getErrorMessage(error.response.data.message);
        };
};


//Get Expensive Table Data
    const [getTableExpensiveData, upDateTableExpensiveData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3004/dashboard")
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


    useEffect( () => {
    axios
        .get("http://localhost:3004/dashboard")
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
            .post("http://localhost:3004/dashboard", newIncoming)
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
        .put(`http://localhost:3004/insights/${id}`, incomingToUpdate)
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
        userConfirmation,
        userLoggedId,
        errorMessage
        }}
    >
        {children}
    </ContextGlobal.Provider>
    );
};
export default ContextGlobalProvider;
