import { createContext, useContext, useState } from "react";
import data from '../data/data.json';





const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const  ContextGlobalProvider = ({children}) => {

    const [getTableExpensiveData, upDateTableExpensiveData] = useState(data.tableData);
return (
    <ContextGlobal.Provider value={{getTableExpensiveData ,upDateTableExpensiveData}}>
        {children}
    </ContextGlobal.Provider>
)
};
export default  ContextGlobalProvider;