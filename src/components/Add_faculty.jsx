import Add_facultyA from "./Add _facultyA"
import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"

let Add_faculty=()=>{

    return <>

     <section className=" mt-[150px]  h-250">
      <div className="h-[7rem] ">
    <Admin_Navbar></Admin_Navbar>
    </div> 
    <div className="h-[23rem] flex  justify-center ">
    <Quickaction></Quickaction>
    </div>
    <div className="h-[10rem] flex  justify-center ">
    <Add_facultyA></Add_facultyA>
    </div>
    </section>
    </>
}
export default Add_faculty