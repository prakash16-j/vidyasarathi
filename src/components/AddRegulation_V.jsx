let AddRegulation_V = () => {
  return (
    <>
      <div className="  drop-shadow-2xl flex justify-center bg-white">
        <div className="  flex justify-between  w-310">
        <div className="w-full ml-20 bg-white shadow-md rounded-lg p-8 border-2 border-solid w-200 bg-[red]">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

          {/* Regulation */}
          <div className="mb-4 w-350  ">
            <label className="w-200 font-medium">Choose Regulation :</label>
            <select className="w-[600px] bg-blue-100 border border-gray-300 rounded-lg px-4 py-2">
              <option className="w-full">
                Choose a Regulation from drop down
              </option>
            </select>
          </div>

          {/* Branch */}
          <div className="mb-4 flex items-center">
            <label className="w-40 font-medium">Choose Branch :</label>
            <select className="w-[500px] bg-blue-100 border border-gray-300 rounded-lg px-4 py-2">
              <option className="w-full">Choose a Branch from drop down</option>
            </select>
          </div>

          {/* Semester */}
          <div className="mb-6 flex items-center">
            <label className="w-40 font-medium">Choose Semister :</label>
            <select className="w-[500px] bg-blue-100 border border-gray-300 rounded-lg px-4 py-2">
              <option className="w-full">Choose a Semister from drop down</option>
            </select>
          </div>

          {/* Subjects */}
          <div className="mb-6">
            <label className="font-semibold block mb-3">
              Subjects: <span className="font-normal">(Choose Priority Wise)</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <select
                  key={letter}
                  className="w-[160px] bg-blue-100 border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option className="w-full">{letter}. Choose</option>
                </select>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md">
              Submit Now
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddRegulation_V;
