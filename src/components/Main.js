import React, {useState} from "react";
import { Routes, Route, useParams } from 'react-router-dom';

import StaffDetail from "./StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Footer from "./Footer";
import Header from "./Header";
import Home from "./home";
import PhongBan from "./PhongBan";
import BangLuong from "./BangLuong";


function Main() {
    const [staffs, setStaffs] = useState(STAFFS);
    // const [departments, setDepartments] = useState(DEPARTMENTS);
    const StaffWithId = () => {
        let params = useParams();
        // let staff = staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0];
        // alert(JSON.stringify(staff));
        return(
            <StaffDetail staff={staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0]} />
        );
    };

    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/'  element={<Home staffs={staffs} />} />
                <Route exact path='/nhansu' element={<Home staffs={staffs}/>} />
                <Route path='/nhansu/:staffId' element={<StaffWithId/>} />
                <Route path='/phongban' element={<PhongBan />} />
                <Route path='/bangluong' element={<BangLuong staffs={staffs}/>}/>

            </Routes>
            <Footer/>
        </div>
    )
}

export default Main;