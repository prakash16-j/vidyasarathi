import StudentDetails from "../Admin/StudentDetails"
import StudentBlueboxs from "./StudentBlueboxs"
import Studentcards from "./Studentcards"
import StudentNavbar from "./StudentNavbar"
import StudentProfile from "./StudentProfile"

let Studentsection=()=>{

    // return<>
// <section className="">
//     <StudentNavbar></StudentNavbar>
//     <StudentProfile></StudentProfile>
//     {/* <StudentDetails></StudentDetails> */}
// </section>
// <Studentcards></Studentcards>
// <StudentBlueboxs></StudentBlueboxs>

//        </>
return <>
  <StudentNavbar></StudentNavbar>
      <section className="  ">
        <div>
          {/* <Student_profilelNavbar /> */}
        </div>

       <div className="  h-[40rem] flex items-center justify-around ">
         <aside>
           <StudentProfile></StudentProfile>
        </aside>
        <aside className="  flex flex-col items-center justify-around   h-full">
           <Studentcards></Studentcards>
        <StudentBlueboxs></StudentBlueboxs>

        </aside>
       </div>
      </section>
      </>
}
export default Studentsection