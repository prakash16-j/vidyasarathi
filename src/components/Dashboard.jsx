import React from "react";

const Dashboard = () => {
  const subjects = [
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Abstraction",
    "Interface",
    "Advantages/Dis-Advantages Of Objects",
  ];

  const pyqs = [
    "Summer 2022-2023",
    "Winter 2022-2023",
    "Summer 2022-2023",
    "Summer 2022-2023",
    "Summer 2022-2023",
    "Summer 2022-2023",
  ];

  return (
    <div className=" bg-gray-50 flex items-center  justify-center h-150 p-6 shadow-lg drop-shadow-2xl w-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-400 h-100 max-w-5xl shadow-lg drop-shadow-2xl">
        {/* Subjects Section */}
        <div className="bg-white shadow-lg rounded-2xl relative py-6 px-6 flex flex-col h-full">
          <h2 className="text-l  font-bold flex border-2  w-30 items-center justify-center">Subject:</h2> 
          <div className="flex-1 flex flex-col h-50 gap-3 w-100 items-center ">
            <div className=" flex h-80 flex-col gap-2 ">
            {subjects.map((subj, idx) => (
              <button
                key={idx}
                className="w-90 bg-blue-100 text-blue-600 text-left px-4 py-2 h-30 rounded-md hover:bg-blue-200 transition"
               >
                {subj}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-sm font-semibold w-72">
            <button className="text-black">&lt;&lt; Prev. Page</button>
            <button className="text-black">Next Page &gt;&gt;</button>
          </div>
          </div>
        </div>

        {/* PYQs Section */}
        <div className="bg-white shadow-lg rounded-2xl relative p px-6 flex flex-col h-full">
          <h2 className="text-l font-bold flex w-30 items-center justify-center">PYQs:</h2>
          <div className=" flex h-50 flex-col  w-120 gap-3 items-center">
            <div className="border-2 flex flex-col gap-3 h-100">
            {pyqs.map((year, idx) => (
              <button
                key={idx}
                className="w-92 bg-blue-100 text-blue-600 text-left px-4 py-2 h-11 gap-3 rounded-md hover:bg-blue-200 transition"
              >
                {year}
              </button>
            ))}
          </div>
          <div className="flex h-full justify-between items-center 
           text-sm font-semibold w-72">
            <button className="text-black items-center justify-between ">&lt;&lt; Prev. Page</button>
            <button className="text-black">Next Page &gt;&gt;</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
