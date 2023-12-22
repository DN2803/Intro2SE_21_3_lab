import React from "react";
import { useParams, Link,  useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import '../../../styles/PatientDetail.scss'
const PatientDetailPharmacist = () => {
    const { idpatient } = useParams();
    // get medical history from database 
    // get information from database where patient's id = id patient
    const patient = {
        name: 'Trần Võ Mi Na',
        gender: 'Nữ',
        birth: '30/04/2004',
        email: 'tvmina@gmail.com',
        phone: '098888888', 
        contraindicated: null,
        allergy: null, 

    }
    // table chứa lịch sửu khám 
    const title_medical_history = [
        {Header: 'STT'},
        {Header: "Ngày khám"},
        {Header: "Chuẩn đoán"},
        {Header: "Đơn thuốc"},
    ];
    
    const medial_history = [
        {
        date: '10/12/2021',
        diagnostic: 'Cận thị',
        }, 
        {
            date: '10/12/2021',
            diagnostic: 'Cận thị',
        }, 
        {
            date: '10/12/2021',
            diagnostic: 'Cận thị',
        },
        {
            date: '10/12/2021',
            diagnostic: 'Cận thị',
        },
    ];
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back one step in the history stack
    };
    const currentDate = new Date();

    // Biến đổi ngày thành chuỗi hiển thị
    const formattedDate = currentDate.toLocaleDateString();
    const idmake = formattedDate.replace(/\//g, '-') ;
    console.log(formattedDate);
    return (
        <>
        <Container className="detail">
        <h1 className="idpatient">#{idpatient}</h1>
        
        <div className="patient">
            <label>Thông tin bệnh nhân</label>
            <div className="patient-information">
                <Row>
                    <Col>
                        <Row>
                            <label>Họ và tên</label>
                            <input type="text" value={patient.name} readOnly></input>
                        </Row>
                        <Row>
                            <label>Giới tính</label>
                            <input type="text" value={patient.gender} readOnly></input>
                        </Row>
                        <Row>
                            <label>Email</label>
                            <input type="text" value={patient.email} readOnly></input>
                        </Row>
                        <Row>
                            <label>SĐT</label>
                            <input type="text" value={patient.phone} readOnly></input>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <label>Ngày sinh</label>
                            <input type="text" value={patient.birth} readOnly></input>
                        </Row>
                        <Row>
                            <label>Chống chỉ định</label>
                            <input 
                                type="text"
                                value={patient.contraindicated}
                                
                                // disabled={patient.contraindicated !== ''}
                            ></input>
                        </Row>
                        <Row>
                            <label>Dị ứng</label>
                            <input type="text"></input>
                        </Row>
                        
                    </Col>
                </Row>
                
            </div>
            
            <div className="patient-history">
            <label>Lịch sử khám</label>
            <div className="patient-history-table">
                <table>
                    <thead>
                        {
                            title_medical_history.map(t => {
                                return (<td key={t}>{t.Header}</td>)
                            })
                        }
                        

                    </thead>
                    <tbody>
                        {
                            medial_history.map((t, index) => {
                                let id  =  t.date.replace(/\//g, '-');
                                return ( <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{t.date}</td>
                                    <td>{t.diagnostic}</td>
                                    <td><Link to ={`./${id}`}>Xem đơn thuốc</Link> </td>
                                </tr>
                                    
                                    )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        <div className="button">
            <Row>
                
                <Button className="btn outline__btn back " onClick={goBack}>Thoát</Button>
                
            </Row>
        </div>
        
        </div>
        </Container>
        </>
    )
}
export default PatientDetailPharmacist