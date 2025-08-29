import AddstudentR from "./AddstudentR"
import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"

let Addstudents=()=>{

    return <>
    <section className=" mt-[150px]  h-250">
      <div className="h-[7rem] ">
    <Admin_Navbar></Admin_Navbar>
    </div> 
    <div className="h-[23rem] flex  justify-center ">
    <Quickaction></Quickaction>
    </div>
    <div className="h-[10rem] flex  justify-center ">
    <AddstudentR></AddstudentR>
    </div>
</section>
    </>

}
export default Addstudents