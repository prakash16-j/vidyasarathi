// import Admin_teacherSection from "./components/Admin_teacherSection"
import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import Contact from "./components/contact"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Quickaction from "./components/Quick actions"
import SpecificSearch from "./components/specificsearch_and_contact"


import StudentTable from "./components/StudentTable"

function App() {
  return (
    <>
     <Landing/>
     <Login/>
     <AdminLogin/>
     <Admin_teacherSection/>
     <Admin_StudentSection/>
  <SpecificSearch/>
  <Contact></Contact>
    </>
  )
}

export default App
