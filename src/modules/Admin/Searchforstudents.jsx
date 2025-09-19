// import { IoMdDownload } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Searchforstudents = () => {
//   // Controlled state variables
//   const [course, setCourse] = useState("");
//   const [batch, setBatch] = useState("");
//   const [branch, setBranch] = useState("");

//   const [paymentStatus, setPaymentStatus] = useState("");
//   const [regStatus, setRegStatus] = useState("");
//   const [verification, setVerification] = useState("");

//   const [rollNumber, setRollNumber] = useState("");
//   const [studentName, setStudentName] = useState("");
//   const [fatherName, setFatherName] = useState("");

//   return (
//     <div className="relative">
//       <div className="top-20 w-300 h-120  bg-white rounded-xl drop-shadow-2xl p-6">
//         {/* Header */}
//         <br />
//         <div className="flex justify-between w-full mb-4">
//           <h1 className="border-2 border-black px-4 py-2  font-bold">
//             Search for students:
//           </h1>
//           <label className="font-bold">
//             <input type="radio" className="mr-2"/>
//             Master List
//           </label>
//         </div>
// <br />
//         <hr className="mb-4" />
// <br />
//         {/* Search by List */}
//         <h1 className="font-bold mb-2">Search by List:</h1><br />
//         <div className="flex justify-evenly gap-6 mb-6">
//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={course}
//             onChange={(e) => setCourse(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Select Course <IoMdDownload />
//             </option>
//             <option value="B.Tech">B.Tech</option>
//             <option value="MCA">MCA</option>
//           </select>

//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={batch}
//             onChange={(e) => setBatch(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Select Batch <IoMdDownload />
//             </option>
//             <option value="2025">2025</option>
//             <option value="2026">2026</option>
//           </select>

//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Select Branch <IoMdDownload />
//             </option>
//             <option value="CSE">CSE</option>
//             <option value="ECE">CSD</option>
//             <option value="ECE">ECE</option>
//             <option value="ECE">ECE</option>
//           </select>

//           <button className="bg-[#F3B300] flex rounded-full font-bold items-center justify-center text-white w-40 h-10">
//             Search <CiSearch className="ml-2" />
//           </button>
//         </div>
// <br />
//         {/* Filter Section */}
//         <h1 className="font-bold mb-2">Apply Filter:</h1>
//         <br />
//         <div className="flex justify-evenly gap-6 mb-6">
//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={paymentStatus}
//             onChange={(e) => setPaymentStatus(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Payment Status
//             </option>
//             <option value="Paid">Paid</option>
//             <option value="Unpaid">Unpaid</option>
//           </select>

//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={regStatus}
//             onChange={(e) => setRegStatus(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Reg. Status
//             </option>
//             <option value="Registered">Registered</option>
//             <option value="Not Registered">Not Registered</option>
//           </select>

//           <select
//             className="select rounded-full text-sm px-4 py-2"
//             value={verification}
//             onChange={(e) => setVerification(e.target.value)}
//           >
//             <option className="bg-[#D8E7F5]" value="">
//               Verification
//             </option>
//             <option value="Verified">Verified</option>
//             <option value="Pending">Pending</option>
//           </select>

//           <button className="bg-[#F3B300] flex rounded-full font-bold items-center justify-center text-white w-40 h-10">
//             Apply
//           </button>
//         </div>
// <br />
//         {/* Search by Fields */}
//         <h1 className="font-bold mb-2">Search by Fields:</h1>
//         <br />
//         <div className="flex justify-evenly left-10 gap-7 mb-6">
//           <input
//             type="text"
//             placeholder="Enter Roll Number"
//             value={rollNumber}
//             onChange={(e) => setRollNumber(e.target.value)}
//             className="select rounded-full placeholder-black w-18 text-sm px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Name (Auto)"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             className="select rounded-full  w-18 text-sm px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Father’s Name"
//             value={fatherName}
//             onChange={(e) => setFatherName(e.target.value)}
//             className="select rounded-full  w-18 text-sm px-4 py-2"
//           />
//           <Link to="/student-table">
//             <button className="bg-[#F3B300] flex rounded-full h-10 font-bold items-center justify-center text-white w-40">
//               Apply
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchforstudents;


import { IoMdDownload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Searchforstudents = () => {
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");

  const [paymentStatus, setPaymentStatus] = useState("");
  const [regStatus, setRegStatus] = useState("");
  const [verification, setVerification] = useState("");

  const [rollNumber, setRollNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ API call function
  const fetchStudents = async () => {
    try {
      setLoading(true);

      // Build query params
      const queryParams = new URLSearchParams({
        course,
        batch,
        branch,
        paymentStatus,
        regStatus,
        verification,
        rollNumber,
        studentName,
        fatherName,
      });

      const res = await fetch(
        `http://localhost:8080/VidyaSarthi/studentList?${queryParams.toString()}`
      );
      if (!res.ok) throw new Error("Failed to fetch students");

      const data = await res.json();
      setStudents(data); // Expecting API returns array
    } catch (err) {
      console.error("Error fetching students:", err);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="top-20 w-300 h-120 bg-white rounded-xl drop-shadow-2xl p-6">
        <br />
        {/* Header */}
        <div className="flex justify-between w-full mb-4">
          <h1 className="border-2 border-black px-4 left-10 py-2 font-bold">
            Search for students:
          </h1>
          <label className="font-bold">
            <input type="radio" className="mr-2" />
            Master List
          </label>
        </div>
<br />
        <hr className="mb-4" />
<br />
        {/* Search by List */}
        <h1 className="font-bold mb-2">Search by List:</h1>
        <br />
        <div className="flex justify-evenly gap-6 mb-6">
          <select
            className="select rounded-full text-sm px-4 py-2"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Select Course <IoMdDownload />
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
          </select>

          <select
            className="select rounded-full text-sm px-4 py-2"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Select Batch <IoMdDownload />
            </option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>

          <select
            className="select rounded-full text-sm px-4 py-2"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Select Branch <IoMdDownload />
            </option>
            <option value="CSE">CSE</option>
            <option value="CSD">CSD</option>
            <option value="ECE">ECE</option>
          </select>

          <button
            onClick={fetchStudents}
            className="bg-[#F3B300] flex rounded-full font-bold items-center justify-center text-white w-40 h-10"
          >
            Search <CiSearch className="ml-2" />
          </button>
        </div>
<br />
        {/* Filter Section */}
        <h1 className="font-bold mb-2">Apply Filter:</h1>
        <br />
        <div className="flex justify-evenly gap-6 mb-6">
          <select
            className="select rounded-full text-sm px-4 py-2"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Payment Status
            </option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>

          <select
            className="select rounded-full text-sm px-4 py-2"
            value={regStatus}
            onChange={(e) => setRegStatus(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Reg. Status
            </option>
            <option value="Registered">Registered</option>
            <option value="Not Registered">Not Registered</option>
          </select>

          <select
            className="select rounded-full text-sm px-4 py-2"
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
          >
            <option className="bg-[#D8E7F5]" value="">
              Verification
            </option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
          </select>

          <button
            onClick={fetchStudents}
            className="bg-[#F3B300] flex rounded-full font-bold items-center justify-center text-white w-40 h-10"
          >
            Apply
          </button>
        </div>
<br />
        {/* Search by Fields */}
        <h1 className="font-bold mb-2">Search by Fields:</h1>
        <br />
        <div className="flex justify-evenly gap-7 mb-6">
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="select rounded-full placeholder-black w-18 text-sm px-4 py-2"
          />
          <input
            type="text"
            placeholder="Name (Auto)"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="select rounded-full w-18 text-sm px-4 py-2"
          />
          <input
            type="text"
            placeholder="Father’s Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="select rounded-full w-18 text-sm px-4 py-2"
          />
          <button
            onClick={fetchStudents}
            className="bg-[#F3B300] flex rounded-full h-10 font-bold items-center justify-center text-white w-40"
          >
            Apply
          </button>
        </div>

        {/* Student Table Results */}
        <div className="mt-6">
          {loading ? (
            <p>Loading...</p>
          ) : students.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Roll No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Father Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Course</th>
                  <th className="border border-gray-300 px-4 py-2">Batch</th>
                  <th className="border border-gray-300 px-4 py-2">Branch</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Payment
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Reg. Status
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Verification
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {student.rollNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.studentName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.fatherName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.course}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.batch}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.branch}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.paymentStatus}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.regStatus}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.verification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No students found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchforstudents;