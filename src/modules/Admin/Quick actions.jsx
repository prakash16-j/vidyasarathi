// import { LuCircleDollarSign } from "react-icons/lu";
// import { BsCardHeading } from "react-icons/bs";
// import { TbUserScan } from "react-icons/tb";
// import { LiaFileUploadSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";

// let Quickaction = () => {
//   let obj = [
//     {
//       icon: <LuCircleDollarSign />,
//       text: <>Add Faculty/<br />Remove Faculty</>,
//       link: "/faculty",
//     },
//     {
//       icon: <BsCardHeading />,
//       text: <>Add Student/<br />Remove Student</>,
//       link: "/student",
//     },
//     {
//       icon: <TbUserScan />,
//       text: <>View Faculty<br />& Student</>,
//       link: "/view",
//     },
//     {
//       icon: <LiaFileUploadSolid />,
//       text: <>Add Regulations</>,
//       link: "/regulations",
//     },
//   ];

//   return (
//     <section className="">
//       <div className="text-left">
//         <h2 className="text-xl font-bold mb-4">Quic Actions:</h2>

//         {/* ✅ Responsive Grid (1 → 2 → 4) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {obj.map((val, ind) => (
//             <Link
//               to={val.link}
//               key={ind}
//               className="bg-blue-100 rounded-xl p-6 flex flex-col items-center text-blue-800 font-semibold w-full shadow-md hover:shadow-lg transition"
//             >
//               <div className="bg-yellow-400 p-3 rounded-md mb-3 text-2xl">
//                 {val.icon}
//               </div>
//               <div className="text-center">{val.text}</div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Quickaction;
