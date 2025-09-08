import UploadCards from "./UploadCards";
import Options from "./Options";
import Student_profilelNavbar from "../Admin/Student_profileNavbar";
import StudentDetails from "../Admin/StudentDetails";
import FacultyNavbar from "./FacultyNavbar";

let TeacherProfile = () => {
  return (
    <>
    <FacultyNavbar title="profile"></FacultyNavbar>
      <section className="  ">
        <div>
          {/* <Student_profilelNavbar /> */}
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
