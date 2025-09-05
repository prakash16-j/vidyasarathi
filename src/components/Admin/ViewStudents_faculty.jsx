import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"

let ViewStudents_faculty=()=>{

    return <>
     <section className=" flex flex-col justify-around gap-10 bg-gray-50 items-center  ">
    <div className="w-full mt-10">
        <Admin_Navbar/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] h-[20rem] border-amber-200">
        <Quickaction/>
    </div>
    </section>
     <div className="flex flex-col items-center justify-self-center-safe h-[110vh]  gap-1.5 shadow-lg w-full  bg-gray-100 m-1.5">
    <br />  
    <div className=" w-full h-full ">
        
        <div className="flex items-center justify-center w-full h-full gap-20">

           <div className=" w-80 shadow-lg bg-white  drop-shadow-2xl rounded-[12px] flex border-solid flex-col   items-center h-[22rem]">
           <br /> <div className="flex justify-start  w-60  h-7 ">
              <h1 className=" text-4xs text-[20px] font-bold  text-center w-43 ">Search Student:</h1>
              </div>
<br />
              <div className="flex   w-60 flex-col gap-6">
           <input
             type="text"
             className="h-[45px] w-[200px]  rounded-[12px] placeholder-black bg-blue-100 shadow-lg  drop-shadow-2xl  "
             placeholder="   Enter Roll Number"
           />
            <input
             type="text"
             className="h-[45px] w-[200px]  rounded-[12px] text-left placeholder-gray-400 bg-blue-100 px-3 shadow-lg  drop-shadow-2xl "
             placeholder="   Name(Auto)"
           />
           <div className=" flex w-50 justify-center">
           <button className="bg-yellow-500 font-bold  rounded-lg flex items-center justify-center text-white w-[150px] h-[40px]">
             Search
           </button>
           </div>
           <div className=" flex w-50  justify-center">
           <button className="bg-yellow-500 font-bold  rounded-lg flex items-center justify-center text-white w-[150px] h-[40px]">
             View List
           </button>
           </div>
        </div>
        </div>

        {/* Remove Faculty */}
          <div className=" w-80 shadow-lg bg-white  drop-shadow-2xl rounded-[12px] flex border-solid flex-col   items-center h-[22rem]">
           <br /> <div className="flex justify-start  w-60  h-7 ">
              <h1 className=" text-4xs text-[20px] font-bold  text-center w-43 ">Search Teachers:</h1>
              </div>
<br />
              <div className="flex   w-60 flex-col gap-6">
           <input
             type="text"
             className="h-[45px] w-[200px]  rounded-[12px] placeholder-black bg-blue-100 shadow-lg  drop-shadow-2xl  "
             placeholder="   Enter Roll Number"
           />
            <input
             type="text"
             className="h-[45px] w-[200px]  rounded-[12px] text-left placeholder-gray-400 bg-blue-100 px-3 shadow-lg  drop-shadow-2xl "
             placeholder="   Name(Auto)"
           />
           <div className=" flex w-50 justify-center">
           <button className="bg-yellow-500   rounded-lg flex items-center justify-center font-bold text-white w-[150px] h-[40px]">
             Search
           </button>
           </div>
           <div className=" flex w-50  justify-center">
           <button className="bg-yellow-500   rounded-lg flex items-center justify-center font-bold text-white w-[150px] h-[40px]">
             View List
           </button>
           </div>
        </div>
        </div>
      
        </div>
        {/* Add Faculty */}
      </div>
      <br />
    
    </div>
    
    </>
}
export default ViewStudents_faculty