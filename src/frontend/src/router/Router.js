import React from "react";
import {Routes, Route, Navigate, useRoutes} from 'react-router-dom'

import Home from '../views/pages/Home'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    )
}
export default Router