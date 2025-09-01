import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRegulation_V from "./components/AddRegulation_V"


import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import StudentProfile from "./components/StudentProfile";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Add_facultyA from "./components/Add _facultyA";
import Addregulation from "./Addregulation";
import Addstudents from "./components/Addstudents";
import Add_faculty from "./components/Add_faculty";
// import Teacher_Student_Search from "./components/Teacher_Student_Search";
import Admin_ViewPage from "./components/Admin_ViewPage";
import AddstudentR from "./components/AddstudentR";





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
        <Route path="/add-faculty" element={<Add_faculty />} />
        <Route path="/add-students" element={<Addstudents />} />
        <Route path="/add-regulation" element={<Addregulation />} />
        {/* <Route path="/student_teacher_ser" element={<Teacher_Student_Search/>} /> */}
      </Routes>
    </Router>
      
   
    </>
  );
}

export default App;
