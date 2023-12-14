import React from "react";

import { IoSearch } from "react-icons/io5";
const WarehouseDoctor = () => {
    return (
        <>
        <div className="search-bar d-flex align-items-center">
            <div className="search-bar-input">
            <IoSearch className="icon-search"/>
            <input type="text" placeholder={ "Search medicine"}/>
            </div>            
        </div>
        </>
        
    )
}
export default WarehouseDoctor