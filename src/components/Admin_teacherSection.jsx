import Admin_Footer from "./Admin_Footer";
import Admin_Navbar from "./Admin_Navbar";
import Quickaction from "./Quick actions";
import SearchForTeacher from "./SearchForTeacher";
import StudentTable from "./StudentTable";
// Importing icons from popular icon libraries via react-icons
import { FaDollarSign, FaFolder, FaUserFriends, FaFileUpload } from 'react-icons/fa';



const Admin_teacherSection = () => {
  return (
    <section className=" flex flex-col justify-around h-[200vh] bg-gray-50 items-center  ">
    <div className="w-full p-[30px]">
        <Admin_Navbar/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] border-amber-200">
        <Quickaction />
    </div>
     <div className="flex items-center   justify-center">
       <SearchForTeacher/>
     </div>

      <div className="flex justify-between w-[70%] ml-[20px] border-amber-950 border-2 ">
        <StudentTable />
        <StudentTable />
      </div>
      <div className="w-[80%] rounded-2xl bg-white drop-shadow-2xl h-20 flex items-center">
        <Admin_Footer/>
      </div>
    </section>
  );
};


export default Admin_teacherSection;
