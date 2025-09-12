import React from 'react';
// We will build a custom modal instead of using a library.
// Icons are imported from lucide-react for a clean look.
import { FolderUp, X, ChevronDown } from 'lucide-react';

// --- DUMMY DATA ---
// In a real-world application, this data would likely come from an API.
const subjectOptions = [
  'Maths',
  'Physics',
  'Computer Science 101',
  'Operating Systems',
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Machine Learning',
  'Database Management Systems',
  'Computer Networks',
  'Cyber Security',
];

/**
 * A functional React component for a file upload modal.
 * It is styled with Tailwind CSS to match the provided design.
 *
 * @param {object} props - The props for the component.
 * @param {boolean} props.isOpen - Controls if the modal is visible.
 * @param {Function} props.onClose - Function to call when the modal should be closed.
 * @param {Function} props.onSubmit - Function to call when the submit button is clicked.
 * @param {string} props.selectedSemester - The currently selected semester value.
 * @param {Function} props.setSelectedSemester - Function to update the selected semester.
 * @param {object} props.selectedSubjects - An object holding the selected subjects by index.
 * @param {Function} props.handleSubjectChange - Function to handle subject dropdown changes.
 * @param {Function} props.handleFileChange - Function to handle file input changes.
 */
const UploadModal = ({
  isOpen,
  onClose,
  onSubmit,
  selectedSemester,
  setSelectedSemester,
  selectedSubjects,
  handleSubjectChange,
  handleFileChange,
}) => {
  // If the modal is not set to be open, we render nothing.
  if (!isOpen) {
    return null;
  }

  return (
    // Modal Overlay: Covers the screen and closes the modal on click.
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center  items-start z-50 px-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      {/* Modal Content: The main dialog box. Clicks inside here are stopped from closing the modal. */}
      <div
        className="relative bg-white rounded-2xl h-100 shadow-2xl p-8 sm:p-12 w-full max-w-4xl mx-auto outline-none transform transition-all animate-fade-in-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- MODAL HEADER --- */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Complete your Upload:
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors sm:static"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>


        {/* --- FORM CONTENT --- */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
          {/* --- SEMESTER SELECTION --- */}
          <label className="col-span-12 sm:col-span-3 text-md font-medium text-gray-700 sm:text-right sm:pt-5">
            Choose Semester:
          </label>
          <div className="relative col-span-12 sm:col-span-9">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full h-10 p-5 pr-12 border-none rounded-lg bg-slate-100 focus:ring-2 focus:ring-purple-500 outline-none appearance-none"
            >
              <option value="">7th Semester (2023 - 24 Autumn)</option>
              <option value="8">8th Semester (2024 - 25 Spring)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <ChevronDown size={24} />
            </div>
          </div>

          {/* --- SUBJECTS & FILE UPLOAD --- */}
          <label className="col-span-12 sm:col-span-3 text-md font-medium text-gray-700 sm:text-right sm:pt-5">
            Choose Subjects:
            <span className="block text-gray-500 font-normal mt-1">(Choose Priority Wise)</span>
          </label>
          <div className="col-span-12 sm:col-span-9 flex flex-col gap-5 space-y-6 col-gap-10 ">
            {['A', 'B', 'C', 'D'].map((label, index) => (
              <div key={index} className="grid grid-cols-12 gap-x-4">
                {/* Subject Dropdown */}
                <div className="relative col-span-10">
                  <select
                    value={selectedSubjects[index] || ''}
                    onChange={(e) => handleSubjectChange(index, e.target.value)}
                    className="w-full h-10 p-5 pr-12 border-none rounded-lg bg-slate-100 focus:ring-2 focus:ring-purple-500 outline-none appearance-none"
                  >
                    <option value="">{`${label}. Choose`}</option>
                    {subjectOptions.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <ChevronDown size={24} />
                  </div>
                </div>

                {/* File Upload Button */}
                <div className="col-span-2">
                    <input
                      type="file"
                      id={`file-upload-${index}`}
                      className="hidden"
                      onChange={(e) => handleFileChange(index, e.target.files[0])}
                    />
                    <label
                      htmlFor={`file-upload-${index}`}
                      className="cursor-pointer w-full h-full flex items-center justify-center p-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg shadow-sm transition-transform transform hover:scale-105"
                    >
                      <FolderUp size={24} />
                    </label>
                </div>
              </div>
            ))}
          </div>
        </div>
<br />
        {/* --- SUBMIT BUTTON --- */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onSubmit}
            className="px-12 py-4 bg-yellow-500 text-gray-900  text-white-500 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all transform hover:scale-105"
          >
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;

