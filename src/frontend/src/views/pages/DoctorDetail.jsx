import React from "react";
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
    
    const {id} = useParams();

    // call API load a doctor have id  = id 
    //const doctors = doctorsData.find(doctors => doctors.id ===id)

    //const {name} = doctors


    return(
        <>
        thông tin bác sĩ
        </>
    )
}
export default DoctorDetail