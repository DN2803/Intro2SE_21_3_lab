import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

import '../../../styles/WarehousePharmacist.scss'

const WarehousePharmacist = () =>{
    const [data, setdata] = useState([
        {
            id:"MD001",
            name: "Para",
            volume: 60,
            unit: 'viên',
            iPrice: 10000,
            oPrice: 12000
        },
        
    ]);
    const title = [
        {Header: "ID", accessor: 'id'},
        {Header: "Tên thuốc", accessor: 'name'},
        {Header: "Số lượng tồn", accessor: 'volume'},
        {Header: "Đơn vị tính", accessor: 'unit'},
        {Header: "Giá nhập kho", accessor: 'iPrice'},
        {Header: "Giá bán", accessor: 'oPrice'},
        
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
            
            <div className="add-drug">
                {/* <h4>Chỉnh sửa</h4> */}
                <div className="group-from">
                    <label>ID</label>
                    <input type="text" />
                </div>
                <div className="group-from">
                    <label>Tên thuốc</label>
                    <input type="text"/>
                </div>
                <div className="group-from">
                
                    <label>Đơn vị tính</label>
                    <input type="text"/>
                </div>
                <div className="group-from">
                    <label>Giá nhập</label>
                    <input type="number"/>
                </div>
                <div className="group-from">
                    <label>Giá bán</label>
                    <input type="number" />
                </div>
                
                <Button className="primary__btn btn-add-new">Xác nhận</Button>
                <Button className="outline__btn btn-exit" onClick={onClickAdd}>Thoát</Button>
            </div>
        </div>}
       
        <div className="table-warehouse">
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
                            <td>{d.volume}</td>
                            <td>{d.unit}</td>
                            <td>{d.iPrice}</td>
                            <td>{d.oPrice}</td>
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
export default WarehousePharmacist