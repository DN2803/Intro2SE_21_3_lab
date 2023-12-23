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
    const onClickAdd = () => {
        setIsActive(!isActive);
    }

    // thêm mới đối tượng 

    // chỉnh sửa 

    const onClickFix = () => {
        setIsActive(!isActive);
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
                {/* <h4>Chỉnh sửa</h4> */}
                <div className="group-from">
                    <label>ID</label>
                    <input type="text" />
                </div>
                <div className="group-from">
                    <label>Họ tên</label>
                    <input type="text"/>
                </div>
                <div className="group-from">
                
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div className="group-from">
                    <label>SĐT</label>
                    <input type="phone number"/>
                </div>
                <div className="group-from">
                    <label>Bằng cấp</label>
                    <input type="text"/>
                </div>
                <div className="group-from">
                    <label>Chức vụ</label>
                    <input type="text"/>
                </div>
                <div className="group-from">
                    <label>Lương</label>
                    <input type="number"/>
                </div>
                <Button className="primary__btn btn-add-new">Xác nhận</Button>
                <Button className="outline__btn btn-exit" onClick={onClickAdd}>Thoát</Button>
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
                            <td><FaPen onClick={onClickFix} className="icon-fix"/></td>
                            <td><AiOutlineDelete className="icon-delete"/></td>
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