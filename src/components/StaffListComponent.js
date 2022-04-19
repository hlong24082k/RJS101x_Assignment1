import React, {Component} from 'react';
import {Card,CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected_nhanvien:null
        }  
    }
    onnvSelect(staffs) {
        this.setState({ selected_nhanvien:staffs});
        
    };
    rendernhanvien(a){
        if(a == null){
            return(
                <div>
                    <p>Bấm vào tên nhân viên để xem thông tin</p>
                </div>
            )
        }
        else{
            return(
                <div className='row display'>
                <div className="col-12 col-sm-6 col-md-6">
                <Card>
                    <CardBody>
                        <h6> Họ và tên: {a.name}</h6>
                        <p>Ngày sinh: {dateFormat(a.doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty: {dateFormat(a.startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban: {a.department.name}</p>
                        <p>Số ngày nghỉ còn lại:{a.annualLeave}</p>
                        <p>Số ngày đã làm thêm:{a.overTime}</p>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                </div>
                </div>
            )
        }
    };
    render(){
        const menu = this.props.nhanvien.map((staffs)=>{
            console.log(this.props.socot);
            var x;
            if (this.props.socot ==3)
                x  = "col-12 col-sm-6 col-md-4 infor";   
            else if (this.props.socot ==1)
                x  = "col-12 col-sm-12 col-md-12 infor";
            else if (this.props.socot==2)
                x  = "col-12 col-sm-6 col-md-6 infor";
            else
                x  = "col-12 col-sm-5 col-md-2";
            //x = "col-12 col-sm-6 col-md-4 infor";
                 
            if (this.state.selected_nhanvien!=null){
                if(this.state.selected_nhanvien.id ==staffs.id){
                    return(
                        <div key={staffs.id} className= {x}>
                            <Card onClick={()=>this.onnvSelect(staffs)}>
                                 <CardTitle style ={{color:'red'}}>{staffs.name}</CardTitle>   
                            </Card>
                        </div>
                    )}
                else{
                    return(
                        <div key={staffs.id} className= {x}>
                            <Card onClick={()=>this.onnvSelect(staffs)}>
                                <CardTitle>{staffs.name}</CardTitle>   
                            </Card>
                        </div>
                    )}

                }
            else{
                return( <
                    div key={staffs.id} className= {x}>
                        <Card onClick={()=>this.onnvSelect(staffs)}>
                            <CardTitle>{staffs.name}</CardTitle>   
                        </Card>
                    </div>
                );}
            });
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                    {this.rendernhanvien(this.state.selected_nhanvien)}
            </div>
        );
    }
}
export default StaffList;

  