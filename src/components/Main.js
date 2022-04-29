import { Routes, Route, useParams } from 'react-router-dom';
import StaffDetail from "./StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Footer from "./Footer";
import Header from "./Header";
import Home from "./home";
import PhongBan from "./PhongBan";
import BangLuong from "./BangLuong";
import React,{useState, Component} from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };  
    this.callbackFunction =this.callbackFunction.bind(this);
  }
  callbackFunction = (childData) => {
    const newList = this.state.staffs;
    const id = this.state.staffs.length;
    childData.id = id;
    if (childData.department ==='Sale')
      childData.department = this.state.department[0];
    else if (childData.department ==='HR')
      childData.department = this.state.department[1];
    else if (childData.department ==='Marketing')
      childData.department = this.state.department[2];
    else if(childData.department ==='IT')
      childData.department = this.state.department[3];
    else 
      childData.department = this.state.department[4];
    newList.push(childData);
    this.setState({
      staffs: newList
    });
  }
  render(){
    const StaffWithId = ({match}) => {
      if (this.state.staffs.length >parseInt(match.params.staffsId,10)){
      return(
          <StaffDetail staff={this.state.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId,10))[0]} 
             />
      );
      }
    }
    return(
      <div>
          <Header/>
          <Routes>
              <Route path='/'  element={<Home staffs={this.state.staffs}  parentCallback = {this.callbackFunction}/>} />
              <Route exact path='/nhansu' element={<Home staffs={this.state.staffs} parentCallback = {this.callbackFunction}/>} />
              <Route path='/nhansu/:staffId' element={<StaffWithId/>} />
              <Route path='/phongban' element={<PhongBan />} />
              <Route path='/bangluong' element={<BangLuong staffs={this.state.staffs}/>}/>

          </Routes>
          <Footer/>
      </div>
    )
  }
  
}

export default Main;