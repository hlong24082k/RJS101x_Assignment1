import React, { Component, useState } from "react";

import { NavLink } from "react-router-dom";
import {  Container, Navbar, Nav} from 'react-bootstrap';

function Header (props){
    return(
        <div>
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link navbar-brand" id="header-logo" to="/nhansu">Ứng dụng quản lí nhân viên V2.0</NavLink>
                            <NavLink className="nav-link" to="/nhansu"><span className="fa fa-users"></span>Nhân viên</NavLink>
                            <NavLink className="nav-link" to="/phongban"><span className="fa fa-id-card-o"></span>Phòng ban</NavLink>
                            <NavLink className="nav-link" to="/bangluong"><span className="fa fa-money"></span>Bảng lương</NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                
            </div>
    )
}

export default Header;