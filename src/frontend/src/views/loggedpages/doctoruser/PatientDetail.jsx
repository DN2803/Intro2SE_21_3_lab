import React from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
const PatientDetail = () => {
    const { idpatient } = useParams();
    // get medical history from database 
    // get information from database where patient's id = id patient



    return (
        <>
        <h1>#{idpatient}</h1>
        <Button className="create-prescription">Tạo đơn thuốc</Button>
        <div className="patient">
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
            <div className="patient-history">

                


            </div>
        </div>
        chứa thông tin hồ sơ bệnh án của bệnh nhân nếu bệnh nhân đã từng khám tại cơ sở
        có nút tạo bệnh án
        </>
    )
}
export default PatientDetail