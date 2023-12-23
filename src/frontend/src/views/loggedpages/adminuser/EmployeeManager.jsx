import React, { useState } from "react";
import { Button} from "reactstrap";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
//get from database 
import '../../../styles/EmployeeManager.scss'

const EmployeeManager = () => {

    const [data, setdata] = useState([
        {
            id:1,
            name: "Nguyễn Văn A",
            email: "nva@gmail.com",
            phone: "0989898989",
            degree: "thạc sĩ",
            role: "doctor",
            wage: 10000
        },
        {
            id:2,
            name: "Nguyễn Văn B",
            email: "nva@gmail.com",
            phone: "0989898989",
            degree: "thạc sĩ",
            role: "doctor",
            wage: 10000
        },
        {
            id:3,
            name: "Nguyễn Văn C",
            email: "nva@gmail.com",
            phone: "0989898989",
            degree: "thạc sĩ",
            role: "doctor",
            wage: 10000
        }
    ]);
    const title = [
        {Header: "ID", accessor: 'id'},
        {Header: "Họ Tên", accessor: 'name'},
        {Header: "Email", accessor: 'email'},
        {Header: "Điện thoại", accessor: 'phone'},
        {Header: "Bằng cấp", accessor: 'degree'},
        {Header: "Chức vụ", accessor: 'role'},
        {Header: "Lương", accessor: 'wage'},
        {Header: ""},
        {Header: ""}
    ];
    // Sử dụng state để lưu trạng thái của đối tượng
    const [isActive, setIsActive] = useState(false);
    const onClickAddNew = () => {

        let dataCopy = [...data];
        dataCopy.push({
            id: data.length +1,
            name: newName,
            email: newEmail,
            phone: newPhone, 
            degree: newDegree,
            role: newRole, 
            wage: newWage,
        })
        setdata(dataCopy);
        setNewId("");
        setNewName("");
        setNewEmail("");
        setNewDegree("");
        setNewRole("");
        setNewWage("");
        setIsActive(!isActive);
    }
    const onClickAdd = () => {
        setIsActive(!isActive);
    }
    const onClickBack = () => {
        setIsActive(!isActive);
    }

    // thêm mới đối tượng 
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newDegree, setNewDegree] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newWage, setNewWage] = useState("");


    const onchangeNewName = (e) => {
        setNewName(e.currentTarget.value);
    } 
    const onchangeNewEmail = (e) => {
        setNewEmail(e.currentTarget.value);
    }
    const onchangeNewPhone = (e) => {
        setNewPhone(e.currentTarget.value);
    }
    const onchangeNewDegree = (e) => {
        setNewDegree(e.currentTarget.value);
    }
    const onchangeNewRole = (e) => {
        setNewRole(e.currentTarget.value);
    }
    const onchangeNewWage = (e) => {
        setNewWage(e.currentTarget.value);
    }
    // chỉnh sửa 

    const [editRow, setEditRow] = useState('');

    const onClickFix = (employee) => {
        console.log(employee);
        setIsActive(!isActive);
        setEditRow(employee.id);
        setNewId(employee.id);
        setNewName(employee.name);
        setNewEmail(employee.email);
        setNewPhone(employee.phone);
        setNewDegree(employee.degree);
        setNewRole(employee.role);
        setNewWage(employee.wage);
    }
    const onClickUpdate = () =>{
        let index = data.findIndex(d=>d.id === editRow)
        let dataCopy = [...data];
        dataCopy[index] = {
            id: editRow,
            name: newName,
            email: newEmail,
            phone: newPhone, 
            degree: newDegree,
            role: newRole, 
            wage: newWage,
        }
        setdata(dataCopy);
        setNewId("");
        setNewName("");
        setNewEmail("");
        setNewPhone("");
        setNewDegree("");
        setNewRole("");
        setNewWage("");
        setEditRow("");
        setIsActive(!isActive);
    }
    // xóa 

    const onClickDelete = (employee) =>{
        let IDDelete = data.findIndex(d=> d===employee)
        console.log(IDDelete);

        let dataCopy = data.filter(d => d !== employee);
        setdata(dataCopy);
    }
    return (
        <>
        <div className="search-bar d-flex align-items-center">
            <div className="search-bar-input">
            <IoSearch className="icon-search"/>
            <input type="text" placeholder={ "Search ID"}/>
            </div>            
            
            <Button className="btn-add primary__btn" onClick={onClickAdd}>Thêm</Button>
        </div>
        
        {isActive &&<div className="wrapper">
            
            <div className="add-employee">
                <div className="group-from">
                    <label>Họ tên</label>
                    <input 
                        type="text"
                        name ='name'
                        value={newName}
                        onChange={onchangeNewName}/>
                </div>
                <div className="group-from">
                
                    <label>Email</label>
                    <input 
                        type="email"
                        name = 'email'
                        value={newEmail}
                        onChange={onchangeNewEmail}/>
                </div>
                <div className="group-from">
                    <label>SĐT</label>
                    <input 
                        type="phone number"
                        name = 'phone'
                        value={newPhone}
                        onChange={onchangeNewPhone}/>
                </div>
                <div className="group-from">
                    <label>Bằng cấp</label>
                    <input 
                        type="text"
                        name= "degree"
                        value={newDegree}
                        onChange={onchangeNewDegree}/>
                </div>
                <div className="group-from">
                    <label>Chức vụ</label>
                    <input 
                        type="text"
                        name= 'role'
                        value={newRole}
                        onChange={onchangeNewRole}/>
                </div>
                <div className="group-from">
                    <label>Lương</label>
                    <input 
                        type="number"
                        name = 'wage'
                        value={newWage}
                        onChange={onchangeNewWage}/>
                </div>
                {
                    editRow
                    ? 
                    <Button className="primary__btn btn-add-new" onClick={onClickUpdate}>Cập nhật</Button>
                    :
                    <Button className="primary__btn btn-add-new" onClick={onClickAddNew}>Xác nhận</Button>
                }
                
                <Button className="outline__btn btn-exit" onClick={onClickBack}>Thoát</Button>
            </div>
        </div>}
       
        <div className="table-employee">
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
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>{d.degree}</td>
                            <td>{d.role}</td>
                            <td>{d.wage}</td>
                            <td><FaPen onClick={e => onClickFix(d)} className="icon-fix"/></td>
                            <td><AiOutlineDelete onClick = {e=>onClickDelete(d)}className="icon-delete"/></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </div>
        </>
    )
}
export default EmployeeManager