import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../assets/css/ab.css';
import ProductoImagen from '../ProductoImagen';
import img from '../assets/Imagenes/perro.png';

import HomePage from '../HomePage';
// import {Routes,Route, withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppRouter from '../AppRouter';
import ReactDOM from 'react-dom'
import MensajeError from '../MensajeError';

export default function RegisterM(){
    const [nombre,setNombre] = useState('')
    const [raza,setRaza] = useState('')
    const [fecha,setFecha] = useState('')
    const [razon,setRazon] = useState('')
    const [bandera,setBandera] = useState(false)
    const [idDuenio,setIdDuenio] = useState()

    const handleRegistro = () => {

        

        const dato = {
            nombre : nombre,
            raza : raza,
            fechaIngreso : fecha,
            razon : razon,
            idDuenio:localStorage.getItem('id')
        }
        console.log(dato)
        axios.post('http://localhost:9998/mascota/add', dato).then((res)=>{
            alert('REGISTRO DE MASCOTA EXITOSO')
        }).catch((ras)=>{
            alert('ERROR INTENTELO DE NUEVO')
        })
    }


    useEffect(() => {
        validar();
    }, [])
    
    const validar = () => {
        console.log("Hola", document.cookie)
        if (document.cookie == "") {
            console.log('ENTRE A NO COOKIE ');
            setBandera(false)
        }
        else{
            console.log('Si hay cookie');
            setBandera(true)
        }
        // !bandera ? console.log('NO tiene datos') : console.log('Tiene datos')
        console.log(bandera)
    }
    // // console.log(!bandera)
    // validar()

    function probarVista() {
        
            return(<div>
                <div className='registroMascota'>
                    <h2 className='titulo'>Registrar nueva mascota</h2>
                    <br />
                    <div className="inputs" class="input-group mb-3">
                        <ul>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="nombreM">Nombre de la mascota</span>
                                <input type="text" class="form-control"  aria-describedby="basic-addon1" onChange={e => setNombre(e.target.value)}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="raza">Raza de la mascota</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon1" onChange={e => setRaza(e.target.value)}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="fecha">Fecha de ingreso</span>
                                <input type="date" class="form-control"  aria-describedby="basic-addon1" onChange={e => setFecha(e.target.value)}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="razon">Razon de ingreso</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon1" onChange={e => setRazon(e.target.value)}/>
                            </div>
                            <button id= 'boton' type="button" class="btn btn-outline-success" onClick={() => {
                                handleRegistro()
                            }}>Registrar mascota</button>
                        </ul>
                    </div>
                </div>
        </div>)
        
    }

    function mandarVista() {
        if (bandera) {
            return probarVista()
        }
        else{
            console.log('ERROR VISTA Entramos')

            return (
                <MensajeError />
            ) 
        }
    }

    
    return mandarVista()
    
}