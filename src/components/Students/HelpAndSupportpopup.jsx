import React from "react";

const HelpAndSupport = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white shadow-md drop-shadow-2xl rounded-xl p-8 w-[300px] text-center h-[18rem]">
        <div  
        style={{marginTop:"40px"}}>
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900"style={{marginBottom:"19px"}}>
          Contact Below Number:
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-bold text-gray-900 "style={{marginRight:"85px"}}>99XXXXXXXX</p>
        <p className="text-lg font-bold text-gray-900 " style={{padding:"1px", paddingBottom:"1px", marginRight:"85px"}}>99XXXXXXXX</p>
        <p className="text-lg font-bold text-gray-900 " style={{marginRight:"85px"}}>99XXXXXXXX</p>

        {/* Logout Button */}
        <button className=" bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all w-[6rem]" style={{marginTop:"54px", marginLeft:"40px"}}>
          OK
        </button>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;