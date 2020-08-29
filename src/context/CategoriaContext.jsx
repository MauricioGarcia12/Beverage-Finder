import React, {createContext,useState} from 'react'


//CREAR EL CONTEXT
export const CategoriaContext = createContext();

//CREACION EL PROVIDER DONDE SE ENCUENTRAN LAS FUNCIONES Y STATE
const CategoriaProvider = (props) => {
    //Crear el state del context
    const [hola,guardarHola]=useState('hola desde el state')
    
     //Lo que esta disponible en los components
    return(
        <CategoriaContext.Provider
        value={{
            hola,
            guardarHola
        }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}
export default CategoriaProvider;
