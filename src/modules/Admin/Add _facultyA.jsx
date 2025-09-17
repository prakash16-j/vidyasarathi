import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacultyAddedpopup from "../Students/FacultyAddedpopup-3";
import FacultyRemovepopup from "../Students/FacultyAddedpopup-4";

function Add_facultyA() {
  const [addfaculty, setAddfaculty] = useState(false);
  const [remove,setRemove]=useState(false)
  const [faculty, setFaculty] = useState({
    name: "",
    facultyId: "",
    email:"",
    password: "",
  });

  const [removeId, setRemoveId] = useState("");
  const navigate = useNavigate();

  // Handle faculty input change
  const handleFacultyChange = (e) => {
    const { name, value } = e.target;
    setFaculty((prev) => ({ ...prev, [name]: value }));
  };

  // Add faculty submit
  const handleAddFaculty = async (e) => {
    e.preventDefault();
    let response=await fetch("http://localhost:8080/VidyaSarthi/addFaculty",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(faculty),
    });
    // let response = await result.json();
    console.log(response);
    console.log("Faculty Added:", faculty);
    // TODO: Add API / DB logic here
    // Reset form
    setFaculty({ name: "", id: "", email: "", password: "" });
    // Show popup
    // setAddfaculty(true);
   
  };
  // Remove faculty submit
  const handleRemoveFaculty =async (e) => {
     e.preventDefault();
    let resp=await fetch("http://localhost:8080/VidyaSarthi/deleteFaculty/F2010CSE001",{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(removeId),
    })
    console.log("Faculty Removed ID:", removeId);
    console.log(resp);
    // TODO: Add API / DB logic here
    // Reset input
    setRemoveId("");
     setRemove(true)
    // Navigate to remove success page (optional)
    // navigate("/admin/view/facultyremovepopup");
  };

  return (
    <>
      <div className="flex flex-col items-center h-[110vh] gap-4 w-full bg-gray-100 p-4">
        <div className="flex items-center justify-center w-full h-full gap-20">
          {/* Add Faculty Form */}
          <form
            onSubmit={handleAddFaculty}
            className="w-[380px] shadow-lg bg-white drop-shadow-2xl rounded-xl flex flex-col h-[30rem] p-6"
          >
            <h1 className="font-medium text-lg mb-4">Add Faculty</h1>
            <hr className="mb-6" />

            <div className="flex flex-col gap-6 items-center justify-around flex-1">
              <input
                type="text"
                name="name"
                value={faculty.name}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-lg placeholder-black bg-blue-100 shadow px-3"
                placeholder="Enter Faculty Name"
                
              />
              <input
                type="text"
                name="facultyId"
                value={faculty.facultyId}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-lg placeholder-black bg-blue-100 shadow px-3"
                placeholder="Enter Faculty ID"
                
              />
              <input
                type="email"
                name="email"
                value={faculty.email}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-lg placeholder-black bg-blue-100 shadow px-3"
                placeholder="Enter Faculty Email"
                
              />
              <input
                type="password"
                name="password"
                value={faculty.password}
                onChange={handleFacultyChange}
                className="h-[45px] w-[300px] rounded-lg placeholder-black bg-blue-100 shadow px-3"
                placeholder="Enter Password"
                
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white w-[200px] h-[40px] font-semibold"
              >
                Add
              </button>
            </div>
          </form>

          {/* Remove Faculty Form */}
          <form
            onSubmit={handleRemoveFaculty}
            className="w-[380px] shadow-lg bg-white drop-shadow-2xl rounded-xl flex flex-col h-[20rem] p-6"
          >
            <h1 className="font-medium text-lg mb-4">Remove Faculty</h1>
            <hr className="mb-6" />

            <div className="flex flex-col items-center gap-6 flex-1">
              <input
                type="text"
                value={removeId}
                onChange={(e) => setRemoveId(e.target.value)}
                className="h-[45px] w-[300px] rounded-lg placeholder-black bg-blue-100 shadow px-3"
                placeholder="Enter Faculty ID"
                
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-7 py-2 rounded-lg w-[200px] h-[40px]"
              >
                Remove
              </button>
            </div>
          </form>
        </div>

        {/* View Faculty List */}
        <div className="p-10">
          <div className="w-[240px] shadow-lg bg-white drop-shadow-2xl rounded-xl flex flex-col items-center justify-center h-[100px]">
            <Link to="">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold shadow">
                View <br /> Faculty List
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <FacultyAddedpopup isOpen={addfaculty} onClose={() => setAddfaculty(false)} />
        <FacultyRemovepopup isOpen={remove} onClose={() => setRemove(false)}></FacultyRemovepopup>
    </>
  );
}

export default Add_facultyA;
