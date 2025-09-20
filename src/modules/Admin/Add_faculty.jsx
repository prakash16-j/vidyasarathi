import Add_facultyA from "./Add _facultyA"
import Admin_Navbar from "../Admin/Admin_Navbar"
// import Quickaction from "./Quick actions"
import { useState } from "react"
import FacultyAddedpopup from "../Students/FacultyAddedpopup-3"
import Quickaction from "../../../../vidyasarathi/src/components/Admin/Quick actions"

let Add_faculty=()=>{
let[setAddfaculty,addfaculty]=useState()
    return <>

     {/* <section className=" mt-[150px]  h-250"> */}
      <div className="h-[7rem] ">
    <Admin_Navbar ></Admin_Navbar>
    </div> 
    <div className="h-[23rem] flex  justify-center border-2 border-solid w-full ">
    <Quickaction></Quickaction>
    </div>
    <div className="h-[10rem] flex  justify-center ">
    <Add_facultyA></Add_facultyA>
    {/* <FacultyAddedpopup isOpen={addfaculty} onClose={() =>setAddfaculty(false)} /> */}
    </div>
    {/* </section> */}
    </>
}
export default Add_faculty