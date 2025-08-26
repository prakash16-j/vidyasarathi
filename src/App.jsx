// import Admin_teacherSection from "./components/Admin_teacherSection"
import AdminLogin from "./components/AdminLogin"
import Landing from "./components/Landing"
import Quickaction from "./components/Quick actions"
import Search from "./components/searchforstudents"

import StudentTable from "./components/StudentTable"

function App() {

  return (
    <>
     <Landing/>
     <AdminLogin/>
     {/* <Admin_teacherSection/> */}
     <StudentTable></StudentTable>
     <Quickaction></Quickaction>
     <Search></Search>
    </>
  )
}

export default App
