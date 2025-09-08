import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import all pages
import Landing from "../components/Admin/Landing";
import Login from "../components/Admin/Login";
import Admin_ViewPage from "../components/Admin/Admin_ViewPage";
import Admin_teacherSection from "../components/Admin/Admin_teacherSection";
import Admin_StudentSection from "../components/Admin/Admin_StudentSection";
import StudentProfile from "../components/Teachers/TeacherProfile";
import StudentTable from "../components/Admin/StudentTable";
import StudentTable2 from "../components/Admin/StudentTable2";
import Add_faculty from "../components/Admin/Add_faculty";
import Addstudents from "../components/Admin/Addstudents";
import Addregulation from "../components/Admin/Addregulation";
import StudentProfile_adminview from "../components/Admin/StudentProfile_adminview";
import TeacherLogin from "../components/Teachers/TeacherLogin";
import TeacherProfile from "../components/Teachers/TeacherProfile";
import UpdateFacultyProfile from "../components/Teachers/UpdateFacultyProfile";

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
      { path: "student-profile", element: <StudentProfile /> },
      { path: "student-table", element: <StudentTable /> },
      { path: "teacher-table", element: <StudentTable2 /> },
      { path: "add-faculty", element: <Add_faculty /> },
      { path: "add-students", element: <Addstudents /> },
      { path: "add-regulation", element: <Addregulation /> },
      { path: "studentProfile", element: <StudentProfile_adminview /> },
      { path: "teacher-login", element: <TeacherLogin /> },
      { path: "teacher-profile", element: <TeacherProfile /> },
      { path: "updatefacultyprofile", element: <UpdateFacultyProfile/> },
    ],
  },
]);

export default routes;
