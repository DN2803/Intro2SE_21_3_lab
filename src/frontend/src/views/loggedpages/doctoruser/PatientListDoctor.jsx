import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";
import { fetchPatients } from "../../../utils/fetchFromAPI";

import "../../../styles/PatientListDoctor.scss";
const PatientListDoctor = () => {
  const [data, setData] = useState([]);
  const id = useParams();
  const doctor_id = id.id;
  const fetchData = async () => {
    try {
      const patientsData = await fetchPatients(doctor_id);
      //console.log(patientsData);
      setData(patientsData.patientsList);
    } catch (error) {
      console.error("Error fetching patients data:", error);
    }
  };

  const title = [
    { Header: "STT", accessor: "stt" },
    { Header: "Họ Tên", accessor: "name" },
    { Header: "Giới tính", accessor: "gender" },
    { Header: "Email", accessor: "email" },
    { Header: "Số điện thoại", accessor: "phone" },
    { Header: "" },
    { Header: "" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search-bar d-flex align-items-center">
        <div className="search-bar-input">
          <IoSearch className="icon-search" />
          <input type="text" placeholder={"Search ID"} />
        </div>
      </div>
      <div className="table-patients">
        <table>
          <thead>
            {title.map((t) => {
              return <td key={t}>{t.Header}</td>;
            })}
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d.patientSTT}>
                  <td>{d.patientSTT}</td>
                  <td>{d.patientName}</td>
                  <td>{d.patientGender}</td>
                  <td>{d.patientMail}</td>
                  <td>{d.patientPhone}</td>

                  <td>
                    <Link to={`./${d.patientSTT}`}>
                      <FaPen className="icon-fix" />
                    </Link>
                  </td>
                  <td>
                    <input type="checkbox" className="mark-done" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default PatientListDoctor;
