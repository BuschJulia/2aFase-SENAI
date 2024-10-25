import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const[contato, setContato] = useState('')
const[contatos, setContatos] = useState([])


    return(
        <GlobalContext.Provider value={{
                usuarioLogado,
                contato,
                setContato,
                contatos,
                setContatos
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
