
import StudentTable from "./StudentTable"

let Admin_teacherSection =()=>{
    return(
<<<<<<< HEAD
       <section>
=======
       <section className="">
>>>>>>> 34341a3748fc675f7840dbc9d9eba4f5ff8bced5
        {/* start code from here */}
      <div className="container1">
      <div className="card1">
        {/* Header */}
        <div className="header1">
          <h2 className="header2">Search for teacher:</h2>
          <label className="radio-label1">
            <input type="radio" name="master" className="radio1"/>
            Master List
          </label>
        </div>
import React from 'react';
// Importing icons from popular icon libraries via react-icons
import { FaDollarSign, FaFolder, FaUserFriends, FaFileUpload } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';



const ActionButton = ({ icon, text, notificationCount }) => {
  return (
    <button className="relative flex flex-col items-center justify-center p-6 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {/* Notification Badge: Only shows if notificationCount is a truthy value */}
      {notificationCount && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full">
          {notificationCount}
        </span>
      )}
      
      {/* Icon Container */}
      <div className="mb-4 bg-yellow-400 p-4 rounded-lg">
        {icon}
      </div>
      
      {/* Text Label */}
      <span className="text-center font-semibold text-blue-900">{text}</span>
    </button>
  );
};
const Admin_teacherSection= () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Main Content Area */}
      <main className="p-4 sm:p-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <ActionButton
                icon={<FaDollarSign size={28} className="text-white" />}
                text="Add Faculty/ Remove Faculty"
              />
              <ActionButton
                icon={<FaFolder size={28} className="text-white" />}
                text="Add Student/ Remove Student"
              />
              <ActionButton
                icon={<FaUserFriends size={28} className="text-white" />}
                text="View Faculty & Student"
                notificationCount={99}
              />
              <ActionButton
                icon={<FaFileUpload size={28} className="text-white" />}
                text="Add Regulations"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    <div>
      <StudentTable/>
    </div>
  );
};

export default Admin_teacherSection;