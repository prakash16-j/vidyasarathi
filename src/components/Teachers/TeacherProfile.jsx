import UploadCards from "./Card3";
import Options from "./Options";
import Student_profilelNavbar from "../Admin/Student_profileNavbar";
import StudentDetails from "../Admin/StudentDetails";

let TeacherProfile = () => {
  return (
    <>
      <section className="  ">
        <div>
          <Student_profilelNavbar />
        </div>

       <div className="  h-[40rem] flex items-center justify-around ">
         <aside>
          <StudentDetails />
        </aside>
        <aside className="  flex flex-col items-center justify-around   h-full">
            <Options/>
          <UploadCards />
        </aside>
       </div>
      </section>
    </>
  );
};
export default TeacherProfile;
