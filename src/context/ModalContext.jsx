import React,{createContext,useEffect,useState} from 'react'
import Axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [idreceta,guadarIdReceta]=useState(null);
    const [receta,guardarReceta]=useState({})
    //una vez teniendo receta llamar api
    useEffect(() => {
        const obtenerReceta = async()=>{
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await Axios.get(url)
            guardarReceta(resultado.data.drinks[0]);

        }
        obtenerReceta()
    }, [idreceta])

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