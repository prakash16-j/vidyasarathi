

import { Outlet } from "react-router-dom";
import SignUp from "./components/Students/StudentSignUP";
import StudentSignUP from "./components/Students/StudentSignUP";
import Latest from "./components/Students/Latest";
import Encapsulation from "./components/Students/Encapsulation";
import LogOutpopup from "./components/Students/LogOutpopup";
import FacultyAddedpopup from "./components/Students/FacultyAddedpopup-3";
import FacultyRemovepopup from "./components/Students/FacultyAddedpopup-4";
import ExportedSuccesspopup from "./components/Students/ExportedSuccesspopup";
import RegulationAddedpopup from "./components/Students/RegulationAddedpopup";
import HelpAndSupport from "./components/Students/HelpAndSupportpopup";
import RequestPopup from "./components/Students/RequestPopup";
import MaterialTable from "./components/Teachers/FacultyEditmaterialTable";
import FindmaterialPop from "./components/Students/FindmaterialPop";
import FacultyEditmaterialTable from "./components/Teachers/FacultyEditmaterialTable";

function App() {
  return (
    <>
     
      {/* <Outlet/>  */}
      {/* <StudentSignUP></StudentSignUP> */}
       {/* Ritesh task on 5-sept */}
      {/* <Latest/> */}
      {/* <FindmaterialPop></FindmaterialPop>
      <Encapsulation></Encapsulation>
      <LogOutpopup></LogOutpopup>
      <FacultyAddedpopup></FacultyAddedpopup>
      <FacultyRemovepopup></FacultyRemovepopup>
      <ExportedSuccesspopup></ExportedSuccesspopup>
      <RegulationAddedpopup></RegulationAddedpopup>
      <HelpAndSupport></HelpAndSupport>
      <RequestPopup></RequestPopup> */}
      <FacultyEditmaterialTable></FacultyEditmaterialTable>
    </>
  );
}

export default App;
