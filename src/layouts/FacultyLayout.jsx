



import StudentDetails from "../modules/Admin/StudentDetails";
import Options from "../modules/faculty/Options";
import UploadCards from "../modules/faculty/UploadCards";


let FacultyLayout = () => {
  return (
    <>
    <FacultyNavbar title="profile"></FacultyNavbar>
      <section className="  ">
        <div>
        
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
export default FacultyLayout;
