import { LuCircleDollarSign } from "react-icons/lu";
import { BsCardHeading } from "react-icons/bs";
import { TbUserScan } from "react-icons/tb";
import { LiaFileUploadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

let Quickaction = () => {
  let obj = [
    {
      icon: <LuCircleDollarSign />,
      img: "./image.png",
      text: (
        <>
          Add Faculty/ <br />
          Remove Faculty
        </>
      ),
      link: "/add-faculty", 
    },
    {
      icon: <BsCardHeading />,
      text: (
        <>
          Add Student/ <br />
          Remove Student
        </>
      ),
      link: "/add-students",
    },
    {
      icon: <TbUserScan />,
      text: (
        <>
          View Faculty <br /> & Student
        </>
      ),
      link: "/admin/view",
    },
    {
      icon: <LiaFileUploadSolid />,
      text: "Add Regulations",
      link: "/add-regulation",
    },
  ];

  return (
    <>
      <div className="">
        <div className="w-300 bg-white rounded-xl drop-shadow-2xl h-64">
          <h1 className="h-10 w-50 text-center font-bold">Quick Actions:</h1>
          <br />
          <div className="flex w-300 justify-evenly h-40">
            {obj.map((e, i) => {
              let { icon, text, img, link } = e;
              return (
                // <Link to={link} key={i}>
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
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quickaction;
