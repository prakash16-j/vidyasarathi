let AddRegulation_V = () => {
  return (
    <>
      <div className="  drop-shadow-2xl h-100 flex justify-center bg-white">
        <div className="  flex justify-between ">
        <div className="w-full ml-20 bg-white shadow-md rounded-lg p-8  w-200 bg-[red]">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">Add Regulation</h2>

          {/* Regulation */}
          <div className="mb-4 flex items-center w-250   ">
            <label className="font-medium w-50">Choose Regulation :</label>
            <select className="w-150  bg-blue-100 border border-gray-100 rounded-lg px-10 py-2">
              <option className="w-full">
                Choose a Regulation from drop down
              </option>
            </select>
          </div>
          <br />

          {/* Branch */}
          <div className="mb-4  flex items-center">
            <label className="w-50 font-medium">Choose Branch :</label>
            <select className="w-150 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2">
              <option className="w-full">Choose a Branch from drop down</option>
            </select>
          </div>
<br />
          {/* Semester */}
          <div className="mb-6 flex items-center">
            <label className="w-50 font-medium">Choose Semister :</label>
            <select className="w-150 bg-blue-100 border border-gray-300 rounded-lg px-4 py-2">
              <option className="w-full">Choose a Semister from drop down</option>
            </select>
          </div>
          <br />

          {/* Subjects */}
          <div className=" flex">
            <label className="font-semibold  mb-3">
              Subjects: <br /> <span className="font-normal">(Choose Priority Wise)</span>
            </label>
            <div className="flex justify-center  w-170 border-solid   gap-3">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <select
                  key={letter}
                  className=" bg-blue-100 border border-gray-300 rounded-lg "
                >
                  <option className="">{letter}. Choose</option>
                </select>
              ))}
            </div>
          </div>
<br />
          {/* Submit Button */}
          <div className="flex  justify-center">
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
