
import Admin_Navbar from "./Admin_Navbar";
import Quickaction from "./Quick actions";


const Admin_ViewPage = () => {
  return (
    <section className=" flex flex-col justify-around gap-10 bg-gray-50 items-center  ">
    <div className="w-full mt-10">
        <Admin_Navbar title="Global Admin"/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] border-amber-200">
        <Quickaction />
    </div>
    
    </section>
  );
};

export default Admin_ViewPage;
