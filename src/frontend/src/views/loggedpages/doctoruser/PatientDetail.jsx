import React from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import '../../../styles/PatientDetail.scss'
const PatientDetail = () => {
    const { idpatient } = useParams();
    // get medical history from database 
    // get information from database where patient's id = id patient

    // table chứa lịch sửu khám 
    const title_medical_history = [
        {Header: 'STT'},
        {Header: "Ngày khám"},
        {Header: "Bác sĩ"},
        {Header: "Chuẩn đoán"},
        {Header: "Đơn thuốc"},
    ];
    const title_prescription = [
        {Header: 'Tên thuốc'},
        {Header: 'Số lượng'}
    ];


    return (
        <>
        <Container className="detail">
        <h1>#{idpatient}</h1>
        
        <div className="patient">
            <label>Thông tin bệnh nhân</label>
            <div className="patient-information">
                <Row>
                    <Col>
                        <Row>
                            <label>Họ và tên</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                        <Row>
                            <label>Giới tính</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                        <Row>
                            <label>Email</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                        <Row>
                            <label>SĐT</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <label>Ngày sinh</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                        <Row>
                            <label>Chống chỉ định</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                        <Row>
                            <label>Dị ứng</label>
                            <input type="text" value={idpatient} readOnly></input>
                        </Row>
                    </Col>
                </Row>
                
            </div>
            <Button className="create-prescription">Tạo đơn thuốc</Button>
            <div className="patient-history">
            <label>Lịch sử khám</label>
            
            <table>
                <thead>
                    {
                        title_medical_history.map(t => {
                            return (<td key={t}>{t.Header}</td>)
                        })
                    }
                    

                </thead>
            </table>

            </div>
        </div>
        </Container>
        </>
    )
}
export default PatientDetail