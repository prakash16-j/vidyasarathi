// import React from 'react';
// import { Link } from 'react-router-dom';



// const StudentDetails = () => {

//   return (

//     <div className="flex items-center justify-center rounded-2xl h-110 bg-white drop-shadow-2xl ">

//       <div className="bg-white rounded-lg shadow-lg  w-full max-w-sm h-100">

//         {/* Profile Image Section */}

//         <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">

//           <div className="absolute inset-0 flex items-center justify-center">

//             <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">

//               {/* This is where the actual image would go */}

//               <img

//                 src="./student profile.png" 

//                 alt="Profile"

//                 className="w-full h-full object-cover"

//               />

//             </div>

//           </div>

//         </div>



//         {/* Name Section */}

//         <div className="text-center mt-16 px-4 justify-self-center-safe">

//           <h2 className="text-xl font-bold text-gray-800 uppercase">PREM KUMAR</h2>

//           <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

//         </div>



//         {/* Course Details Section */}

//         <div className="px-4 py-2 text-gray-700 text-sm justify-self-center-safe">

//           <p className="mb-1"><span className="font-semibold">Course:</span> B.Tech</p>

//           <p className="mb-1"><span className="font-semibold">Batch:</span> 2020-24</p>

//           <p className="mb-1"><span className="font-semibold">Branch:</span> CSE</p>

//           <p className="mb-1"><span className="font-semibold">Roll:</span> 200XXXX</p>

//           <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

//         </div>



//         {/* Contact Details Section */}

//         <div className="px-4 py-2 text-gray-700 text-sm justify-center">

//           <p className="mb-1"><span className="font-semibold">Phone:</span> +91 XXXXXXXXXX</p>

//           <p className="mb-1"><span className="font-semibold">Email:</span> XXXXXXXXXXXXXX</p>
//           <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />
//         </div>



//         {/* Address Section */}

//         <div className="px-4 py-2 text-gray-700 text-sm justify-self-center-safe">

//           <p className="mb-1"><span className="font-semibold">Address:</span></p>

//           <p className="pl-4">Village, Block, Lakhisarai</p>

//           <p className="pl-4">Bihar 811315</p>

//           <hr className="my-4 border-gray-300 w-80 justify-self-center-safe" />

//         </div>
//        <br />


//         {/* Request Edit Button */}

//         {/* Request Edit Button */}
// <div className="flex justify-center py-5">
//  <Link to="/updatefacultyprofile">
//   <button className="w-40 flex items-center justify-center bg-yellow-500 text-white font-medium h-[3rem] rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200">
//     Request Edit
//   </button>
//  </Link>
// </div>

//       </div>

//     </div>

//   );

// };



// export default StudentDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        
        {/* Profile Image Section */}
        <div className="relative h-32 sm:h-36 lg:h-40 bg-gradient-to-r from-blue-400 to-indigo-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-white overflow-hidden">
              <img
                src="./student profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name Section */}
        <div className="text-center mt-16 sm:mt-20 px-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 uppercase">
            PREM KUMAR
          </h2>
          <hr className="my-4 border-gray-300 w-3/4 mx-auto" />
        </div>

        {/* Course Details Section */}
        <div className="px-4 py-2 text-gray-700 text-sm sm:text-base">
          <p className="mb-1"><span className="font-semibold">Course:</span> B.Tech</p>
          <p className="mb-1"><span className="font-semibold">Batch:</span> 2020-24</p>
          <p className="mb-1"><span className="font-semibold">Branch:</span> CSE</p>
          <p className="mb-1"><span className="font-semibold">Roll:</span> 200XXXX</p>
          <hr className="my-4 border-gray-300 w-3/4 mx-auto" />
        </div>

        {/* Contact Details Section */}
        <div className="px-4 py-2 text-gray-700 text-sm sm:text-base">
          <p className="mb-1"><span className="font-semibold">Phone:</span> +91 XXXXXXXXXX</p>
          <p className="mb-1"><span className="font-semibold">Email:</span> XXXXXXXXXXXXXX</p>
          <hr className="my-4 border-gray-300 w-3/4 mx-auto" />
        </div>

        {/* Address Section */}
        <div className="px-4 py-2 text-gray-700 text-sm sm:text-base">
          <p className="mb-1"><span className="font-semibold">Address:</span></p>
          <p className="pl-4">Village, Block, Lakhisarai</p>
          <p className="pl-4">Bihar 811315</p>
          <hr className="my-4 border-gray-300 w-3/4 mx-auto" />
        </div>

        {/* Request Edit Button */}
        <div className="flex justify-center py-5">
          <Link to="/updatefacultyprofile">
            <button className="w-40 sm:w-48 md:w-52 flex items-center justify-center bg-yellow-500 text-white font-medium h-12 sm:h-14 rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200">
              Request Edit
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default StudentDetails;
