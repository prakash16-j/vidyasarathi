import React, { useState } from "react";

const StudentTable2 = () => {
  const students = [
    {
      RollNumber: "200XXXXXX",
      Name: "Prem Kr.",
      Course: "B.Tech",
      Batch: "2020-24",
      FeeStatus: "No due",
      Registration: "Provisional",
      Verification: "Pending",
      Details: "Open"
    },
    // Dummy data
    ...Array.from({ length: 11 }).map((_, i) => ({
      RollNumber: `200XXXX${i + 1}`,
      Name: `Name ${i + 1}`,
      Course: "Course",
      Batch: "Batch",
      FeeStatus: "Fee Status",
      Registration: "Registration",
      Verification: "Verification",
      Details: "Details"
    }))
  ];

  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-500  h-full rounded-2xl">
      <table className="w-full h-full text-center  border-separate border-spacing-0.8">
        <thead className="h-10" >
          <tr className="bg-orange-400 text-white ">
            <th className="p-2  rounded-tl-xl text-center">Roll Number</th>
            <th className="p-2 ">Name</th>
            <th className="">Course</th>
            <th className="">Batch</th>
            <th className="">Fee Status</th>
            <th className="">Registration</th>
            <th className="">Verification</th>
            <th className=" rounded-tr-xl">Detail</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(
            (
              {
                RollNumber,
                Name,
                Course,
                Batch,
                FeeStatus,
                Registration,
                Verification,
                Details
              },
              i
            ) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-blue-50" : "bg-blue-100"}
              >
                <td className="p-2 text-sm border rounded-tl-xl rounded-bl-xl">{RollNumber}</td>
                <td className="p-2 text-sm border">{Name}</td>
                <td className="p-2 text-sm border">{Course}</td>
                <td className="p-2 text-sm border">{Batch}</td>
                <td className="p-2 text-sm border">{FeeStatus}</td>
                <td className="p-2 text-sm border">{Registration}</td>
                <td className="p-2 text-sm border">{Verification}</td>
                <td className="p-2 text-sm border rounded-br-xl rounded-tr-xl">{Details}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between px-3 py-2 text-black-600 text-sm font-medium">
        <button
          className="cursor-pointer disabled:opacity-40"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          &lt;&lt; Prev. Page
        </button>

        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="cursor-pointer disabled:opacity-40"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default StudentTable2;
