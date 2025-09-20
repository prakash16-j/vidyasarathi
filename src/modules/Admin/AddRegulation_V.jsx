// let AddRegulation_V = () => {
//   return (
//     <>
//       <div className="  drop-shadow-2xl  h-90 flex justify-center bg-white">
//         <div className="  flex justify-between ">
//         <div className="w-full ml-20 bg-white shadow-md rounded-lg p-8  w-200 bg-[red]">
//           {/* Title */}
//           <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

//           {/* Regulation */}
//           <div className="mb-4 flex items-center w-250   ">
//             <label className="font-medium w-50 ">Choose Regulation :</label>
//             <select className="w-170 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
//               <option className="w-full  h-30 drop">
//                      Choose a Regulation from drop down
//               </option>
//             </select>
//           </div>
//           <br />

//           {/* Branch */}
//           <div className="mb-4  flex items-center">
//             <label className="w-50 font-medium">Choose Branch :</label>
//             <select className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl">
//               <option className="w-full">Choose a Branch from drop down</option>
//             </select>
//           </div>
// <br />
//           {/* Semester */}
//           <div className="mb-6 flex items-center">
//             <label className="w-50 font-medium">Choose Semister :</label>
//             <select className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl">
//               <option className="w-full">Choose a Semister from drop down</option>
//             </select>
//           </div>
//           <br />

//           {/* Subjects */}
//           <div className=" flex">
//             <label className="font-semibold  mb-3">
//               Subjects: <br /> <span className="font-normal">(Choose Priority Wise)</span>
//             </label>
//             <div className=" w-183 flex justify-center shadow-lg drop-shadow-2xl ">
//             <div className="flex justify-center  w-170 border-solid    gap-4">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   className=" bg-blue-100 border border-gray-300 rounded-lg "
//                 >
//                   <option className="">{letter}. Choose</option>
//                 </select>
//               ))}
//             </div>
//             </div>
//           </div>
// <br />
//           {/* Submit Button */}
//           <div className="flex  justify-center">
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
//               Submit Now
//             </button>
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import { useState } from "react";
// import RegulationAddedPopup from "../Students/RegulationAddedpopup";

// let AddRegulation_V = () => {
//   const [addRegulation, setAddRegulation] = useState(false);

//   // Controlled states
//   const [regulation, setRegulation] = useState("");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subjects, setSubjects] = useState(["", "", "", "", "", ""]);

//   // Handle subject change by index
//   const handleSubjectChange = (index, value) => {
//     const updated = [...subjects];
//     updated[index] = value;
//     setSubjects(updated);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Example: log form values
//     console.log({
//       regulation,
//       branch,
//       semester,
//       subjects,
//     });

//     setAddRegulation(true);
//   };

//   return (
//     <>
//       <div className="drop-shadow-2xl h-90 flex justify-center bg-white">
//         <div className="flex justify-between">
//           <form
//             onSubmit={handleSubmit}
//             className="ml-20 bg-white shadow-md rounded-lg p-8 w-200 bg-[red]"
//           >
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

//             {/* Regulation */}
//             <div className="mb-4 flex items-center w-250">
//               <label className="font-medium w-50">Choose Regulation :</label>
//               <select
//                 value={regulation}
//                 onChange={(e) => setRegulation(e.target.value)}
//                 className="w-170 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl px-4"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R15">R15</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>

//             {/* Branch */}
//             <div className="mb-4 flex items-center">
//               <label className="w-50 font-medium">Choose Branch :</label>
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//                 <option value="MECH">MECH</option>
//               </select>
//             </div>

//             {/* Semester */}
//             <div className="mb-6 flex items-center">
//               <label className="w-50 font-medium">Choose Semester :</label>
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Semester from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//                 <option value="2-1">2-1</option>
//                 <option value="2-2">2-2</option>
//                 <option value="3-1">3-1</option>
//                 <option value="3-2">3-2</option>
//                 <option value="4-1">4-1</option>
//                 <option value="4-2">4-2</option>
//               </select>
//             </div>

//             {/* Subjects */}
//             <div className="flex">
//               <label className="font-semibold mb-3">
//                 Subjects: <br />{" "}
//                 <span className="font-normal">(Choose Priority Wise)</span>
//               </label>
//               <div className="w-183 flex justify-center shadow-lg drop-shadow-2xl">
//                 <div className="flex justify-center w-170 border-solid gap-4">
//                   {["A", "B", "C", "D", "E", "F"].map((letter, index) => (
//                     <select
//                       key={letter}
//                       value={subjects[index]}
//                       onChange={(e) =>
//                         handleSubjectChange(index, e.target.value)
//                       }
//                       className="bg-blue-100 border border-gray-300 rounded-lg px-2 py-1"
//                     >
//                       <option value="">{letter}. Choose</option>
//                       <option value="Maths">Maths</option>
//                       <option value="Physics">Physics</option>
//                       <option value="Chemistry">Chemistry</option>
//                       <option value="English">English</option>
//                       <option value="Computer Science">Computer Science</option>
//                     </select>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//               >
//                 Submit Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Popup */}
//       <RegulationAddedPopup
//         isOpen={addRegulation}
//         onClose={() => setAddRegulation(false)}
//       />
//     </>
//   );
// };

// export default AddRegulation_V;

// import { useState } from "react";
// import RegulationAddedpopup from "../Students/RegulationAddedpopup";

// let AddRegulation_V = () => {
//   // Controlled state for form inputs
//   const [regulation, setRegulation] = useState("");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subjects, setSubjects] = useState({
//     A: "",
//     B: "",
//     C: "",
//     D: "",
//     E: "",
//     F: "",
//   });
//   const [addRegulation, setAddRegulation] = useState(false);

//   const handleSubjectChange = (e) => {
//     const { name, value } = e.target;
//     setSubjects((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
//           {/* Title */}
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">
//             Add Regulation
//           </h2>

//           {/* Main Form Fields */}
//           <div className="space-y-6 mb-8">
//             {/* Regulation */}
//             <div className="flex items-center">
//               <label htmlFor="regulation" className="text-lg font-medium w-1/4 min-w-[150px] text-gray-600">
//                 Choose Regulation :
//               </label>
//               <select
//                 id="regulation"
//                 value={regulation}
//                 onChange={(e) => setRegulation(e.target.value)}
//                 className="w-full bg-blue-100 border border-gray-300 rounded-lg p-3 text-gray-700 shadow-sm"
//               >
//                 <option value="" disabled>
//                   Choose a Regulation from drop down
//                 </option>
//                 {/* Add dynamic options here */}
//                 <option value="R18">R18</option>
//                 <option value="R22">R22</option>
//               </select>
//             </div>

//             {/* Branch */}
//             <div className="flex items-center">
//               <label htmlFor="branch" className="text-lg font-medium w-1/4 min-w-[150px] text-gray-600">
//                 Choose Branch :
//               </label>
//               <select
//                 id="branch"
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full bg-blue-100 border border-gray-300 rounded-lg p-3 text-gray-700 shadow-sm"
//               >
//                 <option value="" disabled>
//                   Choose a Branch from drop down
//                 </option>
//                 {/* Add dynamic options here */}
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//               </select>
//             </div>

//             {/* Semester */}
//             <div className="flex items-center">
//               <label htmlFor="semester" className="text-lg font-medium w-1/4 min-w-[150px] text-gray-600">
//                 Choose Semester :
//               </label>
//               <select
//                 id="semester"
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full bg-blue-100 border border-gray-300 rounded-lg p-3 text-gray-700 shadow-sm"
//               >
//                 <option value="" disabled>
//                   Choose a Semester from drop down
//                 </option>
//                 {/* Add dynamic options here */}
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//               </select>
//             </div>
//           </div>

//           {/* Subjects */}
//           <div className="mb-8">
//             <h3 className="text-lg font-semibold text-gray-600">
//               Subjects: <br />
//               <span className="font-normal">(Choose Priority Wise)</span>
//             </h3>
//             <div className="flex flex-wrap items-center gap-3 mt-4">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={subjects[letter]}
//                   onChange={handleSubjectChange}
//                   className="flex-1 bg-blue-100 border border-gray-300 rounded-lg p-2 text-gray-700 text-sm shadow-sm min-w-0"
//                 >
//                   <option value="" disabled>
//                     {letter}. Choose
//                   </option>
//                   {/* Add dynamic subject options here */}
//                   <option value="Subject 1">Subject 1</option>
//                   <option value="Subject 2">Subject 2</option>
//                 </select>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               onClick={() => setAddRegulation(true)}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-10 rounded-lg shadow-md transition-colors"
//             >
//               Submit Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Popup */}
//       <RegulationAddedpopup
//         isOpen={addRegulation}
//         onClose={() => setAddRegulation(false)}
//       />
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <>
//       <div className="drop-shadow-2xl h-90 flex justify-center bg-white">
//         <div className="flex justify-between">
//           <form
//             onSubmit={handleSubmit}
//             className="w-full ml-20 bg-white shadow-md rounded-lg p-8 w-200 bg-[red]"
//           >
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

//             {/* Regulation */}
//             <div className="mb-4 flex items-center w-250">
//               <label className="font-medium w-50">Choose Regulation :</label>
//               <select
//                 name="regulation"
//                 value={formData.regulation}
//                 onChange={handleChange}
//                 className="w-170 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>
//             <br />

//             {/* Branch */}
//             <div className="mb-4 flex items-center">
//               <label className="w-50 font-medium">Choose Branch :</label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//               </select>
//             </div>
//             <br />

//             {/* Semester */}
//             <div className="mb-6 flex items-center">
//               <label className="w-50 font-medium">Choose Semister :</label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Semister from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//                 <option value="2-1">2-1</option>
//                 <option value="2-2">2-2</option>
//               </select>
//             </div>
//             <br />

//             {/* Subjects */}
//             <div className="flex">
//               <label className="font-semibold mb-3">
//                 Subjects: <br />{" "}
//                 <span className="font-normal">(Choose Priority Wise)</span>
//               </label>
//               <div className="w-183 flex justify-center shadow-lg drop-shadow-2xl">
//                 <div className="flex justify-center w-170 border-solid gap-4">
//                   {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                     <select
//                       key={letter}
//                       name={letter}
//                       value={formData.subjects[letter]}
//                       onChange={handleChange}
//                       className="bg-blue-100 border border-gray-300 rounded-lg"
//                     >
//                       <option value="">{letter}. Choose</option>
//                       <option value="Maths">Maths</option>
//                       <option value="Physics">Physics</option>
//                       <option value="Chemistry">Chemistry</option>
//                       <option value="DS">DS</option>
//                       <option value="Java">Java</option>
//                     </select>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <br />

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//               >
//                 Submit Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <>
//       <div className="drop-shadow-2xl min-h-screen flex justify-center bg-white px-4 sm:px-8">
//         <div className="flex justify-center w-full max-w-4xl">
//           <form
//             onSubmit={handleSubmit}
//             className="w-full bg-white shadow-md rounded-lg p-6 sm:p-8"
//           >
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">
//               Add Regulation
//             </h2>

//             {/* Regulation */}
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-1/3">Choose Regulation :</label>
//               <select
//                 name="regulation"
//                 value={formData.regulation}
//                 onChange={handleChange}
//                 className="w-full sm:w-2/3 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg px-2"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>

//             {/* Branch */}
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-1/3">Choose Branch :</label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="w-full sm:w-2/3 h-11 bg-blue-100 border border-gray-300 rounded-lg px-2 shadow-lg"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//               </select>
//             </div>

//             {/* Semester */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-1/3">Choose Semester :</label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="w-full sm:w-2/3 h-11 bg-blue-100 border border-gray-300 rounded-lg px-2 shadow-lg"
//               >
//                 <option value="">Choose a Semester from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//                 <option value="2-1">2-1</option>
//                 <option value="2-2">2-2</option>
//               </select>
//             </div>

//             {/* Subjects */}
//             <div className="mb-6">
//               <label className="font-semibold block mb-2">
//                 Subjects:{" "}
//                 <span className="font-normal">(Choose Priority Wise)</span>
//               </label>
//               <div className="flex flex-wrap gap-4 justify-center sm:justify-start bg-white shadow-lg p-3 rounded-lg">
//                 {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                   <select
//                     key={letter}
//                     name={letter}
//                     value={formData.subjects[letter]}
//                     onChange={handleChange}
//                     className="bg-blue-100 border border-gray-300 rounded-lg px-2 py-1 w-28 sm:w-32"
//                   >
//                     <option value="">{letter}. Choose</option>
//                     <option value="Maths">Maths</option>
//                     <option value="Physics">Physics</option>
//                     <option value="Chemistry">Chemistry</option>
//                     <option value="DS">DS</option>
//                     <option value="Java">Java</option>
//                   </select>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//               >
//                 Submit Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <>
//       <div className="drop-shadow-2xl h-auto flex justify-center bg-white px-4 sm:px-8">
//         <div className="flex justify-between w-full max-w-5xl">
//           <form
//             onSubmit={handleSubmit}
//             className="w-full ml-0 sm:ml-20 bg-white shadow-md rounded-lg p-6 sm:p-8 w-200"
//           >
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

//             {/* Regulation */}
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center w-full sm:w-250 gap-2">
//               <label className="font-medium w-full sm:w-50">
//                 Choose Regulation :
//               </label>
//               <select
//                 name="regulation"
//                 value={formData.regulation}
//                 onChange={handleChange}
//                 className="w-full sm:w-170 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>

//             {/* Branch */}
//             <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium w-full sm:w-50">Choose Branch :</label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="w-full sm:w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//               </select>
//             </div>

//             {/* Semester */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium w-full sm:w-50">
//                 Choose Semester :
//               </label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="w-full sm:w-170 h-11 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-lg drop-shadow-2xl"
//               >
//                 <option value="">Choose a Semester from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//                 <option value="2-1">2-1</option>
//                 <option value="2-2">2-2</option>
//               </select>
//             </div>

//             {/* Subjects */}
//             <div className="flex flex-col sm:flex-row sm:items-start gap-3">
//               <label className="font-semibold">
//                 Subjects: <br />
//                 <span className="font-normal">(Choose Priority Wise)</span>
//               </label>
//               <div className="w-full sm:w-183 flex justify-center sm:justify-start shadow-lg drop-shadow-2xl overflow-x-auto">
//                 <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start w-full sm:w-170 border-solid gap-4">
//                   {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                     <select
//                       key={letter}
//                       name={letter}
//                       value={formData.subjects[letter]}
//                       onChange={handleChange}
//                       className="bg-blue-100 border border-gray-300 rounded-lg min-w-[100px]"
//                     >
//                       <option value="">{letter}. Choose</option>
//                       <option value="Maths">Maths</option>
//                       <option value="Physics">Physics</option>
//                       <option value="Chemistry">Chemistry</option>
//                       <option value="DS">DS</option>
//                       <option value="Java">Java</option>
//                     </select>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//               >
//                 Submit Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <>
//       <div className="drop-shadow-2xl flex justify-center bg-white px-4 sm:px-8 py-6">
//         <div className="w-full max-w-4xl">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-md rounded-lg p-6 sm:p-8"
//           >
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

//             {/* Regulation */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-56">Choose Regulation :</label>
//               <select
//                 name="regulation"
//                 value={formData.regulation}
//                 onChange={handleChange}
//                 className="w-full sm:w-96 h-11 bg-blue-100 border border-gray-300 rounded-lg shadow-lg px-3"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>

//             {/* Branch */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-56">Choose Branch :</label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="w-full sm:w-96 h-11 bg-blue-100 border border-gray-300 rounded-lg shadow-lg px-3"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//                 <option value="EEE">EEE</option>
//               </select>
//             </div>

//             {/* Semester */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
//               <label className="font-medium sm:w-56">Choose Semester :</label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="w-full sm:w-96 h-11 bg-blue-100 border border-gray-300 rounded-lg shadow-lg px-3"
//               >
//                 <option value="">Choose a Semester from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//                 <option value="2-1">2-1</option>
//                 <option value="2-2">2-2</option>
//               </select>
//             </div>

//             {/* Subjects */}
//             <div className="mb-6 flex flex-col sm:flex-row sm:items-start gap-3">
//               <label className="font-semibold sm:w-56">
//                 Subjects: <br />
//                 <span className="font-normal">(Choose Priority Wise)</span>
//               </label>
//               <div className="w-full sm:w-96 flex flex-wrap gap-3">
//                 {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                   <select
//                     key={letter}
//                     name={letter}
//                     value={formData.subjects[letter]}
//                     onChange={handleChange}
//                     className="bg-blue-100 border border-gray-300 rounded-lg min-w-[120px] h-11 px-2"
//                   >
//                     <option value="">{letter}. Choose</option>
//                     <option value="Maths">Maths</option>
//                     <option value="Physics">Physics</option>
//                     <option value="Chemistry">Chemistry</option>
//                     <option value="DS">DS</option>
//                     <option value="Java">Java</option>
//                   </select>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//               >
//                 Submit Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <div className="flex justify-center bg-white px-6 py-10">
//       <div className="w-full max-w-4xl">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-lg px-4 sm:px-8"
//         >
//           {/* Title */}
//           <h2 className="text-2xl font-bold mb-8">Add Regulation</h2>

//           {/* Regulation */}
//           <div className="mb-5 flex items-center">
//             <label className="w-56 font-medium">Choose Regulation :</label>
//             <select
//               name="regulation"
//               value={formData.regulation}
//               onChange={handleChange}
//               className="w-[450px] h-11 bg-blue-100 border border-gray-300 rounded-md px-3"
//             >
//               <option value="">Choose a Regulation from drop down</option>
//               <option value="R18">R18</option>
//               <option value="R20">R20</option>
//             </select>
//           </div>

//           {/* Branch */}
//           <div className="mb-5 flex items-center">
//             <label className="w-56 font-medium">Choose Branch :</label>
//             <select
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="w-[450px] h-11 bg-blue-100 border border-gray-300 rounded-md px-3"
//             >
//               <option value="">Choose a Branch from drop down</option>
//               <option value="CSE">CSE</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//             </select>
//           </div>

//           {/* Semester */}
//           <div className="mb-5 flex items-center">
//             <label className="w-56 font-medium">Choose Semister :</label>
//             <select
//               name="semester"
//               value={formData.semester}
//               onChange={handleChange}
//               className="w-[450px] h-11 bg-blue-100 border border-gray-300 rounded-md px-3"
//             >
//               <option value="">Choose a Semister from drop down</option>
//               <option value="1-1">1-1</option>
//               <option value="1-2">1-2</option>
//               <option value="2-1">2-1</option>
//               <option value="2-2">2-2</option>
//             </select>
//           </div>

//           {/* Subjects */}
//           <div className="mb-6 flex">
//             <label className="w-56 font-semibold">
//               Subjects:
//               <br />
//               <span className="font-normal text-sm">
//                 (Choose Priority Wise)
//               </span>
//             </label>
//             <div className="w-[450px] flex flex-wrap gap-3">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={formData.subjects[letter]}
//                   onChange={handleChange}
//                   className="bg-blue-100 border border-gray-300 rounded-md min-w-[120px] h-11 px-2"
//                 >
//                   <option value="">{letter}. Choose</option>
//                   <option value="Maths">Maths</option>
//                   <option value="Physics">Physics</option>
//                   <option value="Chemistry">Chemistry</option>
//                   <option value="DS">DS</option>
//                   <option value="Java">Java</option>
//                 </select>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-10">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// let AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Form Submitted! Check console for data.");
//   };

//   return (
//     <>
//       {/* Outer container for centering and background */}
//       <div className="flex justify-center items-center bg-gray-50 p-8 min-h-screen">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl"
//         >
//           {/* Title */}
//           <h2 className="text-3xl font-bold mb-8 text-gray-800">
//             Add Regulation
//           </h2>

//           {/* Main Form Fields */}
//           <div className="space-y-6 mb-8">
//             <div className="flex flex-col sm:flex-row items-center sm:items-start">
//               <label className="font-medium text-lg min-w-[170px] mr-4">
//                 Choose Regulation :
//               </label>
//               <select
//                 name="regulation"
//                 value={formData.regulation}
//                 onChange={handleChange}
//                 className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4"
//               >
//                 <option value="">Choose a Regulation from drop down</option>
//                 <option value="R18">R18</option>
//                 <option value="R20">R20</option>
//               </select>
//             </div>
//             <div className="flex flex-col sm:flex-row items-center sm:items-start">
//               <label className="font-medium text-lg min-w-[170px] mr-4">
//                 Choose Branch :
//               </label>
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4"
//               >
//                 <option value="">Choose a Branch from drop down</option>
//                 <option value="CSE">CSE</option>
//                 <option value="ECE">ECE</option>
//               </select>
//             </div>
//             <div className="flex flex-col sm:flex-row items-center sm:items-start">
//               <label className="font-medium text-lg min-w-[170px] mr-4">
//                 Choose Semester :
//               </label>
//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4"
//               >
//                 <option value="">Choose a Semester from drop down</option>
//                 <option value="1-1">1-1</option>
//                 <option value="1-2">1-2</option>
//               </select>
//             </div>
//           </div>

//           ---

//           ## **Adjusting the Layout for Subjects**

//           The key to achieving the correct spacing for the subject dropdowns is using **flexbox with wrapping**. Instead of placing the six dropdowns in a single row, you'll put them in a container that allows them to wrap to a new line, creating two rows of three.

//           <div className="flex items-start mb-8 gap-6">
//             <div className="min-w-[170px]">
//               <label className="font-bold text-gray-800">
//                 Subjects:
//               </label>
//               <span className="block font-normal text-sm text-gray-600">
//                 (Choose Priority Wise)
//               </span>
//             </div>
//             <div className="flex-grow flex flex-wrap justify-between gap-4">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={formData.subjects[letter]}
//                   onChange={handleChange}
//                   className="bg-blue-100 border border-gray-300 rounded-lg flex-1 min-w-[calc(33.33%-10px)] h-10 px-2 shadow-sm"
//                 >
//                   <option value="">{letter}. Choose</option>
//                   <option value="Maths">Maths</option>
//                   <option value="Physics">Physics</option>
//                 </select>
//               ))}
//             </div>
//           </div>

//           ---

//           {/* Submit Button */}
//           <div className="flex justify-center mt-12">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-12 rounded-lg shadow-md"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// const AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // You can handle form submission logic here
//   };

//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-8">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">Add Regulation</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Main Form Fields */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Regulation :
//             </label>
//             <select
//               name="regulation"
//               value={formData.regulation}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Regulation from drop down</option> <br /> <br />
//             </select>
//           </div> 

//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Branch :
//             </label> 
//             <select
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Branch from drop down</option>
//             </select>
//           </div>

//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Semester :
//             </label>
//             <select
//               name="semester"
//               value={formData.semester}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Semester from drop down</option>
//             </select>
//           </div>

//           {/* Subjects Section with 2x3 grid */}
//           <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
//             <div className="w-full sm:w-1/3 pt-2">
//               <label className="font-bold text-lg text-gray-800">Subjects:</label>
//               <span className="block font-normal text-sm text-gray-600">(Choose Priority Wise)</span>
//             </div>
//             <div className="flex-grow grid grid-cols-3 gap-2 sm:gap-4">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={formData.subjects[letter]}
//                   onChange={handleChange}
//                   className="h-10 bg-blue-100 border border-gray-300 rounded-lg px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">{letter}. Choose</option>
//                   <option value="Maths">Maths</option>
//                 </select>
//               ))}
//             </div>
//           </div> <br />

//           {/* Submit Button */}
//           <div className="flex justify-center mt-12">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-12 rounded-lg shadow-md"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// const AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "2025",
//     branch: "CSE",
//     semester: "1",
//     subjectDto: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async(e)=> {
//     let resp=await fetch("http://localhost:8080/VidyaSarthi/addRegulation",{
//       method: "POST",
//       headers: {"content-Type": "application/json"},
//       body: JSON.stringify(formData)
//     })
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     console.log(resp);
    
//     // You can add your form submission logic here
//   };

//   return (
//     <div className="flex justify-center  items-center bg-gray-50 min-h-screen p-8 drop-shadow-2xl">
//       <div className="w-full max-w-4xl bg-white shadow-lg  rounded-lg p-8">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">Add Regulation</h2>

//         {/* The main form container with vertical spacing */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Regulation Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Regulation :
//             </label>
//             <select
//               name="regulation"
//               value={formData.regulation}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Regulation from drop down</option>
//             </select>
            
//           </div>
//           <br />  
//        {/* Branch Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Branch :
//             </label>
//             <select
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Branch from drop down</option>
//             </select>
//           </div> <br />

//           {/* Semester Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose semester :
//             </label>
//             <select
//               name="semester"
//               value={formData.semester}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Semester from drop down</option>
//             </select>
//           </div> <br />

//           {/* Subjects Section with 2x3 grid and alignment */}
//           <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
//             <div className="w-full sm:w-1/3 pt-2">
//               <label className="font-bold text-lg text-gray-800">Subjects:</label>
//               <span className="block font-normal text-sm text-gray-600">(Choose Priority Wise)</span>
//             </div>
//             <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={formData.subjectDto[letter]}
//                   onChange={handleChange}
//                   className="h-10 bg-blue-100 border border-gray-300 rounded-lg px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">{letter}. Choose</option>
//                   <option value="Maths">Maths</option>
//                   <option value="Maths">Maths</option>
//                   <option value="Maths">Maths</option>
//                 </select>
//               ))}
//             </div>
//           </div> <br />

//           {/* Submit Button */}
//           <div className="flex justify-center mt-12">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-12 rounded-lg shadow-md"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRegulation_V;

// import React, { useState } from "react";

// const AddRegulation_V = () => {
//   const [formData, setFormData] = useState({
//     regulation: "",
//     branch: "",
//     semester: "",
//     subjects: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//       E: "",
//       F: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["A", "B", "C", "D", "E", "F"].includes(name)) {
//       setFormData((prev) => ({
//         ...prev,
//         subjects: {
//           ...prev.subjects,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center bg-gray-50 min-h-screen p-8">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center sm:text-left">Add Regulation</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Regulation Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Regulation :
//             </label>
//             <select
//               name="regulation"
//               value={formData.regulation}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Regulation from drop down</option>
//             </select>
//           </div>

//           {/* Branch Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Branch :
//             </label>
//             <select
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Branch from drop down</option>
//             </select>
//           </div>

//           {/* Semester Field */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
//               Choose Semester :
//             </label>
//             <select
//               name="semester"
//               value={formData.semester}
//               onChange={handleChange}
//               className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Choose a Semester from drop down</option>
//             </select>
//           </div>

//           {/* Subjects Section */}
//           <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
//             <div className="w-full sm:w-1/3 pt-2">
//               <label className="font-bold text-lg text-gray-800">Subjects:</label>
//               <span className="block font-normal text-sm text-gray-600">(Choose Priority Wise)</span>
//             </div>
//             {/* Added `justify-center` for mobile centering */}
//             <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 justify-items-center sm:justify-items-start">
//               {["A", "B", "C", "D", "E", "F"].map((letter) => (
//                 <select
//                   key={letter}
//                   name={letter}
//                   value={formData.subjects[letter]}
//                   onChange={handleChange}
//                   className="h-10 w-full bg-blue-100 border border-gray-300 rounded-lg px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">{letter}. Choose</option>
//                 </select>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center mt-12">
//             <button
//               type="submit"
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-12 rounded-lg shadow-md"
//             >
//               Submit Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRegulation_V;

import React, { useState } from "react";

const AddRegulation_V = () => {
  const [formData, setFormData] = useState({
    regulation: "",
    branch: "",
    semester: "",
    // Changed subjectDto to an array of objects
    subjectDto: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the change is from the main form fields
    if (["regulation", "branch", "semester"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      // Check if the change is from a subject input
      const [index, key] = name.split("-");
      setFormData((prev) => {
        const newSubjects = [...prev.subjectDto];
        newSubjects[index] = {
          ...newSubjects[index],
          [key]: value,
        };
        return {
          ...prev,
          subjectDto: newSubjects,
        };
      });
    }
  };

  const addSubjectField = () => {
    setFormData((prev) => ({
      ...prev,
      subjectDto: [...prev.subjectDto, { name: "", subjectCode: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8080/VidyaSarthi/addRegulation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response:", resp);
      if (resp.ok) {
        console.log("Regulation added successfully!");
      } else {
        console.error("Failed to add regulation.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen p-8 drop-shadow-2xl">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Add Regulation</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main fields */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
              Choose Regulation :
            </label>
            <select
              name="regulation"
              value={formData.regulation}
              onChange={handleChange}
              className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a Regulation from drop down</option>
                      <option value=" ">R18</option>
                      <option value="">R22</option>
            </select>
          </div> <br />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
              Choose Branch :
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a Branch from drop down</option>
      
            </select>
          </div> <br />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <label className="font-medium text-lg text-gray-700 w-full sm:w-1/3">
              Choose Semester :
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="flex-grow h-12 bg-blue-100 border border-gray-300 rounded-lg shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a Semester from drop down</option>
            </select>
          </div> <br />

          {/* Subjects Section */}
          <div className="flex flex-col sm:flex-row  items-start gap-4 mt-8">
            <div className="w-full sm:w-1/3 pt-2">
              <label className="font-bold text-lg text-gray-800">Subjects:</label>
              <span className="block font-normal text-sm text-gray-600">(Add Subject Name and Code)</span>
            </div>
            <div className="flex-grow space-y-4">
              {formData.subjectDto.map((subject, index) => (
                <section className=" flex flex-col justify-center ">
                <div key={index} className="flex gap-4 justify-center ">
                  <input
                    type="text"
                    name={`${index}-name`}
                    value={subject.name}
                    onChange={handleChange}
                    placeholder="Subject Name"
                    className="flex-grow h-10 bg-blue-100 border border-gray-300 rounded-lg px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                
                  <input
                    type="text"
                    name={`${index}-subjectCode`}
                    value={subject.subjectCode}
                    onChange={handleChange}
                    placeholder="Subject Code"
                    className="flex-grow h-10 bg-blue-100 border border-gray-300 rounded-lg px-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  /> 
                </div> <br />
                </section>
              ))}
            
              <button
                type="button"
                onClick={addSubjectField}
                className="w-full h-10 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300"
              >
                + Add Subject
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-12 rounded-lg shadow-md"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRegulation_V;