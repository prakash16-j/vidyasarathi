import React from "react";

const LogOutpopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // don’t render unless open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white shadow-md rounded-xl p-6 w-[300px] text-center h-[20rem] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <div className="mt-[80px]">
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900">
            Logout From Your Account
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mt-2 px-4 pb-4">
            Do you want to logout?
          </p>

          {/* Logout Button */}
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all w-[7rem]">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutpopup;
