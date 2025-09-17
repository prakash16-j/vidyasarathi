import { useState } from "react"
import FacultyNavbar from "./FacultyNavbar"

let FacultyEditMaterial=()=>{

    let[data,setData]=useState({ material:""})

    let{material}=data
    let handlechange=(e)=>{
        let[name,value]=e.target
        setData({
            ...data,[name]:value
        })
        console.log(data);
        
    }

    return <>
    <FacultyNavbar></FacultyNavbar>
    <section className="h-125 ">
        <section className=" flex justify-center  items-center h-70">
            <h1 className=" h-55  flex flex-col gap-2 items-center justify-center drop-shadow-2xl rounded-2xl bg-[white] w-55">
                <h1 className="font-bold">Edit Material</h1>
                <input type="text " name="material" placeholder="  Enter Material Id" className=" font-semibold w-40 bg-blue-100 px-4 py-2 h-10 rounded-lg" value={material} onChange={handlechange} id="" />
                <button className="border-2 w-20 rounded-lg  text-white bg-[#F3B300]">Edit</button>
            </h1>
        </section>
        <div className=" flex justify-center items-center">
        <section className=" w-200 flex flex-col ">
            <h1 className="border-solid w-22 text-center font-semibold"> Upload Pdf</h1>
            <h2 className=" border-[red]  flex flex-col drop-shadow-2xl bg-[white] rounded  justify-center items-center">
        <main className="border-2 flex  items-center justify-center ml-20">
            <h2 className=" w-30"></h2>
        <h1 className="h-40 w-200 flex flex-col gap-3 justify-center  ">
           
            <h1 className="font-semibold">Complete your Upload:</h1>
            <h1>Upload Documnet: <input type="file" className=" font-semibold w-130  text-center  bg-blue-100 px-4 py-2 h-8 rounded-lg"   name="" id=""  /></h1>
             <h1 className=" w-115 text-center"><button className="border-2 w-40 text-white bg-[#F3B300] rounded font-semibold"> Upload Changes</button></h1>
        </h1>
        </main>
        </h2>
       </section>
       </div>

    </section>

    
    </>
}
export default FacultyEditMaterial