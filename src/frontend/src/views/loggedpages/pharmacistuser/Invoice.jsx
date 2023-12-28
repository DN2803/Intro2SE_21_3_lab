import React from "react";
import { Row, Button} from "reactstrap";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import '../../../styles/Invoice.scss'
const Invoice =() => {

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
          price: 1000,
      },
      {
          name: 'ahihi',
          quantity: 3,
          price:2000,
      },
      {
        name: 'para1', 
        quantity: 2,
        price: 1000,
      },
      {
          name: 'ahihi2',
          quantity: 3,
          price:2000,
      },
  ]
    const [inputFields] = useState(data); // Danh sách trường nhập
    
    console.log(inputFields);
    const sum =100000
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1); // Go back one step in the history stack
  };
    return (
        <>
        <h1 className="hoadon">Hóa đơn</h1>
        <div className="detail">
        
        <Row className="form">
            
            <div className="group-form">
            <label>Họ tên</label>
            <input value={'tên bệnh nhân'}readOnly></input>
            </div>
            
            
            <div className="group-form">
            <label>Chi phí khám</label>
            <input value={'100000'} readOnly />
            </div>
        </Row>
        <div >
            <h3>Đơn thuốc</h3>
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
              
                
                <label>Thành tiền</label>
                <input
                  type="number"
                  className="price"
                  value={field.price}
                  readOnly
                />
                
            
              </div>
            ))}
            </Row>
            </div>
            <h3>Tổng tiền: {sum} VND</h3>
        </div>
        
        <Button className = "outline__btn back" onClick={goBack}>Thoát</Button>
        </div>
        </>
    )
}
export default Invoice;