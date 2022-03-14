import React from 'react'
import axios from 'axios';
import '../assets/css/registro.css';
import { useState } from 'react';
import registroDuenioM from './VistaDuenioM';
import ProductoImagen from '../ProductoImagen';
import img from '../assets/Imagenes/mascotas_logo.png';



export default function Register(){
    const [primerNombre, setPrimerNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [nombre,setNombre] = useState('');
    const [password,setContrasenia] = useState('');
    const [rol,setRol] = useState('');


    const handleRegister = () => {
        let usuario_JSON = {
            nombre : nombre,
            password: password,
            rol: rol,
            primerNombre: primerNombre,
            apellido: apellido    
        }
        
        axios.post('http://localhost:18080/regis',usuario_JSON)
    
    }
    
    return(
        <div className='total'>
            <div className='registroDuenio'>
                <h2 className='titulo'>Registro de nuevo dueño</h2>
                <br />
                <div className='FormularioRegistro'>
                    <div className="inputs" class="input-group mb-3">
                        <ul>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="nombre" onChange={e => setPrimerNombre(e.target.value)}>Nombre del dueño</span>
                            <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="apellido" onChange={e => setApellido(e.target.value)}>Apellido del dueño</span>
                            <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="nombre" onChange={e => setNombre(e.target.value)}>Usuario</span>
                            <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="password" onChange={e => setContrasenia(e.target.value)}>Contraseña</span>
                            <input type="password" class="form-control"  aria-describedby="basic-addon1"/>
                        </div>
                        <select class="form-select" aria-label="Default select example" onChange={e => setRol(e.target.value)}>
                            <option selected>Tipo de usuario</option>
                            <option value="DUEÑO">Cliente</option>
                            <option value="EMPLEADO">Trabajador</option>
            
                        </select>
                    
                        <br></br>
                        <button id= 'boton' type="button" class="btn btn-outline-success" onClick={() => {handleRegister()}}>Registrar dueño</button>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='contenedorInfo'>
                <div className="logo">
                    <ProductoImagen url={img} clase='imgLogo'/>
                </div>
            </div>
                
            
        </div>



    )
}