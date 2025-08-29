// import Admin_teacherSection from "./components/Admin_teacherSection"
<<<<<<< HEAD
import AddstudentR from "./components/addstudentR";
import Admin_StudentSection from "./components/Admin_StudentSection";
import Admin_teacherSection from "./components/Admin_teacherSection";
import AdminLogin from "./components/AdminLogin";


import Landing from "./components/Landing";

import Login from "./components/Login";

=======
>>>>>>> 6b329d89797837e754ede23a1840c5ebb806b537

import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import StudentProfile from "./components/StudentProfile";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Add_facultyA from "./components/Add _facultyA";





function App() {
  return (
    <>

      <Landing/>
      <Login />
      <AdminLogin />
      <Admin_teacherSection />

      <Admin_StudentSection />
      <StudentProfile />
      <AddstudentR></AddstudentR>
      <StudentProfile/>
      <Add_facultyA/>
    </>
  );
}

export default App;
