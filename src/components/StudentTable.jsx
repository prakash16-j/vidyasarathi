import React, { useState } from "react";

const StudentTable = () => {
  const students = [
    { roll: "200XXXXXX", name: "Prem Kr.", course: "B.Tech" },
    { roll: "201XXXXXX", name: "Amit", course: "B.Sc" },
    { roll: "202XXXXXX", name: "Ravi", course: "MBA" },
    { roll: "203XXXXXX", name: "Neha", course: "BCA" },
    { roll: "204XXXXXX", name: "Priya", course: "MCA" },
    { roll: "205XXXXXX", name: "Rahul", course: "B.Tech" },
    { roll: "206XXXXXX", name: "Ankit", course: "B.Com" },
    { roll: "207XXXXXX", name: "Sneha", course: "MBA" },
    { roll: "208XXXXXX", name: "Vikas", course: "M.Tech" },
    { roll: "209XXXXXX", name: "Kiran", course: "B.Sc" },
    { roll: "210XXXXXX", name: "Suman", course: "BCA" },
    { roll: "211XXXXXX", name: "Pooja", course: "MCA" },
  ];

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // ✅ Slice data for current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentStudents = students.slice(indexOfFirstRow, indexOfLastRow);

  // ✅ Total pages
  const totalPages = Math.ceil(students.length / rowsPerPage);

  return (
    <div className=" flex w-[40%] h-full flex-col drop-shadow-2xl  rounded-xl bg-white shadow-md overflow-hidden">
      {/* Table */}
      <table className="w-full h-full  ">
        <thead className="text-center h-10 ">
          <tr className="bg-orange-400  text-white text-sm ">
            <th className="p-2 border-2 ">Roll Number</th>
            <th className="p-2 border-2">Name</th>
            <th className="p-2 border-2">Course</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {currentStudents.map((s, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-blue-50" : "bg-blue-100"}
            >
              <td className="p-2 text-sm border">{s.roll}</td>
              <td className="p-2 text-sm border">{s.name}</td>
              <td className="p-2 text-sm border">{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between px-3 py-2 bg-gray-400 text-gray-700 text-sm h-8 font-medium">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="disabled:opacity-50"
        >
          &lt;&lt; Prev Page
        </button>

        <span>
           {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="disabled:opacity-50"
        >
          Next Page &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
