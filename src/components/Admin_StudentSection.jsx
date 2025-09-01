import Admin_Footer from "./Admin_Footer"
import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"
import Searchforstudents from "./Searchforstudents"
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
      <div className="flex justify-between w-300 items-center h-[400px] rounded-xl">
       <StudentTable2/>
      </div>
     <div className="w-300  rounded-2xl bg-white drop-shadow-2xl h-20 flex items-center">
        <Admin_Footer/>
      </div>
    </section>
    
    </>)
}
export default Admin_StudentSection