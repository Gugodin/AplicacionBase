import React from 'react';
import { useEffect,useState} from 'react';
import ProductoImagen from './ProductoImagen'
import img from './assets/Imagenes/bienvenida.jpg'
import ProductoTexto from './ProductoTexto';
import axios from 'axios';

export default function HomePage() {


    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    let hacerPeticion = () => {
        console.log('Entro a hacer peticion')
        let data = {

            'nombre':nombre,
            'password':password

        }

        axios.post('http://localhost:18080/loginUser',data).then( (res) => {
            
            console.log(res.data)
        }

        )
        .catch(
            (res) => {

                console.log(res.data)
            
         }
        )
    }


    useEffect(()=>{
        document.title = 'Veterinaria';
    })
    return (
        <div>
            <ProductoImagen url={img} clase='ImgBienvenida'/>
            <ProductoTexto/>

            <div className="formudata">
                    <div className='FormLogin'>
                        <input className='input-group-text texto' type="text" name="nombre" id="nombreM" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                        <input className='input-group-text texto' type="password" name="password" id="password" placeholder='Contraseña' onChange={e=>setPassword(e.target.value)}/>
                        <button className='btn btn-dark' onClick={()=>{
                            if(nombre!=='' && password!==''){

                                hacerPeticion()

                            }
                            else{alert('Llene todos los campos')}
                        }}>Iniciar sesion</button>
                    </div>
                </div>
        </div>
        
    )
}
