import React from 'react';
import { ChevronDown, X } from 'lucide-react';

const UploadModal2 = ({
  isOpen,
  onClose,
  onSubmit,
  eventType,
  setEventType,
  eventText,
  setEventText,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 px-4 pt-32"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 sm:p-12 w-full max-w-2xl mx-auto outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- CLOSE BUTTON --- */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* --- MODAL HEADER --- */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Complete your Upload:
          </h2>
        </div>

        {/* --- FORM CONTENT --- */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-center">
          <label className="col-span-12 sm:col-span-4 text-md font-medium text-gray-700 sm:text-right">
            Choose News/Event type:
          </label>
          <div className="relative col-span-12 sm:col-span-8">
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full p-4 pr-12 border border-slate-300 rounded-lg bg-slate-100 focus:ring-2 focus:ring-purple-500 outline-none appearance-none"
            >
              <option value="Announcement">Announcement</option>
              <option value="Event">Event</option>
              <option value="News">News</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <ChevronDown size={24} />
            </div>
          </div>

          <label className="col-span-12 sm:col-span-4 text-md font-medium text-gray-700 sm:text-right">
            Enter the text:
          </label>
          <div className="col-span-12 sm:col-span-8">
            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Describe the event......"
              className="w-full p-4 border border-slate-300 rounded-lg bg-slate-100 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* --- SUBMIT BUTTON --- */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onSubmit}
            className="px-12 py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all"
          >
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal2;
