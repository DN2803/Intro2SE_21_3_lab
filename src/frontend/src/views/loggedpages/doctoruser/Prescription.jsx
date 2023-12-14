import React, {useState} from "react";
import { useParams ,  useNavigate} from "react-router-dom";
import { Container, Button, Row, Col} from "reactstrap";
import { FaPlus } from "react-icons/fa6";

import '../../../styles/Prescription.scss'
const Prescription = () => {
    const id = useParams();
    console.log(id);
    const doctor_id = id.id;
    const patient_id = id.idpatient;
    const date = id.idpres;
    const currentDate = new Date();

    // Biến đổi ngày thành chuỗi hiển thị
    const formattedDate = currentDate.toLocaleDateString();
    const isNow = date === formattedDate.replace(/\//g, '-') ;
    console.log (doctor_id, patient_id, date);
    const [inputFields, setInputFields] = useState([]); // Danh sách trường nhập

    const handleAddField = () => {
        setInputFields([...inputFields, '']); // Thêm một trường nhập mới vào danh sách
    };

    const handleChange = (index, value) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = value;
        setInputFields(newInputFields);
        
    };
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back one step in the history stack
    };
    const save = () => {
        
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
                    <input type="text" />
                </div>
                <div className="group-form">
                    <label>Chuẩn đoán</label>
                    <input type="text" />
                </div>
                
            </div>
            </Row>
           
            <h3>Danh sách thuốc</h3>
            {inputFields.map((field, index) => (
                <div key={index} className="input-pair">
                <label>Tên thuốc</label>
                <input
                  type="text"
                  className="name-medicince"
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                <label>Số lượng</label>
                <input
                  type="number"
                  className="quantity"
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
            {isNow &&<div className="text-wrapper"  onClick={handleAddField}> <FaPlus /> &nbsp;Thêm thuốc</div>}
            <div className="button">
            <Row>
                <Col>
                <Button className="btn primary__btn save" conClick ={save}> Lưu thay đổi</Button>
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
export default Prescription;