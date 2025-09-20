import React from "react";

const FindPyQ = () => {
  return (
    <>
      <section className="w-200 flex flex-col">
        <h2 className="border-[red] flex flex-col drop-shadow-2xl bg-[white] rounded justify-center items-center">
          <main className="border-2 flex items-center justify-center ml-20">
            <h2 className="w-30"></h2>
            <h1 className="h-65 w-200 flex flex-col gap-3 justify-center">
              <h2 className="text-2xl font-bold mb-6">Find PYQs:</h2>

              <div className="mb-4 flex items-center w-200">
                <label className="font-medium w-50">Choose Semester:</label>
                <select className="w-100 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
                  <option className="w-full h-30 drop">7th Semester(2023-24 Autumn)</option>
                </select>
              </div>

              {/* subject */}
              <div className="mb-4 flex items-center w-200">
                <label className="font-medium w-50">Subjects:</label>
                <select className="w-100 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg drop-shadow-2xl p1-4">
                  <option className="w-full h-30 drop">Choose Subject</option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button type="button" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
                  Search
                </button>
              </div>
            </h1>
          </main>
        </h2>
      </section>
    </>
  );
};

export default FindPyQ;
