import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import LogOutpopup from "../Students/LogOutpopup";


let Admin_Navbar = ({ title }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <header className="bg-white h-21 w-full flex justify-between items-center px-6 drop-shadow-2xl">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <Link to="/admin/view">
            <img className="h-[72px]" src={logo} alt="Logo" />
          </Link>
          <div className="text-[1rem] font-[300]">
            <h1 className="font-bold">Admin Panel</h1>
            <h1 className="text-gray-600">Vidya Sarthi</h1>
          </div>
        </div>

        {/* Title Box */}
        <div className="border-2 w-[200px] h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200">
          <h1>{title}</h1>
        </div>

        {/* Right Section */}
        <div className="flex gap-8 items-center">
          <h1 className="text-[22px]">Help & Support</h1>
          <button
            onClick={() => setShowLogout(true)}
            className="bg-amber-300 rounded-lg h-10 w-[150px] hover:bg-amber-400 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Popup */}
      <LogOutpopup isOpen={showLogout} onClose={() => setShowLogout(false)} />
    </>
  );
};

export default Admin_Navbar;
