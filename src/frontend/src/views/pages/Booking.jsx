import React from "react";
import { Col, Row } from "reactstrap";
import img1 from '../../assets/images/1.png'
import DoctorCard from "../../components/doctorCard/doctorCard";

import '../../styles/Booking.scss'
// result list query from database 
const doctors = [
    {
    hashtag:1,
    name: 'tên bác sĩ',
    img: img1,
    specialty: 'nhãn khoa'
    }
];
const Booking = () => {
    return (
        <>
        <Row>
            <Col className = 'section_doctor' lg ='9' sm ='12'>
            <div className="search-bar d-flex align-items-center">
                <input type="text" placeholder="Search.."/>
            </div>
            <div className="doctor-list">
                {doctors.map(doctor_index=> (
                    <DoctorCard doctor={doctor_index}/>
                ))
                }
                
            </div>
            </Col>
        </Row>
        
        
        </>
    )
}
export default Booking
