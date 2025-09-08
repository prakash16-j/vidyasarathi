// UploadModal.jsx
import Modal from "react-modal";
import { Upload } from "lucide-react";

Modal.setAppElement("#root");

const subjectOptions = [
  "Maths",
  "Physics",
  "CS101",
  "Operating Systems",
  "Data Structures",
  "AI",
  "ML",
  "DBMS",
  "Networks",
  "Cyber Security",
];

const conceptOptions = ["Basics", "Advanced", "Case Study", "Problems"];

const UploadModal = ({
  isOpen,
  onClose,
  type,
  selectedSemester,
  setSelectedSemester,
  selectedSubjects,
  handleSubjectChange,
  handleSubjectFileChange,
  selectedConcepts,
  handleConceptChange,
  eventType,
  setEventType,
  eventText,
  setEventText,
  onSubmit,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Upload Modal"
      className="bg-white rounded-2xl shadow-xl p-6 w-[600px] h-auto mx-auto mt-10 outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-xl font-bold bg-amber-400 text-blue-600 p-2 rounded mb-4 text-center">
        {`Upload ${type} Here`}
      </h2>

      {/* Semester (for PYQ, Notes, QB) */}
      {(type === "PYQ" || type === "Notes" || type === "QB") && (
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Choose Semester:
          </label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full border-gray-300 p-2 rounded bg-blue-100"
          >
            <option value="">-- Choose Semester --</option>
            <option value="7">7th Semester (2023 - 24 Autumn)</option>
            <option value="8">8th Semester (2024 - 25 Spring)</option>
          </select>
        </div>
      )}

      {/* Subjects + File Upload (for PYQ, Notes, QB) */}
      {(type === "PYQ" || type === "Notes" || type === "QB") && (
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Choose Subjects (Priority Wise) + Upload:
          </label>
          <div className="flex flex-col gap-3">
            {["A", "B", "C", "D"].map((label, index) => (
              <div key={index} className="flex items-center gap-2">
                <select
                  value={selectedSubjects[index]}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                  className="border p-2 rounded bg-blue-100 flex-1"
                >
                  <option value="">{`${label}. Choose`}</option>
                  {subjectOptions.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                <input
                  type="file"
                  id={`upload-${type}-${index}`}
                  onChange={(e) =>
                    handleSubjectFileChange(index, e.target.files[0])
                  }
                  className="hidden"
                />
                <label
                  htmlFor={`upload-${type}-${index}`}
                  className="cursor-pointer p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
                >
                  <Upload size={18} />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Concepts (for Notes & QB) */}
      {(type === "Notes" || type === "QB") && (
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Choose Concept:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["A", "B", "C"].map((label, index) => (
              <select
                key={label}
                value={selectedConcepts[index]}
                onChange={(e) => handleConceptChange(index, e.target.value)}
                className="border p-2 rounded bg-blue-100"
              >
                <option value="">{`${label}. Choose`}</option>
                {conceptOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      )}

      {/* Events (special case) */}
      {type === "Events" && (
        <>
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">
              Choose News/Event Type:
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full border p-2 rounded bg-blue-100"
            >
              <option value="">-- Select --</option>
              <option value="Announcement">Announcement</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Exam">Exam</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">
              Enter the text:
            </label>
            <textarea
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Describe the event..."
              className="w-full border p-2 rounded bg-blue-100"
            />
          </div>
        </>
      )}

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-semibold"
        >
          Submit Now
        </button>
      </div>
    </Modal>
  );
};

export default UploadModal;
