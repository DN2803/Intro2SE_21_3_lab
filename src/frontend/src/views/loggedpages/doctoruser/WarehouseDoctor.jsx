import React, {useState}from "react";

import { IoSearch } from "react-icons/io5";
const WarehouseDoctor = () => {
    const [data, setdata] = useState([
        {
            id:"MD001",
            name: "Para",
            stock: 60,
            unit: 'viên',
            iPrice: 10000,
            oPrice: 12000
        },
        
    ]);
    const title = [
        {Header: "ID", accessor: 'id'},
        {Header: "Tên thuốc", accessor: 'name'},
        {Header: "Số lượng tồn", accessor: 'stock'},
        {Header: "Đơn vị tính", accessor: 'unit'},
        {Header: "Giá nhập kho", accessor: 'iPrice'},
        {Header: "Giá bán", accessor: 'oPrice'},
        
        {Header: ""},
        {Header: ""}
    ];
    return (
        <>
        <div className="search-bar d-flex align-items-center">
            <div className="search-bar-input">
            <IoSearch className="icon-search"/>
            <input type="text" placeholder={ "Search medicine"}/>
            </div>            
        </div>
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
                            <td>{d.stock}</td>
                            <td>{d.unit}</td>
                            <td>{d.iPrice}</td>
                            <td>{d.oPrice}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </div>
        </>
        
    )
}
export default WarehouseDoctor