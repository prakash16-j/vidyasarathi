// // import { Link } from "react-router-dom"
// // import logo from "../../assets/logo.png"
// // let FacultyNavbar=({title})=>{

// //     return <>
// //             <header className=" bg-white h-21 w-full flex justify-around items-center drop-shadow-2xl ">
// //              <div className="flex items-center justify-between  w-[40%]">
// //                    <div className="flex items-center  justify-around  w-[50%]">
// //                  <img className="h-18" src={logo} alt="" />
// //                 <div className="text-[1rem] font-[300px]">
// //                      <h1>Teacher Section</h1>
// //                  <h1>Vidya Sarthi</h1>
// //                 </div>
// //                 </div>
// //                 <div className="border-2 w-[200px] h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200">
// //                     <h1>{title}</h1>
// //                 </div>
// //              </div>
// //                 <div className="flex border-2 gap-[50px] justify-end h-[45px] w-[30%]">
// //                     <h1 className="text-[22px]">Help&Support</h1>
// //                     <button className="bg-amber-300 rounded-[10px] p-[10px] w-[150px]">Logout</button>
// //                 </div>
// //             </header>
            
// //     </>
// // }
// // export default FacultyNavbar
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

// let FacultyNavbar = ({ title }) => {
//   return (
//     <header className="bg-white h-21 w-full flex flex-col sm:flex-row justify-around items-center drop-shadow-2xl p-2 sm:p-0">
      
//       <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-[40%] gap-2 sm:gap-0">
//         <div className="flex flex-col sm:flex-row items-center justify-around w-full sm:w-[50%] gap-2 sm:gap-0">
//           <img className="h-18" src={logo} alt="" />
//           <div className="text-[1rem] font-[300px] text-center sm:text-left">
//             <h1>Teacher Section</h1>
//             <h1>Vidya Sarthi</h1>
//           </div>
//         </div>

//         <div className="border-2 w-full sm:w-[200px] h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200 mt-2 sm:mt-0">
//           <h1>{title}</h1>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row border-2 gap-2 sm:gap-[50px] justify-end h-[45px] w-full sm:w-[30%] mt-2 sm:mt-0 items-center">
//         <h1 className="text-[22px] text-center sm:text-right">Help&Support</h1>
//         <button className="bg-amber-300 rounded-[10px] p-[10px] w-full sm:w-[150px]">
//           Logout
//         </button>
//       </div>

//     </header>
//   );
// };

// export default FacultyNavbar;
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

let FacultyNavbar = ({ title }) => {
  return (
    <header className="bg-white w-full drop-shadow-2xl p-2 sm:p-4">

      {/* Container with responsive padding and max width */}
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center flex-wrap px-4 md:px-8">

        {/* Left Section: Logo + Titles */}
        <div className="flex flex-row items-center gap-2 sm:gap-4 flex-shrink-0">
          <img className="h-12 sm:h-18" src={logo} alt="Logo" />
          <div className="text-left">
            <h1 className="text-sm sm:text-base font-medium">Teacher Section</h1>
            <h1 className="text-sm sm:text-base font-light">Vidya Sarthi</h1>
          </div>
        </div>

        {/* Middle Section: Profile/Title */}
        <div className="border-2 h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200 px-4 sm:px-6 mx-2 flex-grow sm:flex-grow-0 text-center">
          <h1 className="text-sm sm:text-base">{title}</h1>
        </div>

        {/* Right Section: Help & Logout */}
        <div className="flex flex-row items-center gap-2 sm:gap-6 flex-shrink-0">
          <h1 className="text-sm sm:text-[22px] whitespace-nowrap">Help&Support</h1>
          <button className="bg-amber-300 rounded-[10px] px-4 py-2 sm:px-6 sm:py-2 whitespace-nowrap">
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default FacultyNavbar;
