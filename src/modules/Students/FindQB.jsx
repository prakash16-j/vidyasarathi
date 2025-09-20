import React from "react";

const FindQB = () => {
  return (
    <>
      <section className="w-200 flex flex-col">
        <main className="border-2 flex items-center justify-center ml-20 bg-white rounded drop-shadow-2xl p-6">
          <div className="h-65 w-200 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-6">Find QB:</h2>

            {/* Semester */}
            <div className="mb-4 flex items-center w-full">
              <label className="font-medium w-50">Choose Semester:</label>
              <select className="flex-1 h-11 bg-blue-100 border border-gray-200 rounded-lg shadow-lg px-2">
                <option>7th Semester (2023-24 Autumn)</option>
              </select>
            </div>

            {/* Subjects */}
            <div className="mb-4 flex items-center w-full">
              <label className="font-semibold w-50">
                Choose Subjects:
                <br />
                <span className="font-normal">(Choose Priority Wise)</span>
              </label>
              <select className="flex-1 h-11 bg-blue-100 border border-gray-200 rounded-lg shadow-lg px-2">
                <option>Choose Subject</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
                Search
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default FindQB;
