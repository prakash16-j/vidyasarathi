import React from "react";

const FacultyAddedpopup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white shadow-md drop-shadow-2xl rounded-xl p-8 w-[300px] text-center h-[18rem]">
        <div  
        style={{marginTop:"110px", padding:""}}>
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900"
        style={{paddingBottom:"20px"}}>
          Faculty Added Successfully
        </h2>

        {/* Logout Button */}
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all w-[7rem]">
          OK
        </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyAddedpopup ;