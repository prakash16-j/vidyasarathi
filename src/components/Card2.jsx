import React from "react";

const cardData = [
  { title: (<>Upload <br />PYQ</> ), label:'PYQ'},
  { title: (<>Upload  <br />Notes</>), label:'Notes'},
    // { title: (<>Upload Notes <br />Notes</>), label:'Notes'},
  { title: (<>Upload <br /> QB</>),label: "QB" },
  { title: (<>Upload<br /> News & Events</>), label: "Events" },
];

const UploadCards = () => {
  return (
    
    <div className=" min-h-screen  flex   border-solid justify-center items-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
        {cardData.map((card, index) => (
          <div key={index} className="w-72 h-44 drop-shadow-2xl  bg-[#dbeaf]  shadow-lg rounded-xl flex flex-col justify-between items-center border border-gray-200 overflow-hidden">
            {/* Top text */}
            <div className=" w-70 h-40  bg-[#D8E7F5]">
            <div className="mt-[50px]">
            <div className="flex-1 flex justify-center  h-35 rounded-[50px] items-center">
              <h2 className="text-xl font-semibold text-blue-600 text-center">
                {card.title}
              </h2>
            </div>
            {/* Bottom label */}
            <div className="w-full bg-white rounded-b-xl py-2 flex justify-center">
              <span className="text-green-500 font-medium">{card.label}</span>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default UploadCards;
