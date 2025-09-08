import { SlCalender } from "react-icons/sl";
import { CiBookmarkCheck } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";
import { FaClipboardUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

let Latest = () => {
  const obj = [
    {
      icon: <SlCalender />,
      text: (
        <>
          Add Faculty/ <br />
          Remove Faculty
        </>
      ),
      link: "/faculty",
    },
    {
      icon: <CiBookmarkCheck />,
      text: (
        <>
          Add Student/ <br />
          Remove Student
        </>
      ),
      link: "/student",
    },
    {
      icon: <LuNotebookPen />,
      text: (
        <>
          View Faculty <br /> & Student
        </>
      ),
      link: "/view",
    },
    {
      icon: <FaClipboardUser />,
      text: "Add Regulations",
      link: "/regulations",
    },
  ];

  return (
    <section className="border-2 border-solid flex justify-center">
    <div className="">
        <div className="w-300 bg-white rounded-xl drop-shadow-2xl h-64">
          <h1 className="h-10 w-50 text-center font-bold">Latest:</h1>
          <br />
          <div className="flex w-300 justify-evenly h-40">
            {obj.map((e, i) => {
              let { icon, text, img, link } = e;
              return (
                <Link to={link} key={i}>
                  <div className="bg-[#D8E7F5] w-50 rounded-[10px] cursor-pointer hover:scale-105 transition">
                    {/* <img className="h-10 w-10" src={img} alt="" /> */}
                    <div className="flex items-center justify-center h-18">
                      <div className="bg-[#F3B300] rounded-[10px] flex items-center justify-center w-11 h-11">
                        <h1 className="text-[white] text-[25px]">{icon}</h1>
                      </div>
                    </div>
                    <h1 className=" h-[5rem]  flex items-center justify-center 
    text-[15px] text-2xl font-bold 
    bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)] 
    bg-clip-text text-transparent">
  {text}
</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      </section>
  );
};

export default Latest;
