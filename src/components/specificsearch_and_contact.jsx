

export default function SpecificSearch() {
  

 

  return (
   <section>
  <div className=" w-[250px] shadow-lg bg-white border drop-shadow-2xl rounded-[12px] flex flex-col justify-around items-center h-[260px]">
    <h1>Specific Search:</h1>

    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-center bg-blue-100 px-3 "
      placeholder="Enter Roll No"
    />
    
    <input
      type="text"
      className="h-[35px] w-[200px]  rounded-[12px] text-center bg-blue-100 px-3"
      placeholder="Name (Auto)"
    />

    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-[60px]">
      Apply
    </button>
  </div>
</section>

  );
}
