import React from 'react'
import StudentNavbar from '../modules/Students/StudentNavbar'
import { useLocation } from 'react-router-dom';
import StudentDetails from '../modules/Admin/StudentDetails';
import Options from '../modules/faculty/Options';
import UploadCards from '../modules/faculty/UploadCards';
import Student_profilelNavbar from '../modules/Admin/Student_profileNavbar';

const StudentLayout = () => {

     const location = useLocation();

  // Map routes to titles
  const routeTitle = {
    "/student": "Dashboard",
   
  };

  const stutitle = routeTitle[location.pathname] || "Dashboard";

  return (
    <>
      <section className="  ">
    <Student_profilelNavbar  title={stutitle}/>
        <div>
          {/* <Student_profilelNavbar /> */}
        </div>

       <div className="  h-[40rem] flex items-center justify-around ">
         <aside>
          <StudentDetails />
        </aside>
        <aside className="  flex flex-col items-center justify-around   h-full">
            <Options/>
          <UploadCards />
        </aside>
       </div>
      </section>
    </>
  );
}

export default StudentLayout
