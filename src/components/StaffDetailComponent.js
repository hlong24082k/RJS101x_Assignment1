import React from "react";

import { Breadcrumb, BreadcrumbItem, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import { CardImg, Card } from 'react-bootstrap';
import dateFormat from "dateformat";

function StaffDetail (props) {
    return(
        <div className="container">
            <div className="row row-header">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><NavLink className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} to="/nhansu">Nhân viên</NavLink></BreadcrumbItem>
                        <BreadcrumbItem className="nav-link navbar-brand" style={{margin:"0px",fontSize:"30px"}} active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <hr></hr>
                </div>
            </div>
            <div className="row infor-detail">                
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <CardImg width="100%" src={props.staff.image} alt={props.staff.image} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <Card.Title>
                            Họ và tên: {props.staff.name}
                        </Card.Title>
                        <Card.Text>
                            Ngày sinh: {dateFormat(props.staff.doB, "dd/mm/yyyy")}
                        </Card.Text>
                        <Card.Text>
                            Ngày vào công ty: {dateFormat(props.staff.startDate, "dd/mm/yyyy")}
                        </Card.Text>
                        <Card.Text>
                            Phòng ban: {props.staff.department.name}
                        </Card.Text>
                        <Card.Text>
                            Số ngày nghĩ còn lại: {props.staff.annualLeave}
                        </Card.Text>
                        <Card.Text>
                            Số ngày đã làm thêm: {props.staff.overTime}
                        </Card.Text>
                    </div>
            </div>
        </div>
    )
}

export default StaffDetail;