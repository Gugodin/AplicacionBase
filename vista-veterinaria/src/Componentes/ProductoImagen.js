import React from 'react'
import './assets/css/ruta.css'


export default function ProductoImagen(props) {
    return (
        <div className='divImage'>
            <img src={props.url} alt={'Imagen de nuestro producto'} className={props.clase}/>
        </div>
    )
}
