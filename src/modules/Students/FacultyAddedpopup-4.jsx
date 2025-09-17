import React from "react";

const FacultyRemovepopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Overlay
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      {/* Popup Box */}
      <div className="bg-white shadow-lg rounded-xl w-[320px] p-6 text-center relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✖
        </button>

        {/* Content */}
        <div className="flex flex-col justify-center items-center h-full mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-8">
            Faculty Removed Successfully
          </h2>

          <button
            onClick={onClose}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-8 rounded-md shadow-md transition-all"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyRemovepopup;
