import React, { useState } from "react";
import UploadModal from "./UploadModal";   // PYQ
import UploadModal2 from "./UploadModal2"; // News & Events
import UploadModal3 from "./UploadModal3"; // Notes
import UploadModule from "./UploadModule"; // QB

const cardData = [
  { title: <>Upload <br /> PYQ</>, label: "PYQ" },
  { title: <>Upload <br /> Notes</>, label: "Notes" },
  { title: <>Upload <br /> QB</>, label: "QB" },
  { title: <>Upload <br /> News & Events</>, label: "Events" },
];

const UploadCards = () => {
  // --- Modal states ---
  const [isModalOpen, setIsModalOpen] = useState(false);      // PYQ
  const [isModal2Open, setIsModal2Open] = useState(false);    // News & Events
  const [isModal3Open, setIsModal3Open] = useState(false);    // Notes
  const [isModalQBOpen, setIsModalQBOpen] = useState(false);  // QB

  // --- PYQ Modal Data ---
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState({});

  // --- News & Events Modal Data ---
  const [eventType, setEventType] = useState("Announcement");
  const [eventText, setEventText] = useState("");

  // --- Notes Modal Data ---
  const [uploadOption, setUploadOption] = useState("local");

  const handleOpenModal = (label) => {
    if (label === "PYQ") setIsModalOpen(true);
    if (label === "Events") setIsModal2Open(true);
    if (label === "Notes") setIsModal3Open(true);
    if (label === "QB") setIsModalQBOpen(true);
  };

  const handleCloseModal = (label) => {
    if (label === "PYQ") setIsModalOpen(false);
    if (label === "Events") setIsModal2Open(false);
    if (label === "Notes") setIsModal3Open(false);
    if (label === "QB") setIsModalQBOpen(false);
  };

  const handleSubmitPYQ = () => { setIsModalOpen(false); };
  const handleSubmitEvent = () => { setIsModal2Open(false); };
  const handleSubmitNotes = () => { setIsModal3Open(false); };
  const handleSubmitQB = () => { setIsModalQBOpen(false); };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-72 h-44 rounded-xl drop-shadow-2xl bg-white overflow-hidden flex flex-col items-center cursor-pointer"
            onClick={() => handleOpenModal(card.label)}
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

      {/* PYQ Modal */}
      <UploadModal
        isOpen={isModalOpen}
        onClose={() => handleCloseModal("PYQ")}
        onSubmit={handleSubmitPYQ}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        selectedSubjects={selectedSubjects}
        handleSubjectChange={(i,v) => setSelectedSubjects({...selectedSubjects,[i]:v})}
        handleFileChange={(i,f) => console.log(i,f)}
      />

      {/* News & Events Modal */}
      <UploadModal2
        isOpen={isModal2Open}
        onClose={() => handleCloseModal("Events")}
        onSubmit={handleSubmitEvent}
        eventType={eventType}
        setEventType={setEventType}
        eventText={eventText}
        setEventText={setEventText}
      />

      {/* Notes Modal */}
      <UploadModal3
        isOpen={isModal3Open}
        onClose={() => handleCloseModal("Notes")}
        onSubmit={handleSubmitNotes}
        uploadOption={uploadOption}
        setUploadOption={setUploadOption}
      />

      {/* QB Modal */}
      {isModalQBOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 px-4 pt-32"
          onClick={() => handleCloseModal("QB")}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 sm:p-12 w-full max-w-xl mx-auto outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* --- CLOSE BUTTON --- */}
            <button
              onClick={() => handleCloseModal("QB")}
              className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            <UploadModule />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCards;
