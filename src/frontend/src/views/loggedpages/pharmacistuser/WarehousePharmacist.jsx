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

    const onClickAddNew = () => {
        let dataCopy = [...data];
        dataCopy.push({
            id: 'MD00' + (data.length + 1),
            name: newName,
            volume: newVolume,
            unit: newUnit,
            iPrice: newIPrice,
            oPrice: newOPirce
        })
        setdata(dataCopy);
        setNewName("");
        setNewUnit("");
        setNewVolume("");
        setNewIPrice("");
        setNewOPrice("");
        setIsActive(!isActive);
    }
    // thêm mới đối tượng 
    const [newName, setNewName] = useState("");
    const [newVolume, setNewVolume] = useState("");
    const [newUnit, setNewUnit] = useState("");
    const [newIPrice, setNewIPrice] = useState("");
    const [newOPirce, setNewOPrice] = useState("");
    const [editRow, setEditRow] = useState("");


    const onchangeNewName = (e) =>{
        setNewName(e.currentTarget.value);
    } 
    const onchangeNewVolume = (e)=>{
        setNewVolume(e.currentTarget.value);
    }
    const onchangeNewUnit = (e) => {
        setNewUnit(e.currentTarget.value);
    }
    const onchangeNewIPrice = (e) => {
        setNewIPrice(e.currentTarget.value);
    }
    const onchangeNewOPrice = (e) => {
        setNewOPrice(e.currentTarget.value);
    }

    // chỉnh sửa 

    const onClickFix = (medicine) => {
        setIsActive(!isActive);
        setEditRow(medicine.id);
        setNewName(medicine.name);
        setNewUnit(medicine.unit);
        setNewVolume(medicine.volume);
        setNewIPrice(medicine.iPrice);
        setNewOPrice(medicine.oPrice);
        
    }
    const onClickUpdate = () => {
        let index = data.findIndex(d => d.id === editRow)
        let dataCopy = [...data]
        dataCopy[index] = {
            id: editRow,
            name:newName,
            volume: newVolume,
            unit: newUnit,
            iPrice: newIPrice, 
            oPrice: newOPirce,
        }
        setdata(dataCopy);
        setEditRow("");
        setNewName("");
        setNewUnit("");
        setNewVolume("");
        setNewIPrice("");
        setNewOPrice("");
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
                    <label>Tên thuốc</label>
                    <input 
                        type="text"
                        name="name"
                        value={newName}
                        onChange={onchangeNewName}/>
                </div>
                <div className="group-from">
                
                    <label>Đơn vị tính</label>
                    <input 
                        type="text"
                        name= "unit"
                        value={newUnit}
                        onChange={onchangeNewUnit}/>
                </div>
                <div className="group-from">
                    <label>Số lượng</label>
                    <input 
                        type="number"
                        name="volume"
                        value={newVolume}
                        onChange={onchangeNewVolume}/>
                </div>
                <div className="group-from">
                    <label>Giá nhập</label>
                    <input 
                        type="number"
                        name="iPrice"
                        value={newIPrice}
                        onChange={onchangeNewIPrice}/>
                </div>
                <div className="group-from">
                    <label>Giá bán</label>
                    <input 
                        type="number" 
                        name ="oPrice"
                        value = {newOPirce}
                        onChange={onchangeNewOPrice}/>
                </div>
                {
                editRow
                    ? 
                    <Button className="primary__btn btn-add-new" onClick={onClickUpdate}>Cập nhật</Button>
                    :
                    <Button className="primary__btn btn-add-new" onClick={onClickAddNew}>Xác nhận</Button>
                }
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
                            <td><FaPen onClick={ e=> onClickFix(d)} className="icon-fix"/></td>
                            <td><AiOutlineDelete  className="icon-delete"/></td>
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