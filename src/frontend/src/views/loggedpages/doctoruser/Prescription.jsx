import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import {
  fetchMedicalHistory,
  addOrUpdateMedicalHistory,
} from "../../../utils/fetchFromAPI";
import "../../../styles/Prescription.scss";
import { FaEdit } from "react-icons/fa";
const Prescription = () => {
  const id = useParams();
  const isMounted = React.useRef(false);
  const doctor_username = id.id; //cần
  const patientstt = id.idpatient; //này là số thứ tự th chưa phải là id
  const date = id.idpres;
  const patient_id = "BN" + patientstt; //cần
  let parts = date.split("-");
  let formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`; //cần
  //const isNow = date === formattedDate.replace(/\//g, "-");
  // Biến đổi ngày thành chuỗi hiển thị

  console.log(doctor_username, patient_id, formattedDate);
  const [inputFields, setInputFields] = useState([]); // Danh sách trường nhập

  const [editableFields, setEditableFields] = useState({
    doctorName: "",
    patientSymptom: "",
    patientDiagnose: "",
  });

  const FetchMedicalHistory = async () => {
    try {
      const response = await fetchMedicalHistory(
        patient_id,
        formattedDate,
        doctor_username
      );
    
      const medicalHistoryData = response?.medicalHistoryInformation?.[0] || {}; // Get the first element or an empty object

      //mục đích để vừa hiển thị vừa retype được đó(thấy ko, nó gán cho cái patientData, có thì nó hiển thị, ko thì nó là "")
      //xong rồi nó hiển thị, muốn retype j cũng được
      setEditableFields((prevFields) => ({
        ...prevFields,
        doctorName: medicalHistoryData.doctorName || "",
        patientSymptom: medicalHistoryData.patientSymptom || "",
        patientDiagnose: medicalHistoryData.patientDiagnose || "",
      }));

      console.log(editableFields);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      if (patientstt) {
        FetchMedicalHistory();
      }
    } else {
      isMounted.current = true;
    }
  }, [patientstt]);

  const handleAddField = () => {
    setInputFields([...inputFields, ""]); // Thêm một trường nhập mới vào danh sách
  };
  const handleSubmit = async () => {
    try {
      const dataToSend = {
        patientID: patient_id,
        dateCase: formattedDate,
        doctorUsername: doctor_username,
        patientSymptom: editableFields.patientSymptom,
        patientDiagnose: editableFields.patientDiagnose,
      };
      console.log(dataToSend);
      // Gửi dữ liệu lên server
      const response = await addOrUpdateMedicalHistory(dataToSend);
      alert(response.message);
    } catch (error) {
      // Handle any unexpected errors
      console.error("Lỗi", error.message);
    }
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
  const save = () => {};
  return (
    <>
      <Container className="detail">
        <h2>{date}</h2>
        <Row>
          <div className="form">
            <div className="form-doctorname">
              <label>Bác sĩ khám</label>
              <input type="text" value={editableFields.doctorName || doctor_username} readOnly />
            </div>
            <div className="group-form">
              <label>Triệu chứng</label>
              <input type="text" value={editableFields.patientSymptom} onChange={(e) => setEditableFields((prevFields) => ({ ...prevFields, patientSymptom: e.target.value }))} />
            </div>
            <div className="group-form">
              <label>Chuẩn đoán</label>
              <input type="text" value={editableFields.patientDiagnose} onChange={(e) => setEditableFields((prevFields) => ({ ...prevFields, patientDiagnose: e.target.value }))} />
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
          </Row>
        </div>
        {formattedDate && (
          <div className="text-wrapper" onClick={handleAddField}>
            {" "}
            <FaPlus /> &nbsp;Thêm thuốc
          </div>
        )}
        <div className="button">
          <Row>
            <Col>
              <Button className="btn primary__btn save" onClick={handleSubmit}>
                {" "}
                Lưu thay đổi
              </Button>
            </Col>
            <Col>
              <Button className="btn outline__btn back " onClick={goBack}>
                Thoát
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Prescription;