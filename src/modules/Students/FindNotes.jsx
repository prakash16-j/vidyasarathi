// let FindNotes=()=>{
//     return <>
//     <section className=" w-200 flex flex-col ">
//             <h2 className=" border-[red]  flex flex-col drop-shadow-2xl bg-[white] rounded  justify-center items-center">
//         <main className="border-2 flex  items-center justify-center ml-20">
//             <h2 className=" w-30"></h2>
//         <h1 className="h-75 w-200 flex flex-col gap-3 justify-center  ">
//             {/* Find notes */}
//            <h2 className="text-2xl font-bold mb-6">Find Notes:</h2>
//            <div className="mb-4 flex items-center w-200   ">
//              <label className="font-medium w-50 ">Choose Semester:</label>
//              <select className="w-100 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
//                <option className="w-full  h-30 drop">
//                       7th Semester(2023-24 Autumn)
//                </option>
//              </select>
//           </div>

// {/* sub */}
//            <div className="mb-4 flex items-center w-200   ">
//              <label className="font-medium w-50 ">Subjects:</label>
//              <select className="w-100 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
//                <option className="w-full  h-30 drop">
//                       Choose Subject
//                </option>
//              </select>
//           </div>

// {/* units */}
//           <div className=" flex">
//             <label className="font-semibold  mb-3">
//               Units: <br /> <span className="font-normal">(Optional)</span>
//             </label>
//             <div className=" w-165 flex justify-center shadow-lg drop-shadow-2xl ">
//              <select className="w-100 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
//                <option className="w-full  h-30 drop">
//                       Choose
//                </option>
//              </select>
//             </div>
//           </div>

//  {/* Submit Button */}
//          <div className="flex  justify-center">
//            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
//              Search
//            </button>
//          </div>

//         </h1>
//         </main>
//         </h2>
//        </section>

//     </>
// }
// export default FindNotes
import React from "react";

const FindNotes = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Find Notes:</h2>

      {/* Semester */}
      <div className="mb-4 flex items-center w-full">
        <label className="font-medium w-40">Choose Semester:</label>
        <select className="flex-1 h-11 bg-blue-100 border border-gray-200 rounded-lg shadow p-2">
          <option>7th Semester (2023-24 Autumn)</option>
        </select>
      </div>

      {/* Subject */}
      <div className="mb-4 flex items-center w-full">
        <label className="font-medium w-40">Subjects:</label>
        <select className="flex-1 h-11 bg-blue-100 border border-gray-200 rounded-lg shadow p-2">
          <option>Choose Subject</option>
        </select>
      </div>

      {/* Units */}
      <div className="mb-4 flex items-center w-full">
        <label className="font-semibold w-40">
          Units: <br /> <span className="font-normal">(Optional)</span>
        </label>
        <select className="flex-1 h-11 bg-blue-100 border border-gray-200 rounded-lg shadow p-2">
          <option>Choose</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
          Search
        </button>
      </div>
    </section>
  );
};

export default FindNotes;
