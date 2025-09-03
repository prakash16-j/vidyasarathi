import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddRegulation_V from "./components/AddRegulation_V"


import Admin_StudentSection from "./components/Admin/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin/Admin_teacherSection"

import StudentProfile from "./components/Teachers/TeacherProfile";
import Landing from "./components/Admin/Landing";
import Login from "./components/Admin/Login"

import Addregulation from "./components/Admin/Addregulation";
import Addstudents from "./components/Admin/Addstudents";
import Add_faculty from "./components/Admin/Add_faculty";
// import Teacher_Student_Search from "./components/Teacher_Student_Search";
import Admin_ViewPage from "./components/Admin/Admin_ViewPage";
import StudentProfile_adminview from "./components/Admin/StudentProfile_adminview";
import StudentTable from "./components/Admin/StudentTable";
import StudentTable2 from "./components/Admin/StudentTable2";
import TeacherLogin from "./components/Teachers/TeacherLogin";
import TeacherProfile from "./components/Teachers/TeacherProfile";





function App() {
  return (
    <>
 <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/view" element={<Admin_ViewPage />} />
        <Route path="/admin-teachers" element={<Admin_teacherSection />} />
        <Route path="/admin-students" element={<Admin_StudentSection />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-table" element={<StudentTable/>}/>
        <Route path="/teacher-table" element={<StudentTable2/>}/>
        <Route path="/add-faculty" element={<Add_faculty />} />
        <Route path="/add-students" element={<Addstudents />} />
        <Route path="/add-regulation" element={<Addregulation />} />
        <Route path="/studentProfile" element={<StudentProfile_adminview/>}/>
        <Route path="/teacher-login" element={<TeacherLogin/>}/>
        <Route path="/teacher-profile" element={<TeacherProfile/>}/>
      </Routes>
    </Router>
    <ViewStudents_faculty></ViewStudents_faculty>
    </>
  );
}

export default App;
