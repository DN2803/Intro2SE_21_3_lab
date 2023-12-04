import React from "react";

import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";


import '../../../styles/PatientListDoctor.scss'
const PatientListDoctor = () => {
    const data = [
        {
            id: 'BN01',
            name: 'Trần Võ Mi Na',
            gender: 'Nữ',
            birth: '30/04/2004',
            email: 'tvmina@gmail.com',
            phone: '098888888',
        },
    ];
    const title = [
        {Header: "ID", accessor: 'id'},
        {Header: "Họ Tên", accessor: 'name'},
        {Header: "Giới tính", accessor: 'gender'},
        {Header: "Ngày sinh", accessor: 'birth'},
        {Header: "Email", accessor: 'email'},
        {Header: "Số điện thoai", accessor: 'phone'},
        {Header: ""},
        {Header: ""}
    ];
    return (
        <>
        <div className="search-bar d-flex align-items-center">
            <div className="search-bar-input">
            <IoSearch className="icon-search"/>
            <input type="text" placeholder={ "Search ID"}/>
            </div>            
        </div>
        <div className="table-patients">
            <table>
                <thead>
                    {
                        title.map(t => {
                            return (<td key={t}>{t.Header}</td>)
                        })
                    }
                </thead>
                <tbody>
                    {
                        data.map(d => {
                            return (<tr key={d.id}>
                                
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.gender}</td>
                                <td>{d.birth}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            
                                <td>
                                    
                                    <Link to ={`./${d.id}`}><FaPen className="icon-fix"/></Link>
                                </td>
                                <td><input type="checkbox" className="mark-done"/></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)

}
export default PatientListDoctor