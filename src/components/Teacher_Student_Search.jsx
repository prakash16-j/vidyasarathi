import Admin_StudentSection from "./Admin_StudentSection"
import Admin_teacherSection from "./Admin_teacherSection"

let Teacher_Student_Search =()=> {
  return (
  <section className=" flex flex-col justify-around gap-10 bg-gray-50 items-center  ">
    <div className="w-full mt-10">
        <Admin_Navbar/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] border-amber-200">
        <Quickaction />
    </div>
     <div className="flex items-center   justify-center">
       <SearchForTeacher/>
     </div>

      <div className="flex w-300  justify-between items-center h-70 ">
        <StudentTable />
        <StudentTable />
      </div>
      <div className="w-300 rounded-2xl bg-white drop-shadow-2xl h-20 flex items-center">
        <Admin_Footer/>
      </div>
    </section>
  )
}
export default Teacher_Student_Search