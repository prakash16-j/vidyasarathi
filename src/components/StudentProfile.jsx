import UploadCards from "./Card3";
import Options from "./Options";
import Student_profilelNavbar from "./Student_profileNavbar";
import StudentDetails from "./StudentDetails";

let StudentProfile = () => {
  return (
    <>
<<<<<<< HEAD
      <section className="">
=======
      <section className="  ">
>>>>>>> 367f096a62b33884d7aa49db943cf1848c67e8e8
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
export default StudentProfile;
