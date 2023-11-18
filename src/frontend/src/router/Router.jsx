import React from "react";
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'

//page ai coi cx được nè

import Home from '../views/pages/Home'
import Login from '../views/pages/Login'
import Booking from "../views/pages/Booking";
import AboutUs from "../views/pages/AboutUs";
import Normal from "../components/ui/Normal";
import Logged from "../components/ui/Logged";
import BookingDetail from "../views/pages/BookingDetail";
import DoctorDetail from "../views/pages/DoctorDetail";
import Feedback from "../views/pages/Feedback";
// page sau khi đăng nhập xong mới coi được

import EmployeeManager from "../views/loggedpages/adminuser/EmployeeManager";
import PatientListDoctor from "../views/loggedpages/doctoruser/PatientListDoctor";
import CustomerReview from "../views/loggedpages/adminuser/CustomerReview";
import Statistics from "../views/loggedpages/adminuser/Statistics";
import WarehouseDoctor from "../views/loggedpages/doctoruser/WarehouseDoctor";
import WarehouseParmacist from "../views/loggedpages/parmacistuser/WarehouseParmacist";



const PrivateRoutes = () => {
    const isAuth = true
    // call api to check logged 
  
    return isAuth ? <Outlet /> : <Navigate to='/login' />
  }

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Normal/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking' element={<Booking/>}/>
                <Route path='/booking/:id' element={<BookingDetail/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/doctor/:id' element = {<DoctorDetail/>}/>
                <Route path='/feedback' element = {<Feedback/>}/>
            </Route>
            <Route element = {<PrivateRoutes/>}>
                <Route path='/login/:id' element={<Logged/>}>
                    
                    <Route path='admin/employee' element = {<EmployeeManager/>}/>
                    <Route path='admin/customerreview' element = {<CustomerReview/>}/>
                    <Route path='admin/statistics' element = {<Statistics/>}/>

                    <Route path='doctor/patients' element = {<PatientListDoctor/>}/>
                    <Route path='doctor/warehouse' element = {<WarehouseDoctor/>}/>

                    <Route path='parmacist/patients' element = {<PatientListDoctor/>}/>
                    <Route path='parmacist/warehouse' element = {<WarehouseParmacist/>}/>
                </Route>
            </Route>
                

        </Routes>
    )
}
export default Routers