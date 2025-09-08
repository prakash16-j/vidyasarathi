import React from "react";

const LogOutpopup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white shadow-md drop-shadow-2xl rounded-xl p-8 w-[300px] text-center h-[20rem]">
        <div  
        style={{marginTop:"110px", padding:""}}>
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900">
          Logout From Your Account
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-2" style={{padding:"10px", paddingBottom:"18px"}}>Do you want to logout</p>

        {/* Logout Button */}
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all w-[7rem]">
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutpopup;
