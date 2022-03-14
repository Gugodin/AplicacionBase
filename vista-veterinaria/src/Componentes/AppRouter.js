import React from 'react'
import {Routes,Route,} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';
import MenuPrincipal from './VistaCita/MenuPrincipalC';
import MenuPrincipalD from './VistaDuenios/MenuPrincipalD';
import Register from './VistaMascota/Register';
import MenuPrincipalMe from './VistaMedicamentos/MenuPrincipalMe.js';
import Registro from './VistaDuenios/VistaDuenio.js'
export default function AppRouter() {
    return (
        <div>
            <NavBar/>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path = '/citas' element={<MenuPrincipal/>}/>
                        <Route path='/duenios' element={<MenuPrincipalD/>}/>
                        <Route path='/mascotas/' element={<Register/>}/>
                        <Route path='/medicamentos/' element={<MenuPrincipalMe/>}/>
                        <Route path='/registro/' element={<Registro/>}/>

                    </Routes>
                </div>
        </div>
    )
}
