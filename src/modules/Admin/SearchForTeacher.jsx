// import { IoMdDownload } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";

// let SearchForTeacher=()=>{
// let obj=[{
//     s1:(<>Select Course <IoMdDownload /></>)
// },
// {
//     s1:(<>Select Batch <IoMdDownload /></>)
// },
// {
//     s1:(<>Select Branch <IoMdDownload /></>)
// },
// ]
// let obj1=[{
//     s2:"Enter Roll no"
// },
// {
// s2:"Name"
// },
// {

// },

// ]

//     return <>
   
//   <div>
          
//     <div className=" w-300  left-40 h-110 bg-white rounded-xl drop-shadow-2xl ">
//         <div className="flex justify-between w-285 left-10 absolute   leading-12 ">
//          <h1 className="border-2 border-black h-10 font-bold ">
//             Search for Teachers
//             </h1>
//             <h1>
//              <input  type="radio" /><label htmlFor="" className="font-bold"> Master List</label>
//             </h1>     
// </div>
// <br /><br />
// <hr  /><br />

//  <h1 className="font-bold absolute left-10">Search by List:</h1><br /><br />
//  <div className="flex justify-evenly gap-10">
//  {
//     obj.map((e)=>{
//         let{s1,}=e
//         return<>
//         <select className="select rounded-full text-sm" >
//             <option  className="bg-[#D8E7F5]" value="">{s1}</option>
//             <option value=""></option>
//             <option value=""></option>
//         </select>
       
//         </>
        
        
//     })
//    }
//     <h1 className="border-2 bg-[#F3B300] flex rounded-[100px] font-bold items-center justify-center text-[white] w-40">Search <span><CiSearch /></span></h1>
//    </div>
//   <br />  <h1 className="font-bold absolute left-10">Specific Search :</h1><br /><br />
//  <div className="flex justify-evenly gap-10">
//  {
//     obj1.map((e)=>{
//         let{s2}=e
//         return<>
//         <select className="select rounded-full text-sm w-[13rem]" >
//             <option  className="bg-[#D8E7F5]" value="">{s2}</option>
//             <option value=""></option>
//             <option value=""></option>
//         </select>
       
//         </>
        
        
//     })
//    }
// <Link to='/teacher-table'>       <h1 className="border-2 bg-[#F3B300] h-10 flex rounded-[100px] float-right font-bold items-center justify-center text-[white] w-40">Apply</h1>
// </Link>
//    </div>
//    <br />
   
 
//     </div>
    
//   </div>
   

//     </>
// }
// export default SearchForTeacher


import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchForTeacher = () => {
  // State for the controlled form inputs
  const [searchByList, setSearchByList] = useState({
    course: "",
    batch: "",
    branch: "",
  });

  const [specificSearch, setSpecificSearch] = useState({
    rollNo: "",
    name: "",
  });

  const [masterList, setMasterList] = useState(false);

  // Helper arrays (from original code)
  let obj = [
    { s1: (<>Select Course <IoMdDownload /></>), name: "course" },
    { s1: (<>Select Batch <IoMdDownload /></>), name: "batch" },
    { s1: (<>Select Branch <IoMdDownload /></>), name: "branch" },
  ];
  let obj1 = [
    { s2: "Enter Roll no", name: "rollNo" },
    { s2: "Name", name: "name" },
  ];

  const handleListChange = (e) => {
    setSearchByList({ ...searchByList, [e.target.name]: e.target.value });
  };

  const handleSpecificChange = (e) => {
    setSpecificSearch({ ...specificSearch, [e.target.name]: e.target.value });
  };

  const handleSearchClick = () => {
    console.log("Searching by list:", searchByList);
  };

  const handleApplyClick = async(e) => {
      e.preventDefault();
    let applyy1=await fetch("http://localhost:8080/VidyaSarthi/studentList",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(searchByList)
    })
    console.log("Applying specific search:", specificSearch);
    console.log(applyy1);
    
  };

  return (
    <div className="flex justify-center p-4 sm:p-8">
        <div className=" w-300  left-40 h-110 bg-white rounded-xl drop-shadow-2xl ">
           <br /> <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="border-2 border-black px-4 py-2 font-bold rounded-lg w-full text-center sm:w-auto">
            Search for Teachers
          </h1>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              checked={masterList}
              onChange={() => setMasterList(!masterList)}
              className="form-radio h-4 w-4 text-orange-500 transition duration-150 ease-in-out"
            />
            <label htmlFor="" className="font-bold">Master List</label>
          </div>
        </div>
<br />
        <hr className="border-gray-300 my-4" />
<br />
        <h1 className="font-bold mb-4">Search by List:</h1><br />
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 sm:gap-10">
          {obj.map((e, index) => (
            <select
              key={index}
              className="select rounded-full text-sm w-full sm:w-[13rem] p-2 bg-[#D8E7F5] border border-gray-300"
              name={e.name}
              value={searchByList[e.name]}
              onChange={handleListChange}
            >
              <option value="">{e.s1}</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          ))}
          <button
            className="bg-[#F3B300] flex items-center justify-center rounded-[100px] font-bold text-white px-6 py-2 w-full sm:w-40 h-10 hover:bg-amber-500 transition-colors"
            onClick={handleSearchClick}
          >
            Search <span><CiSearch className="ml-2" /></span>
          </button>
        </div>

        <br />
        <h1 className="font-bold mb-4">Specific Search:</h1><br />
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4 sm:gap-10">
          {obj1.map((e, index) => (
            <input
              key={index}
              type="text"
              className="select rounded-full text-sm w-full sm:w-[13rem] p-2 bg-[#D8E7F5] border border-gray-300"
              name={e.name}
              placeholder={e.s2}
              value={specificSearch[e.name]}
              onChange={handleSpecificChange}
            />
          ))}
          <Link to='/teacher-table' className="w-full sm:w-auto">
            <button
              className="bg-[#F3B300] flex items-center justify-center rounded-[100px] font-bold  text-white px-6 py-2 w-full sm:w-40 h-10 hover:bg-amber-500 transition-colors"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchForTeacher;
