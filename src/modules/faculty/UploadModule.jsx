import React from "react";

const UploadModule = ({ onClose }) => {
  return (
    <form>
      <div className="flex flex-col gap-10 justify-center items-center">
        <section className="w-200 flex flex-col">
          <div className="relative bg-white rounded-xl shadow-2xl p-8">
            {/* --- CLOSE BUTTON --- */}
            <button
              type="button"
              onClick={onClose} // <-- This closes the modal
              className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
            >
              ×
            </button>

            {/* --- MODAL HEADER --- */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              Complete your Upload:
            </h2>

            {/* --- Upload Document --- */}
            <div className="mb-4 flex items-center gap-4">
              <label className="font-medium w-40">Upload Document:</label>
              <select className="w-60 h-11 bg-blue-100 border border-gray-100 rounded-lg shadow-lg p-4">
                <option>Upload from Local</option>
                <option>Upload from Drive</option>
              </select>
            </div>

            {/* --- Submit Button --- */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-40 h-10 rounded-md"
              >
                Upload
              </button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default UploadModule;
