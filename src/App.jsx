// import Admin_teacherSection from "./components/Admin_teacherSection"




import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import StudentProfile from "./components/StudentProfile";
import Landing from "./components/Landing";
import Login from "./components/Login"
import Add_facultyA from "./components/Add _facultyA";
import AddRegulation_V from "./components/AddRegulation_V";





function App() {
  return (
    <>

      <Landing/>
      <Login />
      <AdminLogin />
      <Admin_teacherSection />
      <AddRegulation_V></AddRegulation_V>
      <Admin_StudentSection />
      <StudentProfile />
    </>
  );
}

export default App;
