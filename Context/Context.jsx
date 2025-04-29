import { useContext, useState, createContext} from "react";

export const GlobalContext = createContext({state:false, setState:()=>null, component:"", setComponent:()=>{}})

export const Provider = ({children})=>{
    const[state, setState] = useState(false)
    const[component, setComponent] = useState('')

    return(
        <GlobalContext.Provider value={{state, setState, component, setComponent}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext = () =>{
    const context = useContext(GlobalContext)
    return context
}