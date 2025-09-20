import Quickaction from "../../../../vidyasarathi/src/components/Admin/Quick actions";
import Admin_Footer from "./Admin_Footer";
import Admin_Navbar from "./Admin_Navbar";
// import Quickaction from "./Quick actions";
import Searchforstudents from "./Searchforstudents";
import SearchForTeacher from "./SearchForTeacher";

import StudentTable from "./StudentTable";
import StudentTable2 from "./StudentTable2"; // 👈 create a separate teacher table if not done

const Admin_ViewPage = () => {
  return (
    <section className=" flex flex-col justify-around gap-10 bg-gray-50 items-center  ">
    <div className="w-full mt-10">
        <Admin_Navbar title="Global Admin"/>
    </div>
    <div className="  h-50 w-240  ">
        <Quickaction />
    </div>
     {/* <div className="flex items-center   justify-center">
       <SearchForTeacher/>
     </div> */}

      {/* <div className="flex w-300  justify-center items-center h-70 ">
        <StudentTable />
        
      </div>
       <div className="flex items-center   justify-center">
       <Searchforstudents/>
     </div> */}
      {/* <div className="flex justify-between w-[50%] items-center h-[400px] rounded-xl">
       <StudentTable2/>
      </div>
      <div className="w-300 rounded-2xl bg-white drop-shadow-2xl h-20 flex items-center">
        <Admin_Footer/>
      </div> */}
    </section>
  );
};

export default Admin_ViewPage;
