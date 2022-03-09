import React from 'react'
import axios from 'axios';
import { useState } from 'react';
// import '../assets/css/nuevaMascota.css'
// import ActualizarMUser from './ActualizarMUser';

export default function registroDuenioM(){
    


    return(
        <div>
            <div className='registroDuenioM'>
                <h2 className='titulo'>Registro de nuevo dueño</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombreD">Nombre de la mascota</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="tipoM">Tipo de mascota</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="razon">Razón del ingreso</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <button id= 'boton' type="button" class="btn btn-outline-success">Registrar dueño</button>
                    </ul>

                </div>
            </div>
            
        </div>



    )
}