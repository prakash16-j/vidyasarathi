import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "../modules/Admin/Landing";
import App from "../App";
import Login from "../auth/Login";
import TeacherLogin from "../modules/faculty/TeacherLogin";
import StudentSignUP from "../auth/Signup";
import SignUP from "../auth/Signup";
import ProtectedRoute from "../auth/ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import Add_faculty from "../modules/Admin/Add_faculty";
import Addstudents from "../modules/Admin/Addstudents";
import Addregulation from "../modules/Admin/Addregulation";
import Admin_StudentSection from "../modules/Admin/Admin_StudentSection";
import StudentTable from "../modules/Admin/StudentTable";
import StudentLayout from "../layouts/StudentLayout";
import StudentLogin from "../modules/Students/StudentLogin";
import FacultyLayout from "../layouts/FacultyLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/landing" /> },
      { path: "landing", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/studentSignup", element: <SignUP/> },
         
      { path: "/teacher-login", element: <TeacherLogin/> },
      { path: "/StudentLogin", element: <StudentLogin/> },
    ],
  },

  {
  path: "/admin",
  element: (
    <ProtectedRoute role="admin">
      <AdminLayout />
    </ProtectedRoute>
  ),
  children:[
    {
    path:"add-faculty",
    element:<Add_faculty/>,
  },
    {
    path:"add-students",
    element:<Addstudents/>,
  },
    {
    path:"admin-students",
    element:<Admin_StudentSection/>,
  },
    {
    path:"add-regulation",
    element:<Addregulation/>,
  },
    {
    path:"student-table",
    element:<StudentTable/>,
  },
]
  
},
{
  path:"/faculty",
  element: (
    <ProtectedRoute role="teacher">
      <FacultyLayout />
    </ProtectedRoute>
  ),
  children:[{},{}]
}

]);
export default routes;