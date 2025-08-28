// import Admin_teacherSection from "./components/Admin_teacherSection"
import Admin_StudentSection from "./components/Admin_StudentSection";
import Admin_teacherSection from "./components/Admin_teacherSection";
import AdminLogin from "./components/AdminLogin";

import Contact from "./components/contact";
import Landing from "./components/Landing";
import Card3 from "./components/Card3";
import Login from "./components/Login";
import Quickaction from "./components/Quick actions";

import Student_profilelNavbar from "./components/Student_profileNavbar";

import StudentDetails from "./components/StudentDetails";

import SpecificSearch from "./components/specificsearch_and_contact";

import StudentTable from "./components/StudentTable";
import UploadCards from "./components/Card3";
import StudentProfile from "./components/StudentProfile";

function App() {
  return (
    <>
      <Landing />
      <Login />
      <AdminLogin />
      <Admin_teacherSection />

      <Admin_StudentSection />
      <StudentProfile/>
    </>
  );
}

export default App;
