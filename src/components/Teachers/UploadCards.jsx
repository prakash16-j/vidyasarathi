// UploadCards.jsx
import React, { useState } from "react";
import UploadModal from "./UploadModal";

const cardData = [
  { title: <>Upload <br /> PYQ</>, label: "PYQ" },
  { title: <>Upload <br /> Notes</>, label: "Notes" },
  { title: <>Upload <br /> QB</>, label: "QB" },
  { title: <>Upload <br /> News & Events</>, label: "Events" },
];

const UploadCards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState(["", "", "", ""]);
  const [subjectFiles, setSubjectFiles] = useState([null, null, null, null]);
  const [selectedConcepts, setSelectedConcepts] = useState(["", "", ""]);
  const [eventType, setEventType] = useState("");
  const [eventText, setEventText] = useState("");

  const openModal = (card) => {
    setActiveCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveCard(null);
    setSelectedSemester("");
    setSelectedSubjects(["", "", "", ""]);
    setSubjectFiles([null, null, null, null]);
    setSelectedConcepts(["", "", ""]);
    setEventType("");
    setEventText("");
  };

  const handleSubjectChange = (index, value) => {
    const updated = [...selectedSubjects];
    updated[index] = value;
    setSelectedSubjects(updated);
  };

  const handleSubjectFileChange = (index, file) => {
    const updated = [...subjectFiles];
    updated[index] = file;
    setSubjectFiles(updated);
  };

  const handleConceptChange = (index, value) => {
    const updated = [...selectedConcepts];
    updated[index] = value;
    setSelectedConcepts(updated);
  };

  const handleSubmit = () => {
    if (activeCard.label === "PYQ") {
      console.log("Submit PYQ", { selectedSemester, selectedSubjects, subjectFiles });
    } else if (activeCard.label === "Notes") {
      console.log("Submit Notes", { selectedSemester, selectedSubjects, subjectFiles, selectedConcepts });
    } else if (activeCard.label === "QB") {
      console.log("Submit QB", { selectedSemester, selectedSubjects, subjectFiles, selectedConcepts });
    } else if (activeCard.label === "Events") {
      console.log("Submit Event", { eventType, eventText });
    }
    closeModal();
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-72 h-44 rounded-xl drop-shadow-2xl bg-white overflow-hidden flex flex-col items-center cursor-pointer"
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

      {/* One global modal for all cards */}
      {activeCard && (
        <UploadModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          type={activeCard.label}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
          selectedSubjects={selectedSubjects}
          handleSubjectChange={handleSubjectChange}
          handleSubjectFileChange={handleSubjectFileChange}
          selectedConcepts={selectedConcepts}
          handleConceptChange={handleConceptChange}
          eventType={eventType}
          setEventType={setEventType}
          eventText={eventText}
          setEventText={setEventText}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default UploadCards;
