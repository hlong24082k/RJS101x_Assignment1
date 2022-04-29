import { Routes, Route, useParams } from 'react-router-dom';
import StaffDetail from "./StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Footer from "./Footer";
import Header from "./Header";
import Home from "./home";
import PhongBan from "./PhongBan";
import BangLuong from "./BangLuong";


function Main() {
    const [staffs, setStaffs] = useState({
        staffs: STAFFS,
        derpartment: DEPARTMENTS
    });
    // const [departments, setDepartments] = useState(DEPARTMENTS);
    const StaffWithId = () => {
        let params = useParams();
        // let staff = staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0];
        // alert(JSON.stringify(staff));
        return(
            <StaffDetail staff={staffs.staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0]} />
        );
    };

    const callbackFunction = (childData) => {
        const newList = staffs.staffs;
        const id = staffs.staffs.length;
        childData.id = id;
        if (childData.department ==='Sale')
          childData.department = staffs.staffs.department[0];
        else if (childData.department ==='HR')
          childData.department = staffs.staffs.department[1];
        else if (childData.department ==='Marketing')
          childData.department = staffs.staffs.department[2];
        else if(childData.department ==='IT')
          childData.department = staffs.staffs.department[3];
        else 
          childData.department = staffs.staffs.department[4];
        newList.push(childData);
        setStaffs({
          staffs: newList
    });
    }

    return(
        <div>
            <Header staff = {staffs}/>
            <Routes>
                <Route path='/'  element={<Home staffs={staffs.staffs}  parentCallback = {callbackFunction}/>} />
                <Route exact path='/nhansu' element={<Home staffs={staffs.staffs}/>} />
                <Route path='/nhansu/:staffId' element={<StaffWithId/>} />
                <Route path='/phongban' element={<PhongBan />} />
                <Route path='/bangluong' element={<BangLuong staffs={staffs.staffs}/>}/>

            </Routes>
            <Footer/>
        </div>
    )
}

export default Main;