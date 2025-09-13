import React, { useState } from "react";
import StudentNavbar from "./StudentNavbar";

const StudentSignUP = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    branch: "",
    year: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(formData);
    await fetch("",{
      method:"post",
      "content-type":"application/json",
      body:JSON.stringify(formData)
    })
  };

  return (
    <>
      <StudentNavbar />
      <br />
      <section className="flex justify-center">
        <div className="drop-shadow-2xl bg-white rounded-2xl w-[30rem] h-150" style={{ paddingLeft: "28px", paddingTop: "20px" }}>
          <form onSubmit={handleSubmit} className="rounded-2xl" style={{ paddingLeft: "1px" }}>
            <h1 className="text-2xl font-bold mb-1">SignUp</h1><br />
            <hr className="border-gray-400 w-40 mb-3" />
            <p className="text-gray-600 mb-6">Welcome onboard with us!</p>

            {/* Name */}
            <label className="block mb-2 font-semibold">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-[19rem] h-[2rem] mb-4 border rounded-lg bg-blue-100  focus:outline-none" />

            {/* Student ID */}
            <label className="block mb-2 font-semibold">Student ID</label>
            <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Enter your student ID" className="w-[19rem] h-[2rem] mb-4 border rounded-lg bg-blue-100 focus:outline-none" />

            {/* Email */}
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-[19rem] h-[2rem] mb-4 border rounded-lg bg-blue-100 focus:outline-none" />

            {/* Branch */}
            <label className="block mb-2 font-semibold">Branch</label>
            <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Enter your branch" className="w-[19rem] h-[2rem] mb-4 border rounded-lg bg-blue-100 focus:outline-none" />

            {/* Year */}
            <label className="block mb-2 font-semibold">Year</label>
            <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Enter your graduation year" className="w-[19rem] h-[2rem] mb-4 border rounded-lg bg-blue-100 focus:outline-none" />

            {/* Password + OTP */}
            <label className="block mb-2 font-semibold">Password</label>
            <div className="flex gap-2 mb-4">
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-[19rem] h-[2rem] border rounded-l-lg bg-blue-100 focus:outline-none" />
              <button type="button" className="bg-amber-400 text-black font-semibold px-3 rounded-lg hover:bg-amber-500" onClick={() => alert("OTP Generated! (Dummy Action)")}>
                Generate OTP
              </button>
            </div>

            {/* OTP */}
            <label className="block mb-2 font-semibold">OTP</label>
            <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="Enter your OTP" className="h-[2rem] w-[19rem] mb-6 p-3 border rounded-lg bg-blue-100 focus:outline-none" />

            {/* Submit */}
            <button type="submit" className="h-[2rem] w-[19rem] bg-amber-400 text-black font-bold py-3 rounded-lg hover:bg-amber-500">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default StudentSignUP;
