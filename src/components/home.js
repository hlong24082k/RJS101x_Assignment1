import React, { useState } from "react";
import '../App.css';

import { Card, CardImg, FormControl, Button, Form } from "react-bootstrap";
import { CardBody, CardText } from "reactstrap";
// import { STAFFS } from "../shared/staffs";
import { NavLink, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


 
function Home(props) {
    

    const display = (staff) =>{
        return(
            <div className="col-lg-2 col-md-4 col-sm-12 App infor">
                <Card >
                    <CardBody>
                        <Link to={`/nhansu/${staff.id}`}>
                            <CardImg width="100%" src={staff.image} alt={staff.image} />
                        </Link>   
                        <CardText>{staff.name}</CardText>                            
                    </CardBody>
                </Card>
            </div>
        )
    }

    const homePage = props.staffs.map(display);
    return(
        
        <div className="container"> 
            <div className="row row-header">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><NavLink className="nav-link navbar-brand" style={{margin:"0px", fontSize:"30px"}} to="/nhansu">Nhân viên</NavLink></BreadcrumbItem>
                    </Breadcrumb>
                    <hr/>
                </div>
            </div>

            <div className="row">
                {homePage}
            </div>
            
        </div>   
    )
}



export default Home;