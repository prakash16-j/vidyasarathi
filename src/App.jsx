import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import Landing from "./components/Landing"
import StudentTable from "./components/StudentTable"

function App() {

  return (
    <>
     <Landing/>
     <AdminLogin/>
     <Admin_teacherSection/>
     <StudentTable></StudentTable>
    </>
  )
}

export default App
