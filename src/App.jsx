

import { Outlet} from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import StudentProfile_adminview from "./modules/Admin/StudentProfile_adminview";
import StudentLayout from "./layouts/StudentLayout";
import StudentDetails from "./modules/Admin/StudentDetails";



function App() {
  return (
    <>
     
      <Outlet/>  
     
    
  

    </>
  );
}

export default App;
