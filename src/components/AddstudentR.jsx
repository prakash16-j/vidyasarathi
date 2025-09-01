let AddstudentR=()=>{
    return(<>
      <section className="flex flex-col items-center  gap-3">
        <div className="flex  gap-5 h-100 w-[50%] items-end">
   <div className=" w-70 shadow-lg bg-white border drop-shadow-2xl   rounded-[12px] flex flex-col justify-center gap-2 items-center h-90 ">

    <input
      type="text"
      className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3 placeholder-zinc-950  "
      placeholder="  Enter Name"
    />
    
    <input
      type="text"
      className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950 shadow-inner "
      placeholder="  Enter ID"
    />
    <input
      type="text"
      className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Email"
    />
    <input
      type="text"
      className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Branch"
    />
    <input
      type="text"
      className="h-[35px] w-[200px] shadow-lg drop-shadow-2xl  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Year"
    />
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Password"
    />
<div className=" w-48 flex items-center justify-start ">
    <button className="bg-yellow-500 text-white h-8 rounded-lg w-30   ">
      Add
    </button>
    </div>
    </div>
    

    <div className=" w-60  bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-center gap-3 items-center h-[260px] ">
      <div className=" h-50 w-40  justify-start items-center gap-3 flex flex-col">
    <h1 className="font-normal flex  w-30">Remove Student:</h1>
    <input type="text"
     className="h-8 w-40  rounded-[12px]  shadow-lg drop-shadow-2xl text-left bg-blue-100 px-3 placeholder:font-bold"
      placeholder="  Enter Roll Number"
    />
    
    <input
      type="text"
      className="h-8 w-40 showdow-2xl shadow-lg drop-shadow-2xl rounded-[12px] text-left bg-blue-100 px-3"
      placeholder="   Name (Auto)"
    />
<div className="w-38 flex items-center justify-start">
    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-30 h-7">
      Remove
    </button>
    </div>
    </div>
    </div>
    </div>
    <div className="w-[190px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[100px] ">
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[130px]  placeholder-emerald-50 ">
      View <br />
      StudentList
    </button>
    </div>
  
  
</section>

    </>)
} 
export default AddstudentR