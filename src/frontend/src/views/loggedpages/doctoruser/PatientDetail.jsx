import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import { FaEye } from "react-icons/fa";
import { fetchPatientBySTT } from "../../../utils/fetchFromAPI";
import "../../../styles/PatientDetail.scss";

const PatientDetail = () => {
  const { idpatient } = useParams();
  const [patient, setPatient] = useState({});
  //Biến dùng để thay đổi dữ liệu các trường
  const [editableFields, setEditableFields] = useState({
    patientName: "",
    patientGender: "",
    patientMail: "",
    patientPhone: "",
  });
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetchPatientBySTT(idpatient);
        //cái này quan trọng này, vì mỗi bệnh nhân là phần tử thứ 0 nên phải lấy tại vị trí 0 nó mới chịu...
        const patientData = response?.patient?.[0] || {}; // Get the first element or an empty object
        console.log(patientData);

        setPatient(patientData);

        //mục đích để vừa hiển thị vừa retype được đó(thấy ko, nó gán cho cái patientData, có thì nó hiển thị, ko thì nó là "")
        //xong rồi nó hiển thị, muốn retype j cũng được
        setEditableFields({
            patientName: patientData.patientName || "",
            patientGender: patientData.patientGender || "",
            patientMail: patientData.patientMail || "",
            patientPhone: patientData.patientPhone || "",
          });

      } catch (error) {
        console.error("Error fetching patient data:", error);
        setPatient({}); // Set an empty object in case of an error
      }
    };

    // Call fetchPatientData when the component mounts or when idpatient changes
    if (idpatient) {
      fetchPatientData();
    }
  }, [idpatient]);


  const handleInputChange = (field, value) => {
    setEditableFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };
  // table chứa lịch sửu khám
  const title_medical_history = [
    { Header: "STT" },
    { Header: "Ngày khám" },
    { Header: "Chuẩn đoán" },
    { Header: "Đơn thuốc" },
  ];

  const medial_history = [
    {
      date: "10/12/2021",
      diagnostic: "Cận thị",
    },
    {
      date: "10/12/2021",
      diagnostic: "Cận thị",
    },
    {
      date: "10/12/2021",
      diagnostic: "Cận thị",
    },
    {
      date: "10/12/2021",
      diagnostic: "Cận thị",
    },
  ];
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back one step in the history stack
  };

  const currentDate = new Date();

  // Biến đổi ngày thành chuỗi hiển thị
  const formattedDate = currentDate.toLocaleDateString();
  const idmake = formattedDate.replace(/\//g, "-");

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
                  <input
                    type="text"
                    value={editableFields.patientName}
                    onChange={(e) => handleInputChange("patientName", e.target.value)}
                  />
                </Row>
                <Row>
                  <label>Giới tính</label>
                  <input
                    type="text"
                    value={editableFields.patientGender}
                    onChange={(e) => handleInputChange("patientGender", e.target.value)}
                  />
                </Row>
                <Row>
                  <label>Email</label>
                  <input
                    type="text"
                    value={editableFields.patientMail}
                    onChange={(e) => handleInputChange("patientMail", e.target.value)}
                  />
                </Row>
                <Row>
                  <label>SĐT</label>
                  <input
                    type="text"
                    value={editableFields.patientPhone}
                    onChange={(e) => handleInputChange("patientPhone", e.target.value)}
                  />
                </Row>
              </Col>
              <Col>
                <Row>
                  <label>Ngày sinh</label>
                  <input type="text" value={""}></input>
                </Row>
                <Row>
                  <label>Chống chỉ định</label>
                  <input type="text" value={""}></input>
                </Row>
                <Row>
                  <label>Dị ứng</label>
                  <input type="text" value={""}></input>
                </Row>
                <Row>
                  <Button className="btn primary__btn create-prescription">
                    <Link to={`./${idmake}`}>Tạo đơn thuốc</Link>
                  </Button>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="patient-history">
            <label>Lịch sử khám</label>
            <div className="patient-history-table">
              <table>
                <thead>
                  <tr>
                    <td>STT</td>
                    <td>Ngày khám</td>
                    <td>Chuẩn đoán</td>
                    <td>Đơn thuốc</td>
                  </tr>
                </thead>
                <tbody>
                  {medial_history.map((t, index) => {
                    let id = t.date.replace(/\//g, "-");
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{t.date}</td>
                        <td>{t.diagnostic}</td>
                        <td>
                          <Link to={`./${id}`}>
                            <FaEye />
                          </Link>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="button">
            <Row>
              <Col>
                <Button className="btn primary__btn save"> Lưu thay đổi</Button>
              </Col>
              <Col>
                <Button className="btn outline__btn back " onClick={goBack}>
                  Thoát
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};
export default PatientDetail;
