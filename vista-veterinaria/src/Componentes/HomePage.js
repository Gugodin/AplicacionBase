import React from 'react';
import { useEffect,useState} from 'react';
import ProductoImagen from './ProductoImagen'
import img from './assets/Imagenes/bienvenida.jpg'
import ProductoTexto from './ProductoTexto';
import axios from 'axios';
import './assets/css/ruta.css'

export default function HomePage() {


    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    let hacerPeticion = () => {

        console.log('Entro a hacer peticion')

        let data = {

            'nombre':nombre,
            'password':password

        }

        axios.post('http://localhost:18080/user/login',data).then( (res) => {
            console.log('Envio peticion')

            if (res.data){
                
                console.log(`ES DATO ${res.data}`)
                document.cookie = `jwt = ${res.data[1]}; max-age = 6000`
                localStorage.setItem('id',res.data[0])
                console.log('AAAAAAAAAAAAAAAAAAA')
                console.log(localStorage.getItem('id'))
                alert('Usuario valido, puedes pasar a las siguintes paginas')
            }
            else{
                alert('Usuario invalido')

            }

            

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
            {/* <ProductoImagen url={img} clase='ImgBienvenida'/> */}
            
            <ProductoTexto/>

            <div className="formudata">
                    <div id='form'>
                        <input className='input-group-text texto' type="text" name="nombre" id="nombreM" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                        <br></br>
                        <input className='input-group-text texto' type="password" name="password" id="password" placeholder='Contraseña' onChange={e=>setPassword(e.target.value)}/>
                        <br></br>
                        <button className='btn btn-dark' id='btnIniciar' onClick={()=>{
                            if(nombre!=='' && password!==''){

                                hacerPeticion()

                            }
                            else{alert('Llene todos los campos')}
                        }}>Iniciar sesion</button>
                        <br></br>
                        <br></br>
                        <a href='/registro' className='titulo'>Registrarse</a>
                    </div>
                </div>
        </div>
        
    )
}
