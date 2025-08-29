import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"

let Addstudents=()=>{

    return <>
    <section className=" mt-[150px]  h-150">
      <div className="h-[7rem] ">
    <Admin_Navbar></Admin_Navbar>
    </div> 
    <div className="h-[20rem] flex  justify-center ">
    <Quickaction></Quickaction>
    </div>
</section>
    </>

}
export default Addstudents