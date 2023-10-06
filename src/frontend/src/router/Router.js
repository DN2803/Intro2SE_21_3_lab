import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../views/pages/Home'
import Login from '../views/pages/Login'
import Booking from "../views/pages/Booking";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/booking' element={<Booking/>}/>
        </Routes>
    )
}
export default Routers