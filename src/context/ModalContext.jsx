import React,{createContext,useEffect,useState} from 'react'
import Axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [idreceta,guadarIdReceta]=useState(null);

    return(
        <ModalContext.Provider
            value={{
                guadarIdReceta

            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;