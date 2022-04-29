// import React, { useState } from "react";
// import '../App.css';
// import '../css/style.css';

// import {  FormControl } from "react-bootstrap";
// import { CardBody, CardText, Col, Card, CardImg,CardTitle,Button,Input, Form, Row, Modal, ModalHeader, ModalBody,Label,FormFeedback } from "reactstrap";
// // import { STAFFS } from "../shared/staffs";
// import { NavLink, Route } from "react-router-dom";
// import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import { Link } from "react-router-dom";


 
// const Home = (props) =>{
    
//     const [staff, setStaff] = useState({
//         staffs: props.staffs,
//         search: '',
//         username:'',
//         doB:'2000-01-01',
//         salaryScale:1,
//         startDate:'2022-01-01',
//         department:'Sale',
//         annualLeave:0,
//         overTime: 0,
       
//         touched: {
//             username: false,
//             salaryScale:false,
//             annualLeave:false,
//             overTime:false
//         }
//     })

//     const [isModalOpen,  SetisModalOpen] = useState(false);
//     let staffAll = [];
//     console.log(staff.staffs)
   

//     function onChange (event){
//         setStaff({
//             staffs: props.staffs,
//             [event.target.name]: event.target.value
//         });
//         console.log(staff)
//     }

    
//     function onSearch(){
//         if(staff.search.length > 0){
            
//             props.staffs.forEach((item) =>{
//                 if(item.name.toLowerCase().indexOf(staff.search.toLowerCase()) !== -1){
//                     staffAll.push(item);
//                 }
//             });
//             console.log("truong hop a");
//             console.log(staffAll);
//         } else{
//             staffAll = [ ... props.staffs];
//             console.log(staffAll);
//             console.log("truong hop B");
//         }
//         setStaff({
//             staffs: staffAll
//         })
//         console.log(staff.search)
//     }

//     function toggleModal(){
//         // setStaff({
//         //     isModalOpen: !staff.isModalOpen
//         //   });
//         debugger
//         SetisModalOpen(!isModalOpen);
//     }
//     const handleBlur = (field) => (evt) => {
//         setStaff({
//             touched: { ...staff.touched, [field]: true }
//         });
//     }

//     function validate(username, salaryScale, annualLeave, overTime,doB,startDate) {
//         const errors = {
//             username: '',
//             salaryScale:'',
//             annualLeave:'',
//             overTime:'',
//             startDate:'',
//         };

//         if(startDate<=doB)
//             errors.startDate ='ngày vào công ty phải sau ngày sinh';
        
//         if (staff.username && username.length < 3)
//             errors.username = 'Tên ít nhất 3 kí tự';
//         else if (staff.username && username.length > 20)
//             errors.username = 'Tên tối đa 20 kí tự';
//         if (staff.salaryScale && salaryScale.length<=0)
//             errors.salaryScale = 'Bạn chưa nhập';
//         else if (staff.salaryScale && isNaN(salaryScale))
//             errors.salaryScale = 'Hệ số lương phải là một số';
//         else if (staff.salaryScale && !(parseFloat(salaryScale)>=1&& parseFloat(salaryScale)<=3))
//             errors.salaryScale = 'Hệ số lương >= 1 và <= 3';
//         if (staff.annualLeave && annualLeave.length<=0)
//             errors.annualLeave = 'Bạn chưa nhập';
//         else if (staff.annualLeave && isNaN(annualLeave))
//             errors.annualLeave = 'kiểu nhập vào phải là số';
//         else if(staff.annualLeave && parseFloat(annualLeave)<0)
//             errors.annualLeave = 'Không thể nhập vào số <0';
        
//         if (staff.overTime && overTime.length<=0)
//             errors.overTime = 'Bạn chưa nhập';
//         else if (staff.overTime && isNaN(overTime))
//             errors.overTime = 'kiểu nhập vào phải là số';
//         else if(staff.overTime && parseFloat(overTime)<0)
//             errors.overTime = 'Không thể nhập vào số <0';

//         return errors;
//     }

   
    
//     function addNhanvien(event){
//         event.preventDefault();
//         console.log(staff.username)
//         const newStaff={
//             name: staff.username,
//             salaryScale: staff.salaryScale,
//             annualLeave: staff.annualLeave,
//             overTime: staff.overTime,
//             doB: staff.doB,
//             department: staff.department,
//             startDate : staff.startDate,
//             image: '/assets/images/alberto.png',
//         };
//         const errors= validate(staff.username, staff.salaryScale, staff.annualLeave, staff.overTime,staff.doB,staff.startDate);
//         if (staff.touched.username===true){
//             if(errors.username ===''&& errors.salaryScale ===''&& errors.annualLeave ===''&& errors.overTime ===''&& errors.startDate ===''){
//                 console.log("dung");
//                 console.log(newStaff);
//                 props.parentCallback(newStaff);
//                 setStaff({
//                     username:'',
//                     touched:{ 
//                         username: false,
//                         salaryScale:false,
//                         annualLeave:false,
//                         overTime:false
//                       }
//                 });
                
//             }
//         }
//         else
//             setStaff({
//                 touched: {
//                     username:true,
//                 }
//             })
//         return;
//     }
//     const errors= validate(staff.username, staff.salaryScale, staff.annualLeave, staff.overTime,staff.doB,staff.startDate);
//     const display = (staff) =>{
//         return(
//             <div key={staff.id} className="col-lg-2 col-md-4 col-sm-12 App infor">
//                 <Card >
//                     <CardBody>
//                         <Link to={`/nhansu/${staff.id}`}>
//                             <CardImg width="100%" src={staff.image} alt={staff.image} />
//                         </Link>   
//                         <CardText>{staff.name}</CardText>                            
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     }
//     const homePage = staff && props.staffs.map(display);
   
//     return(
        
//         <div className="container"> 
//             <div className="row row-header">
//                 <div className="col-12">
//                     <Breadcrumb>
//                         <BreadcrumbItem>
//                             <NavLink 
//                                 className="nav-link navbar-brand" 
//                                 style={{margin:"0px", fontSize:"30px"}} 
//                                 to="/nhansu">Nhân viên</NavLink>
//                         </BreadcrumbItem>
//                         <div className="col-1">
//                                 <Col style={{marginTop:"10px"}}>
//                                     <Button type="submit" color="primary" onClick={toggleModal}>+</Button>
//                                 </Col>
//                         </div>
//                         <Form className="d-flex" >
//                                 <FormControl
//                                 name = "search"
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                                 value = {staff.search}
//                                 onChange = {onChange}
//                                 />
//                                 <Button variant="outline-success" onClick={onSearch}>Search</Button>
//                         </Form>
//                     </Breadcrumb>
//                     <hr/>
//                 </div> 
//             </div>
//             <div className="row">
//                 {homePage}
//             </div>
            
//             <Modal isOpen={isModalOpen} toggle={toggleModal}>
//                         <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader>
//                         <ModalBody>
//                     <Form>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                                 <Label  htmlFor="username">Tên</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="text" id="username" name="username"
//                                     placeholder ="Le Phuoc Hoang Long"
//                                     valid={errors.username === ''}
//                                     invalid={errors.username !== ''}
//                                     onBlur={handleBlur('username')}
//                                     value={staff.username}
//                                     onChange={onChange} />
//                                 <FormFeedback>{errors.username}</FormFeedback>
//                             </Col>
//                         </div>

//                         <div className="form-group row">
//                             <Col className="col-4">
//                                 <Label htmlFor="doB">Ngày sinh</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="date" id="doB" name="doB"
//                                       value={staff.doB}
//                                       onChange={onChange} />
//                             </Col>
//                         </div>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                             <Label htmlFor="startDate">Ngày vào công ty</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="date" id="startDate" name="startDate"
//                                     value={staff.startDate}
//                                     valid={errors.startDate === ''}
//                                     invalid={errors.startDate !== ''}
//                                     onChange={onChange}   />
//                                     <FormFeedback>{errors.startDate}</FormFeedback>
//                             </Col>
//                         </div>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                             <Label htmlFor="department">Phòng ban</Label>
//                             </Col>
//                             <Col className="col-8">

//                                 <Input type="select" id="department" name="department"
//                                     value={staff.department}
//                                     onChange={onChange} 
//                                     ><option>Sale</option>
//                                     <option>HR</option>
//                                     <option>Marketing</option>
//                                     <option>IT</option>
//                                     <option>Finance</option>
//                                     </Input>
//                             </Col>
//                         </div>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                                 <Label htmlFor="salaryScale">Hệ số lương</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="text" id="salaryScale" name="salaryScale"
//                                     placeholder ="1->3"
//                                     value={staff.salaryScale}
//                                     valid={errors.salaryScale === ''}
//                                     invalid={errors.salaryScale !== ''}
//                                     onBlur={handleBlur('salaryScale')}
//                                     onChange={onChange} />
//                                 <FormFeedback>{errors.salaryScale}</FormFeedback>
//                             </Col>
//                         </div>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                                 <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="text" id="annualLeave" name="annualLeave"
//                                     value={staff.annualLeave}
//                                     valid={errors.annualLeave === ''}
//                                     invalid={errors.annualLeave !== ''}
//                                     onBlur={handleBlur('annualLeave')}
//                                     onChange={onChange}  />
//                                 <FormFeedback>{errors.annualLeave}</FormFeedback>
//                             </Col>
//                         </div>
//                         <div className="form-group row">
//                             <Col className="col-4">
//                                 <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
//                             </Col>
//                             <Col className="col-8">
//                                 <Input type="text" id="overTime" name="overTime"
//                                     value={staff.overTime}
//                                     valid={errors.overTime === ''}
//                                     invalid={errors.overTime !== ''}
//                                     onBlur={handleBlur('overTime')}
//                                     onChange={onChange}  />
//                                 <FormFeedback>{errors.overTime}</FormFeedback>
//                             </Col>
//                         </div> 
//                         <div class="form-group row">
//                              <div class="col-12  text-center">
//                                 <Button type="submit" color="primary"
//                                  onClick = {addNhanvien}
//                                 >Thêm nhân viên</Button>
//                             </div>
//                         </div>  
//                         </Form>
//                     </ModalBody>
//                 </Modal>
//         </div>   
//     )
// }
// export default Home;


import React,{Component} from 'react';
import { Card, CardImg,CardTitle,Button,Input, Form, Row,Col, Modal, ModalHeader, ModalBody,Label,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

 function RenderMenuItem ({staffs}) {

        return (
            <Card>
                <Link to={`/menu/${staffs.id}`} >
                    <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                    
                </Link>
                <CardTitle style = {{color:"black", textAlign: "center"}}>{staffs.name}</CardTitle>
            </Card>
        );      
}
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            staffs :this.props.staffs,
            name:'',
            username:'',
            doB:'2000-01-01',
            salaryScale:1,
            startDate:'2022-01-01',
            department:'Sale',
            annualLeave:0,
            overTime: 0,
            isModalOpen: false,
            touched: {
                username: false,
                salaryScale:false,
                annualLeave:false,
                overTime:false
            }
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
        this.addNhanvien = this.addNhanvien.bind(this);
        this.handler = this.handler.bind(this);
    }

    handler(e){
        this.props.parentCallback(e);
    }

    handleSearch(event){
        event.preventDefault();
        const result = this.props.staffs.filter(s => s.name.toLowerCase().match(this.state.name.toLowerCase()));
        this.setState({
            staffs:result,
            name:this.name.value,
        });
        
    }
    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(username, salaryScale, annualLeave, overTime,doB,startDate) {
        const errors = {
            username: '',
            salaryScale:'',
            annualLeave:'',
            overTime:'',
            startDate:'',
        };
        if(startDate<=doB)
            errors.startDate ='ngày vào công ty phải sau ngày sinh';

        if (this.state.touched.username && username.length < 3)
            errors.username = 'Tên ít nhất 3 kí tự';
        else if (this.state.touched.username && username.length > 20)
            errors.username = 'Tên tối đa 20 kí tự';
        if (this.state.touched.salaryScale && salaryScale.length<=0)
            errors.salaryScale = 'Bạn chưa nhập';
        else if (this.state.touched.salaryScale && isNaN(salaryScale))
            errors.salaryScale = 'Hệ số lương phải là một số';
        else if (this.state.touched.salaryScale && !(parseFloat(salaryScale)>=1&& parseFloat(salaryScale)<=3))
            errors.salaryScale = 'Hệ số lương >= 1 và <= 3';
        if (this.state.touched.annualLeave && annualLeave.length<=0)
            errors.annualLeave = 'Bạn chưa nhập';
        else if (this.state.touched.annualLeave && isNaN(annualLeave))
            errors.annualLeave = 'kiểu nhập vào phải là số';
        else if(this.state.touched.annualLeave && parseFloat(annualLeave)<0)
            errors.annualLeave = 'Không thể nhập vào số <0';
        
        if (this.state.touched.overTime && overTime.length<=0)
            errors.overTime = 'Bạn chưa nhập';
        else if (this.state.touched.overTime && isNaN(overTime))
            errors.overTime = 'kiểu nhập vào phải là số';
        else if(this.state.touched.overTime && parseFloat(overTime)<0)
            errors.overTime = 'Không thể nhập vào số <0';

        return errors;
    }
    addNhanvien(event){
        event.preventDefault();
        const newStaff={
            name: this.state.username,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            doB: this.state.doB,
            department: this.state.department,
            startDate : this.state.startDate,
            image: '/assets/images/alberto.png',
        };
        const errors= this.validate(this.state.username, this.state.salaryScale, this.state.annualLeave, this.state.overTime,this.state.doB,this.state.startDate);
        if (this.state.touched.username===true){
            if(errors.username ===''&& errors.salaryScale ===''&& errors.annualLeave ===''&& errors.overTime ===''&& errors.startDate ===''){
                this.handler(newStaff);
                this.setState({
                    isModalOpen:false,
                    username:'',
                    touched:{ 
                        username: false,
                        salaryScale:false,
                        annualLeave:false,
                        overTime:false
                      }
                });
                
            }
        }
        else
        this.setState({
            touched: {
                username:true,
            }
        })
            return;
    }
        render(){
            const errors= this.validate(this.state.username, this.state.salaryScale, this.state.annualLeave, this.state.overTime,this.state.doB,this.state.startDate);
            const menu = this.state.staffs.map((staffs) => {
                return (
                    <div  className="col-12 col-md-4 col-lg-2">
                        <RenderMenuItem staffs = {staffs} />
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className="row">
                            <div className="col-9 col-md-3 col-lg-2" style={{marginTop:"10px"}} >
                                <h4>Nhân viên</h4>
                            </div>
                            <div className="col-1">
                                <Col style={{marginTop:"5px"}}>
                                            <Button type="submit" color="primary" onClick={this.toggleModal}
                                            >+</Button>
                                        </Col>
                            </div>
                            <div className='col-12 col-md-8'>
                                <Form onSubmit={this.handleSearch}>
                                    <Row className="form-group">
                                        <Col md={{size: 6, offset: 2}}  style={{marginTop:"5px"}}>
                                            <Input type="text" id="name" name="name" 
                                            innerRef={(input) => this.name = input}
                                            onChange ={this.handleInputChange} />
                                        </Col>
                                        <Col md={{size:2, offset: 1}}  style={{marginTop:"5px", marginLeft:"0px"}}>
                                            <Button type="submit" color="primary"
                                            >Search</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <hr />
                        </div>                
                    <div className="row">
                        {menu}
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                    <Form onSubmit={this.handleAddstaff}>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label  htmlFor="username">Tên</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="username" name="username"
                                    placeholder ="Le Phuoc Hoang Long"
                                    valid={errors.username === ''}
                                    invalid={errors.username !== ''}
                                    onBlur={this.handleBlur('username')}
                                    value={this.state.username}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.username}</FormFeedback>
                            </Col>
                        </div>

                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="doB">Ngày sinh</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="doB" name="doB"
                                      value={this.state.doB}
                                      onChange={this.handleInputChange} />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                            <Label htmlFor="startDate">Ngày vào công ty</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    valid={errors.startDate === ''}
                                    invalid={errors.startDate !== ''}
                                    onChange={this.handleInputChange}   />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                            <Label htmlFor="department">Phòng ban</Label>
                            </Col>
                            <Col className="col-8">

                                <Input type="select" id="department" name="department"
                                    value={this.state.department}
                                    onChange={this.handleInputChange} 
                                    ><option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                    </Input>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="salaryScale" name="salaryScale"
                                    placeholder ="1->3"
                                    value={this.state.salaryScale}
                                    valid={errors.salaryScale === ''}
                                    invalid={errors.salaryScale !== ''}
                                    onBlur={this.handleBlur('salaryScale')}
                                    
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.salaryScale}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="annualLeave" name="annualLeave"
                                    value={this.state.annualLeave}
                                    valid={errors.annualLeave === ''}
                                    invalid={errors.annualLeave !== ''}
                                    onBlur={this.handleBlur('annualLeave')}
                                    onChange={this.handleInputChange}  />
                                <FormFeedback>{errors.annualLeave}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="overTime" name="overTime"
                                    value={this.state.overTime}
                                    valid={errors.overTime === ''}
                                    invalid={errors.overTime !== ''}
                                    onBlur={this.handleBlur('overTime')}
                                    onChange={this.handleInputChange}  />
                                <FormFeedback>{errors.overTime}</FormFeedback>
                            </Col>
                        </div> 
                        <div class="form-group row">
                             <div class="col-12  text-center">
                                <Button type="submit" color="primary"
                                 onClick = {this.addNhanvien}
                                >Thêm nhân viên</Button>
                            </div>
                        </div>  
                        </Form>
                    </ModalBody>
                </Modal>
                </div>
            );
    }
}
export default Home;