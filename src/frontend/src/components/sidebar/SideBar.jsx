import React from "react";
import { NavLink} from "react-router-dom";

import { Row} from "reactstrap";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import './sidebar.scss'

const nav__links__doctor = [
    {
        path: './doctor/patients',
        display: 'Bệnh nhân trong ngày',
    },
    {
        path: './doctor/warehouse',
        display: 'Xem kho thuốc',
    }
]
const nav__links__admin = [
    {
        path: './admin/customerreview',
        display: 'Đánh giá của khách hàng',
    },
    {
        path: './admin/statistics',
        display: 'Thống kê'
    },
    {
        path: './admin/employee',
        display: 'Quản lý nhân viên'
    }
]
const nav__links__parmacist = [

    {
        path: './pharmacist/patients',
        display: 'Bệnh nhân trong ngày'
    },
    {
        path: './pharmacist/warehouse',
        display: 'Kho thuốc'
    }
]
const Sidebar = ({user}) => {
    const {username, type, avatar } = user
    let nav__links, role
    switch (type) {
        case 1:
            nav__links = nav__links__admin;
            role = 'Admin';
            break;
        case 2: 
            nav__links = nav__links__doctor;
            role = 'Doctor';
            break;
        case 3: 
            nav__links = nav__links__parmacist
            role = 'Pharmacist'
            break;
        default:
            break;
    }
    const [showSubnav, setShowSubnav] = useState(false);

    const handleExploreClick = () => {
        setShowSubnav(!showSubnav);
    };
    return (

        <>
        <div className="sidebar">
            <section className="profile">
                <img src={avatar} className='profile-avatar' alt='' />
                <div className="profile-wrapper">
                    <h5 className="profile-username">{username}</h5>
                    <h6 className="profile-roles">{role}</h6>
                </div>
                
            </section>
            <Row>
                {nav__links.map((item, index) => (
                    <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item" key={index}>
                            {/* Khi hover vào item nào trên navbar
                                thì active màu cho item đó */}
                            <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                    navClass.isActive ? "active__link" : ""
                                    }
                                    onClick={item.subNav ? handleExploreClick : null} // Thêm sự kiện onClick
                                    >
                                    {item.display}
                            </NavLink>
                        </li>
                    </ul>
                ))}
                
            </Row>
            <Row>
                <h4 className="logout">
                    <div className="icon">
                    <TbLogout2 />
                    </div>
                    <a href="/">Đăng xuất</a>
                </h4>
            </Row>
        </div>
        
        
        </>
    )
}
export default Sidebar