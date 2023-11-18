import React from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'reactstrap'


const BookingDetail = () => {
    const {id} = useParams();

    // call API load a doctor have id  = id 
    //const doctors = doctorsData.find(doctors => doctors.id ===id)

    //const {name} = doctors
    const name = 'name of doctor' + id
    var apppointment = {
        name: '',
        address: '',
        phonenumber: '',
        email: '',
        time:'',
        servicetype: 0,
        nameDoctor: ''
    }
    const getValue = () => {
       
        return apppointment
    }
    
    return (
        <>
        <div className="booking-form">
            <Form>
                <h1>ĐẶT LỊCH KHÁM VỚI CHÚNG TÔI</h1>
            <Container>
                <Row>
                <label htmlFor='fullname'>Họ Tên</label>
                <input 
                    type="text" 
                    placeholder="Enter Fullname"
                    required
                    id = 'fullname'
                    
                />
                <label htmlFor="text">Địa chỉ</label>
                <input
                    type="text"
                    placeholder="Enter address"
                    required
                    id = 'address'
                    
                />
                <label htmlFor="phone">Số điện thoại</label>
                <input
                    type="tel"
                    placeholder="0123456789"
                    required
                    id = 'phone-number'
                    
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    id ='email'
                    
                />
                <label htmlFor="time">Thời gian dự kiến</label>
                <Col>
                    <select id = 'time' required>
                        <option value="1"> 07h30 ~ 11h00</option>
                        <option value="2"> 13h00 ~ 16h30</option>
                    </select>
                    
                    <input 
                        type="date"
                        required
                        id="date"
                    />
                </Col>
                <label htmlFor="services">Dịch vụ khám</label>
                <select id = 'services' required>
                    <option value="1">Khám tổng quát</option>
                    <option value="2">Khám chuyên sâu</option>
                </select>                
                <label htmlFor="doctorname">Tên bác sĩ</label>
                    <h5>{name}</h5>
                <Button className="btn primary__btn">Xác nhận</Button>
                </Row>
            </Container>
                
            </Form>
        </div>
        </>
    )
} 
export default BookingDetail;