import ProductoImagen from './ProductoImagen';
import img from './assets/Imagenes/perro.png';

export default function MensajeError(){

    return (
        <div>
            <div className='MensajeError'>
                <h2 className='tituloError'>Error de usuario</h2>
                <br />
                <div className='imagenPerro'>
                    <ProductoImagen url={img} clase='imgPerroTriste'/>
                </div>
                <br />
                <div className='regresoLogin'>
                    <a href="/">Regresar al Inicio de sesión</a>
                </div>

                
                
                
            </div>
        </div>
    )
    
}