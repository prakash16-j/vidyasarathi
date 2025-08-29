// import Admin_teacherSection from "./components/Admin_teacherSection"
import Addregulation from "./Addregulation";
import Admin_StudentSection from "./components/Admin_StudentSection";
import Admin_teacherSection from "./components/Admin_teacherSection";
import AdminLogin from "./components/AdminLogin";

import Landing from "./components/Landing";

import Login from "./components/Login";


import StudentProfile from "./components/StudentProfile";

function App() {
  return (
    <>
      <Landing />
      <Login />
      <AdminLogin />
      <Admin_teacherSection />

      <Admin_StudentSection />
      <StudentProfile />
      <Addregulation></Addregulation>
    </>
  );
}

export default App;
