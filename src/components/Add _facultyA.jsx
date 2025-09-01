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
    <div className="flex flex-col items-center justify-self-center-safe h-[100vh] border-4 border-dashed gap-1.5 shadow-lg w-full  bg-gray-100 m-1.5">
    <br />  
    <div className=" w-full h-full ">
        
        <div className="flex items-center justify-center w-full h-full  border-2 b border-solid gap-20">

           <div className=" w-100 shadow-lg bg-white  drop-shadow-2xl rounded-[12px] flex border-solid flex-col  items-center h-[30rem]">
           <br /> <div className="flex justify-start  w-70  h-7 ">
              <h1 className="font-medium text-4xs pt-50 ">Add Faculty:</h1>
              </div>

              <div className="flex flex-col gap-6">
           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[45px] w-[300px]  rounded-[12px] placeholder-black bg-blue-100 shadow-lg  drop-shadow-2xl  "
             placeholder="   Enter Faculty Name"
           />
            <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[45px] w-[300px]  rounded-[12px] text-left placeholder-black bg-blue-100 px-3 shadow-lg  drop-shadow-2xl "
             placeholder="   Enter Faculty Id"
           />
           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[45px] w-[300px]  rounded-[12px] text-left placeholder-black bg-blue-100 px-3 shadow-lg  drop-shadow-2xl"
             placeholder="   Enter Faculty Email"
           />
           <input
             type="text"
             value={removeId}
             onChange={(e) => setRemoveId(e.target.value)}
             className="h-[45px] w-[300px]  rounded-[12px] text-left placeholder-black bg-blue-100 px-3 shadow-lg  drop-shadow-2xl"
             placeholder="   Enter Password"
           />
           <div className=" flex w-75 justify-center">
           <button className="bg-yellow-500   rounded-lg flex items-center justify-center text-white w-[200px] h-[40px]">
             Add
           </button>
           </div>
        </div>
        </div>

        {/* Remove Faculty */}
          <div className=" w-[380px] shadow-lg bg-white border  round-[12px] drop-shadow-2xl rounded-[12px] flex flex-col gap-4 items-center h-[30rem]">
             <br /> <div className="flex justify-start  w-70  h-7 ">
              <h1 className="font-medium text-4xs pt-50 ">Remove Faculty:</h1>
              </div>

           <div className="flex flex-col gap-6">
           <input
             type="text"
             className="h-[45px] w-[300px]  rounded-[12px] text-left placeholder-black bg-blue-100 px-3 shadow-lg  border drop-shadow-2xl "
             placeholder="   Enter Roll Number"
           />
           <input
             type="text"
             className="h-[45px] w-[300px]  rounded-[12px] text-left bg-blue-100 px-3 shadow-lg border drop-shadow-2xl"
             placeholder="   Name (Auto)"
           />
       <div className="flex items-center justify-center  w-full">
           <button className="bg-yellow-500 text-white px-7 py-2 rounded-lg w-[200px] h-[40px]">
             Remove
           </button>
       </div>
           </div>
          </div>
        </div>
        {/* Add Faculty */}
 

      </div>
      <br />
      {/* View Faculty List */}
      <div className="pt-20 h-30">
     <div className=" w-[180px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[80px]">

      <button
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 w-33 text-white px-8 py-3 rounded-md font-semibold shadow"
      >
        View <br /> Faculty List
      </button>
     </div>
     </div>
    </div>
  );
}
export default Add_facultyA