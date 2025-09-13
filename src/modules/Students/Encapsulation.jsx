let Encapsulation = () => {
  return (
    <>
      <div className="h-180 flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-[600px]  drop-shadow-2xl h-150 gap-20 text-center flex flex-col justify-center">
          {/* Heading */}
          <div>
            <div className="bg-blue-100 text-blue-700 font-semibold py-2 px-6 border-2 rounded-md inline-block mb-6 text-lg gap-1 w-[350px]"
            style={{marginTop:"20px"}}>
              Encapsulation
            </div>

            {/* Description */}
            <p className="text-gray-700 w-150 text-lg mb-6" 
            style={{marginTop:"10px"}}>
              Encapsulation is the process of wrapping data (variables/fields) and
              methods (functions) that operate on that data into a single unit
              (class). It is also about restricting direct access to some of an
              object’s components and only exposing controlled access through getters
              and setters.
            </p>

            {/* Image */}
            <section className="flex justify-center w-full"
            style={{marginTop:"50px"}}>
            <img
              src="./ean.png"
              alt="Encapsulation in Java"
              className="mx-auto mb-6 rounded-lg shadow-md w-[60%]"
            />
            </section>
          </div>

          {/* Buttons */}
          <div>
            <div className="flex justify-center gap-8 mb-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition w-[116px]">
                Watch Tutorial
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition w-[116px]">
                Download Pdf
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between text-gray-500 text-sm">
              <span className="cursor-pointer hover:underline">&lt;&lt; Prev. Page</span>
              <span className="cursor-pointer hover:underline">Next Page &gt;&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Encapsulation;
