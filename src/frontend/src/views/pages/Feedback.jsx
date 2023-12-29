import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";

import { FaStar } from "react-icons/fa";

import '../../styles/Feedback.scss'
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


const Feedback = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  
    return(
        <>
        <div className="feedback">
        <h2>BẠN CẢM THẤY NHƯ THẾ NÀO ?</h2>
        



        <div className="feedback-form">
            <div className="feedback-form-input">
                <label htmlFor="text">Họ tên</label>
                <input className="name" required></input>
            </div>
            <div className="feedback-form-input">
                <label htmlFor="text">Số điện thoại</label>
                <input className="phone number" required></input>
            </div>
            <div className="feedback-form-input">
                <label htmlFor="text">Cảm nhận của bạn về phòng khám</label>
                <textarea className="description" required></textarea>
            </div>
            <div className="feedback-form-input">
                <label htmlFor="text">Mức độ hài lòng</label>
                <div>
                {stars.map((_, index) => {
                return (
                    <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    style={{
                        marginRight: 10,
                        cursor: "pointer"
                    }}
                    />
                )
                })}
                </div>
                    
            </div>
            <button className ="primary__btn send">Gửi</button>
        </div>
        </div>
        




        </>
    )
}
export default Feedback