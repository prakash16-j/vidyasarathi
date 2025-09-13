import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add_facultyA() {
  let navgite=useNavigate()
  const [faculty, setFaculty] = useState({
    name: "",
    id: "",
    email: "",
    password: "",
  });

  const [removeId, setRemoveId] = useState("");

  // Handle faculty input change
  const handleFacultyChange = (e) => {
    const { name, value } = e.target;
    setFaculty((prev) => ({ ...prev, [name]: value }));
  };

  // Add faculty submit
  const handleAddFaculty = (e) => {
    e.preventDefault();
    console.log("Faculty Added:", faculty);
    // TODO: Add API or DB logic
    setFaculty({ name: "", id: "", email: "", password: "" });
  };
  let handlesubmit=(e)=>{
  e.preventDefault();
  console.log(faculty);
  navgite("/admin/view/facultyaddedpopup") 
}

  // Remove faculty submit
  const handleRemoveFaculty = (e) => {
    e.preventDefault();
    console.log("Faculty Removed ID:", removeId);
    // TODO: Add API or DB logic
    setRemoveId("");
  };
  let handleremove=(e)=>{
  e.preventDefault();
  console.log(removeId);
  navgite("/admin/view/facultyremovepopup") 
}

  return (
    <div className="flex flex-col items-center justify-self-center-safe h-[110vh] gap-1.5 shadow-lg w-full bg-gray-100 m-1.5">
      <br />
      <div className="w-full h-full">
        <div className="flex items-center justify-center w-full h-full gap-20">
          {/* Add Faculty */}
          <form
            onSubmit={handleAddFaculty}
            className="w-100 shadow-lg bg-white drop-shadow-2xl rounded-[12px] flex flex-col h-[30rem] p-6"
          >
            <h1 className="font-medium text-4xs mb-6 ">Add Faculty:</h1>
            <hr />

            <div className="flex flex-col gap-6 pl-10 items-center h-100 justify-around ">
              <input
                type="text"
                name="name"
                value={faculty.name}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-[12px] placeholder-black bg-blue-100 shadow-lg drop-shadow-2xl px-3"
                placeholder="Enter Faculty Name"
                required
              />
              <input
                type="text"
                name="id"
                value={faculty.id}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-[12px] placeholder-black bg-blue-100 shadow-lg drop-shadow-2xl px-3"
                placeholder="Enter Faculty ID"
                required
              />
              <input
                type="email"
                name="email"
                value={faculty.email}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-[12px] placeholder-black bg-blue-100 shadow-lg drop-shadow-2xl px-3"
                placeholder="Enter Faculty Email"
                required
              />
              <input
                type="password"
                name="password"
                value={faculty.password}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-[12px] placeholder-black bg-blue-100 shadow-lg drop-shadow-2xl px-3"
                placeholder="Enter Password"
                required
              />
              <div className="flex w-75 justify-center">
                <button onClick={handlesubmit} className="bg-yellow-500 rounded-lg flex items-center justify-center text-white w-[200px] h-[40px]">
                  Add
                </button>
              </div>
            </div>
          </form>

          {/* Remove Faculty */}
          <form
            onSubmit={handleRemoveFaculty}
            className="w-[380px] shadow-lg bg-white drop-shadow-2xl rounded-[12px] flex flex-col gap-4  h-[20rem] p-6"
          >
            <h1 className="font-medium text-4xs mb-6">Remove Faculty:</h1>
            <hr />

            <div className="flex flex-col items-center gap-6">
              <input
                type="text"
                value={removeId}
                onChange={(e) => setRemoveId(e.target.value)}
                className="h-[45px] w-[300px] rounded-[12px] placeholder-black bg-blue-100 shadow-lg border drop-shadow-2xl px-3"
                placeholder="Enter Faculty ID"
                required
              />
              <div className="flex items-center justify-center w-full">
                <button
                  onClick={handleremove}
                  className="bg-yellow-500 text-white px-7 py-2 rounded-lg w-[200px] h-[40px]">
                  Remove
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* View Faculty List */}
      <br />
      <div className="p-20 h-30">
        <div className="w-[240px] shadow-lg bg-white drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[100px]">
       <Link to="">  <button  className="mt-6 bg-yellow-500 hover:bg-yellow-600 w-33 text-white px-8 py-3 rounded-md font-semibold shadow">
            View <br /> Faculty List
          </button></Link> 
        </div>
      </div>
    </div>
  );
}

export default Add_facultyA;
