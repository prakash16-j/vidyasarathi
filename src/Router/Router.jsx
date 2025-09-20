import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../modules/Admin/Landing";
import Admin_ViewPage from "../modules/Admin/Admin_ViewPage";
import Admin_teacherSection from "../modules/Admin/Admin_teacherSection";
import Admin_StudentSection from "../modules/Admin/Admin_StudentSection";
import StudentProfile_adminview from "../modules/Admin/StudentProfile_adminview";
import Login from "../modules/Admin/Login";
import StudentTable from "../modules/Admin/StudentTable";
import StudentTable2 from "../modules/Admin/StudentTable2";
import Add_faculty from "../modules/Admin/Add_faculty";
import AddstudentR from "../modules/Admin/AddstudentR";
import Addregulation from "../modules/Admin/Addregulation";
import TeacherLogin from "../modules/faculty/TeacherLogin";
import TeacherProfile from "../modules/faculty/TeacherProfile";
import UpdateFacultyProfile from "../modules/faculty/UpdateFacultyProfile";
import StudentSignUP from "../modules/Students/StudentSignUP";
import LogOutpopup from "../modules/Students/LogOutpopup";
import FacultyAddedpopup from "../modules/Students/FacultyAddedpopup-3";
import FacultyRemovepopup from "../modules/Students/FacultyAddedpopup-4";

// import all pages
//
// import Landing from "../modules/Admin/Landing";
// import Login from "../modules/Admin/Login";
// import Admin_ViewPage from "../modules/Admin/Admin_ViewPage";
// import Admin_teacherSection from "../modules/Admin/Admin_teacherSection";
// import Admin_StudentSection from "../modules/Admin/Admin_StudentSection";
// import StudentProfile from "../modules/faculty/TeacherProfile";
// import StudentTable from "../modules/Admin/StudentTable";
// import StudentTable2 from "../modules/Admin/StudentTable2";
// import Add_faculty from "../modules/Admin/Add_faculty";
// import Addstudents from "../modules/Admin/Addstudents";
// import Addregulation from "../modules/Admin/Addregulation";
// import StudentProfile_adminview from "../modules/Admin/StudentProfile_adminview";
// import TeacherLogin from "../modules/faculty/TeacherLogin";
// import TeacherProfile from "../modules/faculty/TeacherProfile";
// import UpdateFacultyProfile from "../modules/faculty/UpdateFacultyProfile";
// import LogOutpopup from "../modules/Students/LogOutpopup";
// import FacultyAddedpopup from "../modules/Students/FacultyAddedpopup-3";
// import FacultyRemovepopup from "../modules/Students/FacultyAddedpopup-4";
// import StudentSignUP from "../modules/Students/StudentSignUP";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout wrapper
    children: [
      { index: true, element: <Landing /> }, // "/" -> Landing
      { path: "login", element: <Login /> },
      { path: "admin/view", element: <Admin_ViewPage /> },
      { path: "admin-teachers", element: <Admin_teacherSection /> },
      { path: "admin-students", element: <Admin_StudentSection /> },
      { path: "student-profile", element: <StudentProfile_adminview /> },
      { path: "student-table", element: <StudentTable /> },
      { path: "teacher-table", element: <StudentTable2 /> },
      { path: "add-faculty", element: <Add_faculty /> },
      { path: "add-students", element: <AddstudentR /> },
      { path: "add-regulation", element: <Addregulation /> },
      { path: "studentProfile", element: <StudentProfile_adminview /> },
      { path: "teacher-login", element: <TeacherLogin /> },
      { path: "teacher-profile", element: <TeacherProfile /> },
      { path: "updatefacultyprofile", element: <UpdateFacultyProfile/> },
      { path: "studentSignup", element: <StudentSignUP/> },
      // from here chennarao did
      {path:"/admin/view/logoutpopup",element:<LogOutpopup></LogOutpopup>},
      {path:"/admin/view/facultyaddedpopup",element:<FacultyAddedpopup></FacultyAddedpopup>},
      {path:"/admin/view/facultyremovepopup",element:<FacultyRemovepopup></FacultyRemovepopup>},
      // {}
    ],
  },
]);

export default routes;
