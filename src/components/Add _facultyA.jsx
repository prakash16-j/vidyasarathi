import React, { useState } from "react";

 function Add_facultyA() {
  const [faculty, setFaculty] = useState({
    name: "",
    id: "",
    email: "",
    password: "",
  });

  const [removeId, setRemoveId] = useState("");

  const handleAddFaculty = () => {
    console.log("Faculty Added:", faculty);
    // Add logic to save faculty
    setFaculty({ name: "", id: "", email: "", password: "" });
  };

  const handleRemoveFaculty = () => {
    console.log("Faculty Removed ID:", removeId);
    // Add logic to remove faculty
    setRemoveId("");
  };

  return (
    <div className="flex flex-col items-center justify-self-center-safe min-h-screen-[200px] shadow-lg w-[600px]  bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md">
        
        {/* Add Faculty */}
        <div className=" w-[250px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[260px]">
            <h1 className="font-medium text-2xs">Add Faculty:</h1>

           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[35px] w-[200px]  rounded-[12px] text-center placeholder-black bg-blue-100 px-3 "
             placeholder="Enter Roll Number"
           />
                      <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[35px] w-[200px]  rounded-[12px] text-center placeholder-black bg-blue-100 px-3 "
             placeholder="Enter Faculty Id"
           />
           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[35px] w-[200px]  rounded-[12px] text-center placeholder-black bg-blue-100 px-3 "
             placeholder="Enter Faculty Email"
           />
           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[35px] w-[200px]  rounded-[12px] text-center placeholder-black bg-blue-100 px-3 "
             placeholder="Enter Password"
           />

           <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[60px]">
             Add
           </button>
        </div>


        {/* Remove Faculty */}
          <div className=" w-[250px] shadow-lg bg-white border  round-[12px] drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[260px]">
            <h1 className="font-medium text-2xs">Remove Faculty:</h1>

           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[35px] w-[200px]  rounded-[12px] text-center placeholder-black bg-blue-100 px-3 "
             placeholder="Enter Roll Number"
           />
           
           <input
             type="text"
             className="h-[35px] w-[200px]  rounded-[12px] text-center bg-blue-100 px-3"
             placeholder="Name (Auto)"
           />
       
           <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[60px]">
             Remove
           </button>
          </div>

      </div>
      <br />
      {/* View Faculty List */}
     <div className=" w-[180px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[80px]">

      <button
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold shadow"
      >
        View Faculty List
      </button>
     </div>
    </div>
  );
}
export default Add_facultyA