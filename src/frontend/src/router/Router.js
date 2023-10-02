import React from "react";
import {Routes, Route, Navigate, useRoutes} from 'react-router-dom'

import Home from '../views/pages/Home'
import Login from '../views/pages/Login'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}
export default Router