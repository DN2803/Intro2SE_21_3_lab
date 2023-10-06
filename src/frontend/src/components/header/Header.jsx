import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/Logo.png";

import "./header.scss";

const nav__links = [
    {
        path: "./home",
        display: "Trang chủ",
    },

    {
        path: "./booking",
        display: "Đặt lịch với bác sĩ",
    },

    {
        path: "./aboutus",
        display: "Thông tin về chúng tôi",
    },
];

const Header = () => {
    const headerRef = useRef(null);

    // Nếu cuộn xuống 80px trở xuống thì cho header sticky
    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };
    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener("scroll", stickyHeaderFunc);
    });

    const [showSubnav, setShowSubnav] = useState(false);

    const handleExploreClick = () => {
        setShowSubnav(!showSubnav);
    };

    //   ----------------------
    const handleClickOutsideSubnav = (event) => {
        if (
            showSubnav &&
            headerRef.current &&
            !headerRef.current.contains(event.target)
        ) {
            setShowSubnav(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideSubnav);

        return () =>
            document.removeEventListener("click", handleClickOutsideSubnav);
    }, [showSubnav]);

    //   menu
    // Bấm vào icon menu thì hiện menu list
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div
                        className="nav__wrapper d-flex align-items-center 
                justify-content-between"
                    >
                        {/* ======= logo ========= */}
                        <div className="logo d-flex flex-row"  >
                            <img className="ellipse" alt="" src={logo} />
                            <div className="text-wrapper">Teyvat</div>
                        </div>
                        {/* ====================== */}

                        {/* ========= menu ========  */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul
                                className="menu d-flex justify-content-center
                        gap-3">
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
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
                                ))}
                            {/* ========================= */}
                            <div
                                className="nav__btns d-flex align-items-center gap-4"
                            >
                                <Button className="btn primary__btn">
                                    <Link to="/login">Đăng nhập</Link>
                                </Button>
                            </div>
                            
                            </ul>
                            
                        
                        </div>
                        {/* ======================= */}

                    {/* Trên mobile */}
                    <span className='mobile__menu'>
                                <i className='ri-menu-line' onClick={toggleMenu}></i>
                            </span>
                    </div>
                </Row>
            </Container>
        </header>
    );
};
export default Header;
