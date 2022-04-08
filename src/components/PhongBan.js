import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {DEPARTMENTS} from '../shared/staffs';
import { NavLink } from "react-router-dom";

function PhongBan(){
    const [department, setDepartment] = useState(DEPARTMENTS);
    
    function displayPB (department){
        return(
            <div className="col-lg-4 col-md-6 col-sm-12" style={{magin:"15px 0px"}}>
                <Card>
                    <Card.Body>
                        <Card.Title>{department.name}</Card.Title>
                        <Card.Text>
                            Số lượng nhân viên: {department.numberOfStaff}.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }

    const phongBanPage = department.map(displayPB);

    return(
        <div className="container">
            <div className="row row-header">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><NavLink className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} to="/home">Nhân viên</NavLink></BreadcrumbItem>
                        <BreadcrumbItem className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} active>Phòng ban</BreadcrumbItem>
                    </Breadcrumb>
                    <hr></hr>
                </div>
            </div>

            <div className="row infor-pb">
                {phongBanPage}
            </div>
        </div>
    )
}

export default PhongBan;