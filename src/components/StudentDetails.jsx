import React from 'react';



const StudentDetails = () => {

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm h-100">

        {/* Profile Image Section */}

        <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">

              {/* This is where the actual image would go */}

              <img

                src="./student profile.png" 

                alt="Profile"

                className="w-full h-full object-cover"

              />

            </div>

          </div>

        </div>



        {/* Name Section */}

        <div className="text-center mt-16 px-4 justify-self-center-safe">

          <h2 className="text-xl font-bold text-gray-800 uppercase">PREM KUMAR</h2>

          <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

        </div>



        {/* Course Details Section */}

        <div className="px-4 py-2 text-gray-700 text-sm justify-self-center-safe">

          <p className="mb-1"><span className="font-semibold">Course:</span> B.Tech</p>

          <p className="mb-1"><span className="font-semibold">Batch:</span> 2020-24</p>

          <p className="mb-1"><span className="font-semibold">Branch:</span> CSE</p>

          <p className="mb-1"><span className="font-semibold">Roll:</span> 200XXXX</p>

          <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

        </div>



        {/* Contact Details Section */}

        <div className="px-4 py-2 text-gray-700 text-sm justify-self-center-safe">

          <p className="mb-1"><span className="font-semibold">Phone:</span> +91 XXXXXXXXXX</p>

          <p className="mb-1"><span className="font-semibold">Email:</span> XXXXXXXXXXXXXX</p>
          <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />
        </div>



        {/* Address Section */}

        <div className="px-4 py-2 text-gray-700 text-sm justify-self-center-safe">

          <p className="mb-1"><span className="font-semibold">Address:</span></p>

          <p className="pl-4">Village, Block, Lakhisarai</p>

          <p className="pl-4">Bihar 811315</p>

          <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

        </div>
       <br />


        {/* Request Edit Button */}

        <div className="p-4">

          <button className="w-1.5xs flex items-center  justify-self-center-safe bg-yellow-500 text-white font-medium py-2 px-4 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-200  mt-4 ">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />

            </svg>

            Request Edit

          </button>

        </div>

      </div>

    </div>

  );

};



export default StudentDetails;