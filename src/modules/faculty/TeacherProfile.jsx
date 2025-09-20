import UploadCards from "./UploadCards";
import Options from "./Options";
import StudentDetails from "../Admin/StudentDetails";
import FacultyNavbar from "./FacultyNavbar";

let TeacherProfile = () => {
  return (
    <>
      <FacultyNavbar title="profile" />

      <section className="w-full px-4 sm:px-8 py-6">
        {/* Optional navbar placeholder */}
        {/* <Student_profilelNavbar /> */}

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around gap-6 lg:gap-12">
          {/* Left: Student Details */}
          <aside className="w-full lg:w-1/3">
            <StudentDetails />
          </aside>

          {/* Right: Options + UploadCards */}
          <aside className="w-full lg:w-2/3 flex flex-col items-center gap-6">
            <Options />
            <UploadCards />
          </aside>
        </div>
      </section>
    </>
  );
};

export default TeacherProfile;
