// import Admin_teacherSection from "./components/Admin_teacherSection"
import Admin_StudentSection from "./components/Admin_StudentSection"
import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import UploadCards from "./components/Card2"
import Contact from "./components/contact"
import Landing from "./components/Landing"
import Card3 from "./components/Card3"
import Login from "./components/Login"
import Quickaction from "./components/Quick actions"
import StudentDetails from "./components/StudentDetails"
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
    <StudentDetails/>
     <Admin_StudentSection/>

     <Card3></Card3>
     <UploadCards></UploadCards>
  
  <SpecificSearch/>
  <Contact></Contact>
    </>
  )
}

export default App