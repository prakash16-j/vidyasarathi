import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import Landing from "./components/Landing"
import Quickaction from "./components/Quick actions"

import StudentTable from "./components/StudentTable"

function App() {

  return (
    <>
     <Landing/>
     <AdminLogin/>
     <Admin_teacherSection/>
     <StudentTable></StudentTable>
     <Quickaction></Quickaction>
    </>
  )
}

export default App
