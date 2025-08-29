import React, { useState } from "react";
import Modal from "react-modal";

const cardData = [
  { title: (<>Upload <br />PYQ</>), label: "PYQ" },
  { title: (<>Upload <br />Notes</>), label: "Notes" },
  { title: (<>Upload <br />QB</>), label: "QB" },
  { title: (<>Upload <br /> News & Events</>), label: "Events" },
];

// Required for accessibility
Modal.setAppElement("#root");

const UploadCards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  // State for dropdown selections
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const openModal = (card) => {
    setActiveCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setActiveCard(null);
    setSelectedYear("");
    setSelectedSemester("");
    setSelectedFile(null);
    setModalIsOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedYear || !selectedSemester || !selectedFile) {
      alert("Please select Year, Semester, and a File!");
      return;
    }

    console.log(
      `Uploading ${activeCard.label} for Year: ${selectedYear}, Semester: ${selectedSemester}, File: ${selectedFile.name}`
    );

    // 🔗 Add your API call / upload logic here

    closeModal();
  };

  return (
    <div className=" flex justify-center items-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-72 h-44 rounded-xl drop-shadow-2xl bg-white overflow-hidden flex flex-col items-center cursor-pointer"
            onClick={() => openModal(card)}
          >
            {/* Blue inner box */}
            <div className="flex-1 w-full flex justify-center items-center bg-[#dbeafe] ">
              <h2 className="text-xl font-semibold text-blue-600 text-center">
                {card.title}
              </h2>
            </div>

            {/* Bottom label */}
            <div className="w-full bg-white py-2 flex justify-center">
              <span className="text-green-500 font-medium">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Dynamic for all 4 cards) */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Modal"
        className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto mt-40 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {activeCard && (
          <>
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              {`Upload ${activeCard.label}`}
            </h2>

            {/* Year Dropdown */}
            <label className="block mb-2 text-gray-700">Select Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full mb-4 border border-gray-300 p-2 rounded"
            >
              <option value="">-- Choose Year --</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            {/* Semester Dropdown */}
            <label className="block mb-2 text-gray-700">Select Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full mb-4 border border-gray-300 p-2 rounded"
            >
              <option value="">-- Choose Semester --</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>

            {/* File Upload */}
            <label className="block mb-2 text-gray-700">Select File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 border border-gray-300 p-2 rounded w-full"
            />
            {selectedFile && (
              <p className="text-sm text-gray-600 mb-4">
                Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default UploadCards;
