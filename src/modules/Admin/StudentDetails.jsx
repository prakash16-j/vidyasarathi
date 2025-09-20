import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
  // Use a single state object to manage all form fields
  const [student, setStudent] = useState({
    name: 'PREM KUMAR',
    course: 'B.Tech',
    batch: '2020-24',
    branch: 'CSE',
    roll: '200XXXX',
    phone: '+91 XXXXXXXXXX',
    email: 'XXXXXXXXXXXXXX',
    address: 'Village, Block, Lakhisarai, Bihar 811315',
  });

  // Handle changes to any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the 'student' data to a server
    console.log('Form submitted:', student);
    alert('Request for edit submitted!');
  };

  return (
    <div className="flex items-center justify-center rounded-2xl h-110 bg-white drop-shadow-2xl">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm h-100">
        {/* Profile Image Section */}
        <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">
              <img
                src="./student profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form element wraps all editable fields */}
        <form onSubmit={handleSubmit}>
          {/* Name Section - Converted to Input */}
          <div className="text-center mt-16 px-4">
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="text-xl font-bold text-gray-800 uppercase text-center w-full bg-transparent border-none focus:outline-none"
            />
            <hr className="my-4 border-gray-300 w-80 mx-auto" />
          </div>

          {/* Course Details Section - Converted to Inputs */}
          <div className="px-4 py-2 text-gray-700 text-sm">
            <p className="mb-1">
              <span className="font-semibold">Course:</span>
              <input
                type="text"
                name="course"
                value={student.course}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <p className="mb-1">
              <span className="font-semibold">Batch:</span>
              <input
                type="text"
                name="batch"
                value={student.batch}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <p className="mb-1">
              <span className="font-semibold">Branch:</span>
              <input
                type="text"
                name="branch"
                value={student.branch}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <p className="mb-1">
              <span className="font-semibold">Roll:</span>
              <input
                type="text"
                name="roll"
                value={student.roll}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <hr className="my-4 border-gray-300 w-80 mx-auto" />
          </div>

          {/* Contact Details Section - Converted to Inputs */}
          <div className="px-4 py-2 text-gray-700 text-sm">
            <p className="mb-1">
              <span className="font-semibold">Phone:</span>
              <input
                type="text"
                name="phone"
                value={student.phone}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <p className="mb-1">
              <span className="font-semibold">Email:</span>
              <input
                type="text"
                name="email"
                value={student.email}
                onChange={handleChange}
                className="ml-2 bg-transparent border-none focus:outline-none"
              />
            </p>
            <hr className="my-4 border-gray-300 w-80 mx-auto" />
          </div>

          {/* Address Section - Converted to Input */}
          <div className="px-4 py-2 text-gray-700 text-sm">
            <p className="mb-1">
              <span className="font-semibold">Address:</span>
              <br />
              <input
                type="text"
                name="address"
                value={student.address}
                onChange={handleChange}
                className="pl-4 w-full bg-transparent border-none focus:outline-none"
              />
            </p>
            <hr className="my-4 border-gray-300 w-80 mx-auto" />
          </div>
          <br />

          {/* Submit Button */}
          <div className="flex justify-center py-5">
            <button
              type="submit"
              className="w-40 flex items-center justify-center bg-yellow-500 text-white font-medium h-[3rem] rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Submit Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDetails;