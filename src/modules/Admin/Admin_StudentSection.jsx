import Admin_Footer from "./Admin_Footer"
import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"
import Searchforstudents from "./Searchforstudents"
import SearchForTeacher from "./SearchForTeacher"
import StudentTable2 from "./StudentTable2"


let Admin_StudentSection =()=>{
    return(<>
    <section className=" flex flex-col justify-around gap-[5rem] bg-gray-50 items-center">
        <div className="w-full p-[30px]">
        <Admin_Navbar/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] border-amber-200">
        <Quickaction/>
    </div>
     <div className="flex items-center   justify-center">
       <Searchforstudents/>
     </div>
     <div className="flex items-center   justify-center">
       <SearchForTeacher/>
     </div>
     
    </section>
    
    </>)
}
export default Admin_StudentSection