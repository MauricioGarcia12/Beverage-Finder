import React, {useContext} from 'react'
import {CategoriaContext} from '../context/CategoriaContext'
const Formulario = () => {

    const {categorias} = useContext(CategoriaContext);
    console.log(categorias)

    return (
        
        <form className='col-12'>
            <fieldset className='text-center'>
                <legend>Busca Bebidas por Categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">

                <div className="col-md-4">
                    <input 
                    type="text" 
                    className='form-control'
                    name='nombre'
                    placeholder='Buscar por Ingrediente'
                    />
                </div>

                <div className="col-md-4">
                    <select
                    className='form-control'
                    name='categoria'
                    >
                        <option value=''>--Selecciona Categoria--</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit" 
                    className="btn btn-block btn-primary" 
                    value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
      );
}
 
export default Formulario;