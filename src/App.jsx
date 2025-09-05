// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import SignUp from "./components/Students/StudentSignUP";
import StudentSignUP from "./components/Students/StudentSignUP";
import Latest from "./components/Students/Latest";
import Encapsulation from "./components/Students/Encapsulation";

function App() {
  return (
    <>
     
      {/* <Outlet /> 👈 Public pages (Landing, Login, Teacher Login, etc.) */}
      {/* <StudentSignUP></StudentSignUP> */}
       {/* Ritesh task on 5-sept */}
      {/* <Latest/> */}
      <Encapsulation></Encapsulation>
    </>
  );
}

export default App;
