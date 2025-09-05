// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import SignUp from "./components/Students/StudentSignUP";
import StudentSignUP from "./components/Students/StudentSignUP";

function App() {
  return (
    <>
     
      {/* <Outlet /> 👈 Public pages (Landing, Login, Teacher Login, etc.) */}
      <StudentSignUP></StudentSignUP>
    </>
  );
}

export default App;
