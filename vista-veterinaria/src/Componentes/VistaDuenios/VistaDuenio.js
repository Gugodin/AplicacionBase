import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import registroDuenioM from './VistaDuenioM'
// import '../assets/css/nuevaMascota.css'
// import ActualizarMUser from './ActualizarMUser';

export default function Register(){
    const [nombre, setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [direccion,setDireccion] = useState('');

    return(
        <div>
            <div className='registroDuenio'>
                <h2 className='titulo'>Registro de nuevo dueño</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombre">Nombre del dueño</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="telefono">Telefono</span>
                        <input type="number" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="direccion">dirección</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <button id= 'boton' type="button" class="btn btn-outline-success">Registrar dueño</button>
                    </ul>

                </div>
            </div>
        {<registroDuenioM/>}
        </div>



    )
}