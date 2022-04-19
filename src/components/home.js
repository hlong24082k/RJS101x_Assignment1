import React, { useState } from "react";
import '../App.css';
import '../css/style.css';

import { Card, CardImg, FormControl, Button, Form } from "react-bootstrap";
import { CardBody, CardText } from "reactstrap";
// import { STAFFS } from "../shared/staffs";
import { NavLink, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


 
function Home(props) {
    
    const [staff, setStaff] = useState({
        staffs: props.staffs,
        search: ''
    })
    let staffAll = [];
    console.log(staff.staffs)
   

    function onChange (event){
        setStaff({
            staffs: props.staffs,
            [event.target.name]: event.target.value
        });
    }
    
    function onSearch(){
        if(staff.search.length > 0){
            
            props.staffs.forEach((item) =>{
                if(item.name.toLowerCase().indexOf(staff.search.toLowerCase()) !== -1){
                    staffAll.push(item);
                }
            });
            console.log("truong hop a");
            console.log(staffAll);
        } else{
            staffAll = [ ... props.staffs];
            console.log(staffAll);
            console.log("truong hop nay");
        }
        setStaff({
            staffs: staffAll
        })
        console.log(staff.search)
    }

    const display = (staff) =>{
        return(
            <div key={staff.id} className="col-lg-2 col-md-4 col-sm-12 App infor">
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

    const homePage = staff.staffs.map(display);
    return(
        
        <div className="container"> 
            <div className="row row-header">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <NavLink 
                                className="nav-link navbar-brand" 
                                style={{margin:"0px", fontSize:"30px"}} 
                                to="/nhansu">Nhân viên</NavLink>
                        </BreadcrumbItem>
                        <Form className="d-flex" >
                                <FormControl
                                name = "search"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value = {staff.search}
                                onChange = {onChange}
                                />
                                <Button variant="outline-success" onClick={onSearch}>Search</Button>
                            </Form>
                        
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