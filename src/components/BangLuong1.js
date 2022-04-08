import React, { useState } from "react";
import { Card,Form } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import {STAFFS} from '../shared/staffs';

function BangLuong(props){
    const [salary, setSalary] = useState(STAFFS);

    function aa(search){
        // let val1 = event.target.value;
        // if (val1 == 2){
            debugger;
            if(search === 'tang'){
                
                setSalary(salary.sort(function(a,b){
                    return  a.luong - b.luong;
                }));
            }else if(search === 'giam'){
                setSalary(salary.sort(function(a,b){
                    return  b.luong - a.luong ;
                }));
            }
    }

    function displayBL(staff){
        let x = staff.salaryScale * 3000000 + staff.overTime * 200000;
        staff.luong = x;
        console.log(staff.luong);
        
        return(
            <div className="col-lg-4 col-md-6 col-sm-12 infor">
                <Card>
                    <Card.Body>
                        <Card.Title>{staff.name}</Card.Title>                      
                        <Card.Text>Mã số nhân viên: {staff.id}</Card.Text>
                        <Card.Text>Hệ số lương: {staff.salaryScale}</Card.Text>
                        <Card.Text>Số giờ làm thêm: {staff.overTime}</Card.Text>
                        <div>
                            <Card.Text style={{color:"red"}}>Lương: {x.toFixed(0)}</Card.Text>
                        </div>                      
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
    
    console.log(salary)
    const bangLuongPage = salary.map(displayBL);
    

    return(
        <div className="container"> 
            
            <div className="row row-header">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><NavLink className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} to="/nhansu">Nhân viên</NavLink></BreadcrumbItem>
                        <BreadcrumbItem className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <p onClick={() => aa("tang")}>sua doi tăng</p>

                <p onClick={() => aa("giam")}>sua doi giam</p>
                <Form.Select aria-label="Default select example" onChange={aa}>
                    <option>Open this select menu</option>
                    <option value="1">sắp xếp theo tên</option>
                    <option value="2">sắp xếp theo lương</option>   
                </Form.Select>
                </div>
                
                {bangLuongPage}
            </div>
            
        </div>
    )
}

export default BangLuong;