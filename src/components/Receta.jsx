import React, {useContext} from 'react'
import {ModalContext} from '../context/ModalContext'

const Receta = ({receta}) => {
    //extraer los valores del context
    const {guadarIdReceta} =useContext(ModalContext)

    return ( 
    <div className="col-md-4 mb-3">
        <div className="card">
            <h2 className='card-header'>{receta.strDrink}</h2>
            <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className='card-img-top'/>
            <div className="card-body">
                <button 
                type='button'
                className='btn btn-primary btn-block'
                onClick={ ()=>{
                    guadarIdReceta(receta.idDrink)
                } }
                >Ver Receta
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default Receta;