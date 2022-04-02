import React, {Component} from 'react';
import { Navbar,NavbarBrand} from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import {STAFFS} from './shared/staffs';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS,
      cot: 3
    };
  }
  
  
  thaydoicot(c){
    this.setState({cot:c});
  }

  
  render(){
    console.log('Menu.props');
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <div style={{display:"inline"}}>
          <p style={{display:"inline",margin:"10px"}}>Chọn số cột hiển thị:</p>
          <p onClick={()=>this.thaydoicot(1)} className="col">1</p>
          <p onClick={()=>this.thaydoicot(2)} className="col">2</p>
          <p onClick={()=>this.thaydoicot(3)} className="col">3</p>
          <p onClick={()=>this.thaydoicot(6)} className="col">6</p>
        </div>      
        <StaffList nhanvien = {this.state.staffs} socot ={this.state.cot}/>
      </div>
    );

  }
  
}

export default App;