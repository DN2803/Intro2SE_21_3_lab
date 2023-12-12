import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Label} from "reactstrap";


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
    const [inputFields, setInputFields] = useState(['']); // Danh sách trường nhập

    const handleAddField = () => {
        setInputFields([...inputFields, '']); // Thêm một trường nhập mới vào danh sách
    };

    const handleChange = (index, value) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = value;
        setInputFields(newInputFields);
    };
    return (
        <>
        <Container className="detail">
            <h2>{date}</h2>
            <div className="form">
                <label>Bác sĩ khám</label>
                <input type="text" />
                <label>Triệu chứng</label>
                <input type="text" />
                <label>Chuẩn đoán</label>
                <input type="text" />
                
            </div>
            <h3>Danh sách thuốc</h3>
            {inputFields.map((field, index) => (
                <div key={index} className="input-pair">
                <label>Tên thuốc</label>
                <input
                  type="text"
                  
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                <label>Số lượng</label>
                <input
                  type="number"
                  
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
            {isNow &&<Button onClick={handleAddField}>Thêm thuốc</Button>}
            

        </Container>
        </>
    )
}
export default Prescription;