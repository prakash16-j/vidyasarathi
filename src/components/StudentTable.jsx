import React from "react";

const StudentTable = () => {
  const students = [
    { roll: "200XXXXXX", name: "Prem Kr.", course: "B.Tech" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    {},
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" },
    { roll: "Roll Number", name: "Name", course: "Course" }
  ];

  return (
    <div className="w-80 mx-auto mt-6 border-2 border-orange-400 rounded-xl bg-white shadow-md overflow-hidden">
      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-400 text-white text-sm">
            <th className="p-2 text-left">Roll Number</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
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

      {/* Pagination */}
      <div className="flex justify-between px-3 py-2 text-black-600 text-sm font-medium">
        <span className="cursor-pointer">&lt;&lt; Prev. Page</span>
        <span className="cursor-pointer">Next Page &gt;&gt;</span>
      </div>
    </div>

   

  );
};

export default StudentTable;