import Axios from 'axios';
import React, {createContext,useState,useEffect} from 'react'


//CREAR EL CONTEXT
export const CategoriaContext = createContext();

//CREACION EL PROVIDER DONDE SE ENCUENTRAN LAS FUNCIONES Y STATE
const CategoriaProvider = (props) => {

    //Crear el state del context
    const [categorias,guardarCategorias]=useState([]);    

    //ejecutar llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categoriaApi = await Axios.get(url)
            guardarCategorias(categoriaApi.data.drinks)
        }
        obtenerCategorias()
    }, [])

    
     //Lo que esta disponible en los components
    return(
        <CategoriaContext.Provider
        value={{
            categorias
            
        }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}
export default CategoriaProvider;
