import React, {useState} from "react";
import { useParams ,  useNavigate} from "react-router-dom";
import { Container, Button, Row, Col} from "reactstrap";
import { Link } from "react-router-dom";

import '../../../styles/Prescription.scss'
const PrescriptionPharmacist = () => {
    const id = useParams();
    console.log(id);
    const doctor_id = "from database";
    const patient_id = id.idpatient;
    const date = id.idpres;
    const currentDate = new Date();

    // Biến đổi ngày thành chuỗi hiển thị
    const formattedDate = currentDate.toLocaleDateString();
    
    console.log (doctor_id, patient_id, date);
    const data = [
        {
            name: 'para', 
            quantity: 2,
        },
        {
            name: 'ahihi',
            quantity: 3,
        }
    ]
    const [inputFields] = useState(data); // Danh sách trường nhập
    
    
    

    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back one step in the history stack
    };
    return (
        <>
        <Container className="detail">
            <h2>{date}</h2>
            <Row>
            <div className="form">
                <div className="form-doctorname">
                    <label>Bác sĩ khám</label>
                    <input type="text" value={doctor_id}/>
                </div>
                <div className="group-form">
                    <label>Triệu chứng</label>
                    <input type="text" value={"triệu chứng từ data base"}/>
                </div>
                <div className="group-form">
                    <label>Chuẩn đoán</label>
                    <input type="text" value={"chuẩn đoán từ database"}/>
                </div>
                
            </div>
            </Row>
           
            <h3>Danh sách thuốc</h3>
            <div className="table">
            <Row>
            {inputFields.map((field, index) => (
                <div key={index} className="input-pair">
                <label>Tên thuốc</label>
                <input
                  type="text"
                  className="name-medicince"
                  value={field.name}
                  readOnly
                />
                <label>Số lượng</label>
                <input
                  type="number"
                  className="quantity"
                  value={field.quantity}
                  readOnly
                />
              </div>
            ))}
            </Row>
            </div>
            <div className="button">
            <Row>
                <Col>
                <Button className="btn primary__btn save">
                <Link to="./invoice">Thanh toán</Link>
                </Button>
                </Col>
                <Col>
                <Button className="btn outline__btn back " onClick={goBack}>Thoát</Button>
                </Col>
            </Row>
        </div>
        
            

        </Container>
        </>
    )
}
export default PrescriptionPharmacist;