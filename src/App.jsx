// import Admin_teacherSection from "./components/Admin_teacherSection"
import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Quickaction from "./components/Quick actions"


import StudentTable from "./components/StudentTable"
import Teacherinformation from "./components/Teacherinformation"

function App() {

  return (
    <>
     <Landing/>
     <Login/>
     <AdminLogin/>
     <Admin_teacherSection/>
     <Admin_StudentSection/>
     <Teacherinformation></Teacherinformation>
  
    </>
  )
}

export default App
