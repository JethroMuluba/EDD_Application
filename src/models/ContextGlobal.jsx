import { createContext, useContext, useState } from "react";
import data from '../data/data.json';





const ContextGlobal = createContext();

export const useContextGlobal = () => {
    return useContext(ContextGlobal);
};

const  ContextGlobalProvider = ({children}) => {

    const [getData, upDateData] = useState(data.tableData);
return (
    <ContextGlobal.Provider value={{getData ,upDateData}}>
        {children}
    </ContextGlobal.Provider>
)
};
export default  ContextGlobalProvider;