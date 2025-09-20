// import { Link } from "react-router-dom"

// let AddstudentR=()=>{
//     return(<>
//       <section className="flex flex-col items-center w-full h-200  gap-3">
//         <div className="flex  gap-5 h-100 w-[70%]  items-end justify-center">
//    <div className=" w-70 shadow-lg bg-white border drop-shadow-2xl   rounded-[12px] flex flex-col justify-center gap-2 items-center h-90 ">

//     <input
//       type="text"
//       className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3 placeholder-zinc-950  "
//       placeholder="  Enter Name"
//     />
    
//     <input
//       type="text"
//       className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950 shadow-inner "
//       placeholder="  Enter ID"
//     />
//     <input
//       type="text"
//       className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
//       placeholder="  Enter Email"
//     />
//     <input
//       type="text"
//       className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
//       placeholder="  Enter Branch"
//     />
//     <input
//       type="text"
//       className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
//       placeholder="  Enter Year"
//     />
//     <input
//       type="text"
//       className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
//       placeholder="  Enter Password"
//     />
// <div className=" w-48 flex items-center justify-start ">
//     <button className="bg-yellow-500 text-white h-8 rounded-lg w-30   ">
//       Add
//     </button>
//     </div>
//     </div>
    

//     <div className=" w-60  bg-white git  drop-shadow-2xl rounded-[12px] flex flex-col justify-center gap-6 items-center h-[260px] ">
//       <div className=" h-50 w-40  justify-start items-center gap-3 flex flex-col">
//     <h1 className="font-normal flex  w-30">Remove Student:</h1>
//     <input type="text"
//      className="h-8 w-40  rounded-[12px]  shadow-lg drop-shadow-2xl text-left bg-blue-100 px-3 placeholder:font-bold"
//       placeholder="  Enter Roll Number"
//     />
    
//     <input
//       type="text"
//       className="h-8 w-40 showdow-2xl shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3"
//       placeholder="   Name (Auto)"
//     />
// <div className="w-38 flex items-center justify-start">
//     <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-30 h-7">
//       Remove
//     </button>
//     </div>
//     </div>
//     </div>
//     </div>
//    <Link to="studentProfile">
//     <div className="w-[190px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-30 ">
//       <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-40 placeholder-emerald-50 ">
//       View <br />
//       StudentList
//     </button>
//     </div>
//    </Link>
  
  
// </section>

//     </>)
// } 
// export default AddstudentR

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AddstudentR = () => {
//   // State for Add Student form
//   const [addStudentForm, setAddStudentForm] = useState({
//     name: "",
//     id: "",
//     email: "",
//     branch: "",
//     year: "",
//     password: "",
//   });

//   // State for Remove Student form
//   const [removeStudentForm, setRemoveStudentForm] = useState({
//     rollNumber: "",
//     nameAuto: "", // This would be auto-populated
//   });

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setAddStudentForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleRemoveChange = (e) => {
//     const { name, value } = e.target;
//     setRemoveStudentForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddSubmit = (e) => {
//     e.preventDefault();
//     console.log("Add Student Submitted:", addStudentForm);
//     // Add your submission logic here
//   };

//   const handleRemoveSubmit = (e) => {
//     e.preventDefault();
//     console.log("Remove Student Submitted:", removeStudentForm);
//     // Add your submission logic here
//   };

//   return (
//     <section className="flex flex-col items-center w-full min-h-screen p-8 bg-gray-50">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full max-w-6xl">
//         {/* Add Student Form */}
//         <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//           <form onSubmit={handleAddSubmit} className="space-y-4">
//             <h3 className="sr-only">Add Student Form</h3>
//             {/* Input fields for Add Student form */}
//             <input
//               type="text"
//               name="name"
//               value={addStudentForm.name}
//               onChange={handleAddChange}
//               placeholder="Enter Name"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="id"
//               value={addStudentForm.id}
//               onChange={handleAddChange}
//               placeholder="Enter ID"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               name="email"
//               value={addStudentForm.email}
//               onChange={handleAddChange}
//               placeholder="Enter Email"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="branch"
//               value={addStudentForm.branch}
//               onChange={handleAddChange}
//               placeholder="Enter Branch"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="year"
//               value={addStudentForm.year}
//               onChange={handleAddChange}
//               placeholder="Enter Year"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               name="password"
//               value={addStudentForm.password}
//               onChange={handleAddChange}
//               placeholder="Enter Password"
//               className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
//             >
//               Add
//             </button>
//           </form>
//         </div>

//         {/* Right Column: Remove Student and View List */}
//         <div className="flex flex-col gap-8 w-full max-w-md">
//           {/* Remove Student Card */}
//           <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
//             <h3 className="font-semibold text-lg mb-4 text-center">Remove Student:</h3>
//             <form onSubmit={handleRemoveSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="rollNumber"
//                 value={removeStudentForm.rollNumber}
//                 onChange={handleRemoveChange}
//                 placeholder="Enter Roll Number"
//                 className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 name="nameAuto"
//                 value={removeStudentForm.nameAuto}
//                 onChange={handleRemoveChange}
//                 placeholder="Name (Auto)"
//                 readOnly
//                 className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
//               />
//               <button
//                 type="submit"
//                 className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
//               >
//                 Remove
//               </button>
//             </form>
//           </div>

//           {/* View Student List Button */}
//           <Link to="studentProfile" className="w-full max-w-md">
//             <div className="bg-white shadow-xl rounded-2xl p-8 flex justify-center">
//               <button className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md">
//                 View StudentList
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddstudentR;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddstudentR = () => {
  // State for Add Student form
  const [addStudentForm, setAddStudentForm] = useState({
    name: "",
    id: "",
    email: "",
    branch: "",
    year: "",
    password: "",
  });

  // State for Remove Student form
  const [removeStudentForm, setRemoveStudentForm] = useState({
    rollNumber: "",
    nameAuto: "", // This would be auto-populated
  });

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddStudentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveChange = (e) => {
    const { name, value } = e.target;
    setRemoveStudentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log("Add Student Submitted:", addStudentForm);
    // Add your submission logic here
  };

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    console.log("Remove Student Submitted:", removeStudentForm);
    // Add your submission logic here
  };

  return (
    <section className="flex flex-col items-center w-full min-h-screen p-8 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full max-w-6xl">
        {/* Add Student Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <h3 className="sr-only">Add Student Form</h3>
            {/* Input fields for Add Student form */}
            <input
              type="text"
              name="name"
              value={addStudentForm.name}
              onChange={handleAddChange}
              placeholder="Enter Name"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="id"
              value={addStudentForm.id}
              onChange={handleAddChange}
              placeholder="Enter ID"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={addStudentForm.email}
              onChange={handleAddChange}
              placeholder="Enter Email"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="branch"
              value={addStudentForm.branch}
              onChange={handleAddChange}
              placeholder="Enter Branch"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="year"
              value={addStudentForm.year}
              onChange={handleAddChange}
              placeholder="Enter Year"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              value={addStudentForm.password}
              onChange={handleAddChange}
              placeholder="Enter Password"
              className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
            >
              Add
            </button>
          </form>
        </div>

        {/* Right Column: Remove Student and View List */}
        <div className="flex flex-col gap-8 w-full max-w-md">
          {/* Remove Student Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
            <h3 className="font-semibold text-lg mb-4 text-center">Remove Student:</h3>
            <form onSubmit={handleRemoveSubmit} className="space-y-4">
              <input
                type="text"
                name="rollNumber"
                value={removeStudentForm.rollNumber}
                onChange={handleRemoveChange}
                placeholder="Enter Roll Number"
                className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="nameAuto"
                value={removeStudentForm.nameAuto}
                onChange={handleRemoveChange}
                placeholder="Name (Auto)"
                readOnly
                className="w-full h-12 px-4 bg-blue-50 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
              />
              <button
                type="submit"
                className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md"
              >
                Remove
              </button>
            </form>
          </div>

          {/* View Student List Button */}
          <Link to="studentProfile" className="w-full max-w-md">
            <div className="bg-white shadow-xl rounded-2xl p-8 flex justify-center">
              <button className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md">
                View StudentList
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddstudentR;