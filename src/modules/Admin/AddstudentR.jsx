import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let AddstudentR = () => {
  const [student, setStudent] = useState({
    name: "",
    studentId: "",
    email: "",
    branch: "",
    year: "",
    password: "",
  });

  const [removeData, setRemoveData] = useState({
    rollNo: "",
    name: "",
  });

  // handle input changes for Add Student
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // handle input changes for Remove Student
  const handleRemoveChange = (e) => {
    const { name, value } = e.target;
    setRemoveData({ ...removeData, [name]: value });
  };

  const handleSubmit =async (e) => {
      e.preventDefault();
let response1=await fetch("http://localhost:8080/VidyaSarthi/signUp",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
})
    console.log("Adding student:", student);
    console.log(response1);
    // call API here
  };
  const handleRemove =async (e) => {
    e.preventDefault();
    let response2=await fetch("http://localhost:8080/VidyaSarthi/deleteStudent/S2019CSE001",{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(removeData),
})
    console.log("Removing student:", removeData);
    console.log(response2);
    
    // call API here
  };
  

  return (
    <section className="flex flex-col items-center w-full h-screen gap-6 p-6">
      <div className="flex gap-8 w-[80%] justify-center">
        {/* Add Student Form */}
        <form
          onSubmit={handleSubmit}
          className="w-80 shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-center gap-3 items-center p-6"
        >
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter Name"
          />

          <input
            type="text"
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter ID"
          />

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter Email"
          />

          <input
            type="text"
            name="branch"
            value={student.branch}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter Branch"
          />

          <input
            type="text"
            name="year"
            value={student.year}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter Year"
          />

          <input
            type="password"
            name="password"
            value={student.password}
            onChange={handleChange}
            className="h-[35px] w-[200px] shadow-lg rounded-[12px] bg-blue-100 px-3 placeholder-zinc-950"
            placeholder="Enter Password"
          />

          <div className="w-48 flex items-center justify-start">
            <button
              type="submit"
              className="bg-yellow-500 text-white h-8 rounded-lg w-32"
            >
              Add
            </button>
          </div>
        </form>

        {/* Remove Student Form */}
        <form
          onSubmit={handleRemove}
          className="w-72 bg-white shadow-lg drop-shadow-2xl rounded-[12px] flex flex-col justify-center gap-4 items-center p-6"
        >
          <h1 className="font-medium text-lg">Remove Student:</h1>

          <input
            type="text"
            name="rollNo"
            value={removeData.rollNo}
            onChange={handleRemoveChange}
            className="h-8 w-40 rounded-[12px] shadow-lg bg-blue-100 px-3 placeholder:font-bold"
            placeholder="Enter Roll Number"
          />

          <input
            type="text"
            name="name"
            value={removeData.name}
            onChange={handleRemoveChange}
            className="h-8 w-40 shadow-lg rounded-[12px] bg-blue-100 px-3"
            placeholder="Name (Auto)"
          />

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white w-40 px-6 py-2 rounded-lg h-8">
              Remove
            </button>
          </div>
        </form>
      </div>

      {/* View Student List */}
      <Link to="studentProfile">
        <div className="w-[190px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-24">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-40">
            View <br /> Student List
          </button>
        </div>
      </Link>
    </section>
  );
};

export default AddstudentR;
