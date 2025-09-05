import React, { useState } from "react";
import Modal from "react-modal";

// Required for accessibility
Modal.setAppElement("#root");

const cardData = [
  { title: (<>Upload <br />PYQ</>), label: "PYQ" },
  { title: (<>Upload <br />Notes</>), label: "Notes" },
  { title: (<>Upload <br />QB</>), label: "QB" },
  { title: (<>Upload <br /> News & Events</>), label: "Events" },
];

const UploadCards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // For subjects & concepts
  const [selectedSubjects, setSelectedSubjects] = useState(["", "", "", ""]);
  const [selectedConcepts, setSelectedConcepts] = useState(["", "", ""]);

  // For Events
  const [eventType, setEventType] = useState("");
  const [eventText, setEventText] = useState("");

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

  const openModal = (card) => {
    setActiveCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setActiveCard(null);
    setSelectedYear("");
    setSelectedSemester("");
    setSelectedFile(null);
    setSelectedSubjects(["", "", "", ""]);
    setSelectedConcepts(["", "", ""]);
    setEventType("");
    setEventText("");
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
    // 🔗 Add API call
    closeModal();
  };

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index] = value;
    setSelectedSubjects(updatedSubjects);
  };

  const handleConceptChange = (index, value) => {
    const updatedConcepts = [...selectedConcepts];
    updatedConcepts[index] = value;
    setSelectedConcepts(updatedConcepts);
  };

  const handlePYQSubmit = () => {
    if (!selectedSemester || selectedSubjects.some((subj) => subj === "")) {
      alert("Please select semester and all subject priorities!");
      return;
    }
    console.log("Uploading PYQ:", { selectedSemester, selectedSubjects });
    // 🔗 Add API call
    closeModal();
  };

  const handleNotesSubmit = () => {
    if (!selectedSemester || selectedSubjects.some((s) => s === "") || selectedConcepts.some((c) => c === "")) {
      alert("Please select semester, subjects, and concepts!");
      return;
    }
    console.log("Uploading Notes:", { selectedSemester, selectedSubjects, selectedConcepts });
    // 🔗 Add API call
    closeModal();
  };

  const handleQBSubmit = () => {
    if (!selectedSemester || selectedSubjects.some((s) => s === "") || selectedConcepts.some((c) => c === "")) {
      alert("Please select semester, subjects, and concepts!");
      return;
    }
    console.log("Uploading QB:", { selectedSemester, selectedSubjects, selectedConcepts });
    // 🔗 Add API call
    closeModal();
  };

  const handleEventSubmit = () => {
    if (!eventType || !eventText.trim()) {
      alert("Please enter event type and description!");
      return;
    }
    console.log("Uploading Event:", { eventType, eventText });
    // 🔗 Add API call
    closeModal();
  };

  return (
    <div className=" flex justify-center items-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {
        cardData.map((card, index) => (
          <div
            key={index}
            className="w-72 h-44 rounded-xl drop-shadow-2xl bg-white overflow-hidden flex flex-col items-center cursor-pointer"
            // className="w-72 h-68 rounded-xl drop-shadow-2xl bg-white overflow-hidden flex flex-col items-center cursor-pointer"
            onClick={() => openModal(card)}
          >
            <div className="flex-1 w-full flex justify-center items-center bg-[#dbeafe]">
              <h2 className="text-xl font-semibold text-blue-600 text-center">
                {card.title}
              </h2>
            </div>
            <div className="w-full bg-white py-2 flex justify-center">
              <span className="text-green-500 font-medium">{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Modal"
        className="bg-white rounded-xl shadow-xl p-6 w-300 h-150 mx-auto mt-10 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {activeCard && (
          <>
          
            <h2 className="text-xl font-bold bg-amber-400 text-blue-600 ">
              {`Upload ${activeCard.label} Here`}
            </h2>
             
            {/* PYQ */}
            {activeCard.label === "PYQ" ? (
              <div className=" flex flex-col items-center  gap-10 border-2 border-solid">
               <div className="flex  gap-5 mt-10 ">
                 <label className=" mb-2  text-gray-700 font-medium">
                  Choose Semester:
                </label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className=" mb-4 border w-150 h-10  border-gray-300 p-2 rounded bg-blue-100"
                >
                  <option value="">-- Choose Semester --</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="8">8th Semester (2024 - 25 Spring)</option>
                </select>
               </div>
            
               <div className="flex gap-5 ">
                 <label className="block  text-gray-700 font-medium">
                  Choose Subjects: <br /> (Priority Wise)
                </label>
                <div className="w-150 h-100  flex flex-col gap-5">
                  {["A", "B", "C", "D"].map((label, index) => (
                    <select
                      key={label}
                      value={selectedSubjects[index]}
                      onChange={(e) => handleSubjectChange(index, e.target.value)}
                      className="border border-gray-300 p-2  h-10 w-full rounded bg-blue-100"
                    >
                      <option value="">{`${label}. Choose`}</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  ))}
                </div>
               </div>

                <div className="flex justify-center border-2 border-solid">
                  <button
                    onClick={handlePYQSubmit}
                    className=" bg-yellow-400 text-white rounded hover:bg-yellow-500 font-semibold"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            ) : activeCard.label === "Notes" ? (
              <>
                {/* Notes Layout */}
                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Semester:
                </label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full mb-4 border border-gray-300 p-2 rounded bg-blue-100"
                >
                  <option value="">-- Choose Semester --</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="8">8th Semester (2024 - 25 Spring)</option>
                </select>

                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Subjects (Priority Wise):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {["A", "B", "C", "D"].map((label, index) => (
                    <select
                      key={label}
                      value={selectedSubjects[index]}
                      onChange={(e) => handleSubjectChange(index, e.target.value)}
                      className="border border-gray-300 p-2 rounded bg-blue-100"
                    >
                      <option value="">{`${label}. Choose`}</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  ))}
                </div>

                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Concept:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {["A", "B", "C"].map((label, index) => (
                    <select
                      key={label}
                      value={selectedConcepts[index]}
                      onChange={(e) => handleConceptChange(index, e.target.value)}
                      className="border border-gray-300 p-2 rounded bg-blue-100"
                    >
                      <option value="">{`${label}. Choose`}</option>
                      {conceptOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleNotesSubmit}
                    className="px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-semibold"
                  >
                    Submit Now
                  </button>
                </div>
              </>
            ) : activeCard.label === "QB" ? (
              <>
                {/* QB Layout */}
                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Semester:
                </label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full mb-4 border border-gray-300 p-2 rounded bg-blue-100"
                >
                  <option value="">-- Choose Semester --</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="7">7th Semester (2023 - 24 Autumn)</option>
                  <option value="8">8th Semester (2024 - 25 Spring)</option>
                </select>

                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Subjects (Priority Wise):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {["A", "B", "C", "D"].map((label, index) => (
                    <select
                      key={label}
                      value={selectedSubjects[index]}
                      onChange={(e) => handleSubjectChange(index, e.target.value)}
                      className="border border-gray-300 p-2 rounded bg-blue-100"
                    >
                      <option value="">{`${label}. Choose`}</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  ))}
                </div>

                <label className="block mb-2 text-gray-700 font-medium">
                  Choose Concept:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {["A", "B", "C"].map((label, index) => (
                    <select
                      key={label}
                      value={selectedConcepts[index]}
                      onChange={(e) => handleConceptChange(index, e.target.value)}
                      className="border border-gray-300 p-2 rounded bg-blue-100"
                    >
                      <option value="">{`${label}. Choose`}</option>
                      {conceptOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleQBSubmit}
                    className="px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-semibold"
                  >
                    Submit Now
                  </button>
                </div>
              </>
            ) : activeCard.label === "Events" ? (
              <>
                {/* Events Layout */}
                <label className="block mb-2 text-gray-700 font-medium">
                  Choose News/Event Type:
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full mb-4 border border-gray-300 p-2 rounded bg-blue-100"
                >
                  <option value="">-- Select --</option>
                  <option value="Announcement">Announcement</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Exam">Exam</option>
                </select>

                <label className="block mb-2 text-gray-700 font-medium">
                  Enter the text:
                </label>
                <textarea
                  value={eventText}
                  onChange={(e) => setEventText(e.target.value)}
                  placeholder="Describe the event..."
                  className="w-full mb-4 border border-gray-300 p-2 rounded bg-blue-100"
                />

                <div className="flex justify-center">
                  <button
                    onClick={handleEventSubmit}
                    className="px-6 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 font-semibold"
                  >
                    Submit Now
                  </button>
                </div>
              </>
            ) : null}
          </>
        )}
      </Modal>
    </div>
  );
};

export default UploadCards;
