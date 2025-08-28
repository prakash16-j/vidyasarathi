import UploadCards from "./Card3";
import Options from "./Options";
import Student_profilelNavbar from "./Student_profileNavbar";
import StudentDetails from "./StudentDetails";

let StudentProfile = () => {
  return (
    <>
      <section className="h-[100vh]">
        <div>
          <Student_profilelNavbar />
        </div>

       <div className="  h-full flex items-center justify-around ">
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
export default StudentProfile;
