let AddstudentR=()=>{
    return(<>
      <section className="flex flex-col items-center gap-3">
        <div className="flex  gap-5 w-[50%] items-end">
   <div className=" w-[270px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[290px]">

    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3 placeholder-zinc-950  "
      placeholder="  Enter Name"
    />
    
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950 shadow-inner "
      placeholder="  Enter ID"
    />
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Email"
    />
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Branch"
    />
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Year"
    />
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3  placeholder-zinc-950"
      placeholder="  Enter Password"
    />

    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[60px]  placeholder-emerald-50 ">
      Add
    </button>
    </div>
    

    <div className=" w-[250px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[260px] ">
    <h1>Remove Student:</h1>

    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3 placeholder:font-bold"
      placeholder="  Enter Roll Number"
    />
    
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-left bg-blue-100 px-3"
      placeholder="  Name (Auto)"
    />

    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[60px]">
      Remove
    </button>
    </div>
    </div>
    <div className="w-[190px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[100px] ">
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[130px]  placeholder-emerald-50 ">
      View
      studentList
    </button>
    </div>
  
  
</section>

    </>)
} 
export default AddstudentR