import Quickaction from "../../../../vidyasarathi/src/components/Admin/Quick actions"
import Admin_Navbar from "./Admin_Navbar"
// import Quickaction from "./Quick actions"

let StudentProfile_adminview=()=>{
let obj=[{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},{
sn:"1.",
code:"CS304",
coursename:"Compiler Design",
L:"3",
T:"0",
P:"0",
C:"3",
Type:"Compulsory"
},
]
let obj1=[{
    Type:"Recurring Fee",
    sn:"1",
    for:"Tuition Fee",
    Amount:"$90,000"
},
{
    Type:"Recurring Fee",
    sn:"1",
    for:"Tuition Fee",
    Amount:"$90,000"
}]

    return <>
    
   <section className=" flex flex-col justify-around gap-10 bg-gray-50 items-center  ">
    <div className="w-full mt-10">
        <Admin_Navbar/>
    </div>
    <div className="top-[150px] border-solid mt-[200px] h-[20rem] border-amber-200">
        <Quickaction  />
    </div>
    </section>
    <main className=" border-solid h-250 w-310 flex  justify-center gap-10">
    
    <div className=" w-180  bg-white rounded-2xl flex justify-around items-center drop-shadow-2xl">
        <section className=" w-160  h-245">
 <div className="flex flex-col items-center">
      <div className="w-[25rem] border border-solid"></div>
      <h1 className="font-bold text-center w-[25rem]">Student Information : 2024-25 (Autumn)</h1>
      <div className="w-[25rem] border border-solid"></div>
    </div>
    <br />
    <div className="flex justify-between h-[12rem]">
      <div>
        <h1>Name: Prem Kumar</h1>
        <h1>Program: B.Tech</h1>
        <h1>Branch: CSE</h1>
        <h1>Subject: Compiler Design</h1>
        <h1>Type: Regular</h1>
      </div>
      <div>
      <div className=" flex w-70 justify-around">
        <div className="">
            <h1>Roll: 200XXXX</h1>
            <h1>Batch: 2021-25</h1>
            <h1>Semester: V</h1>
            <h1>Active Backlog: 0</h1>
        </div>
        <img className="h-[6rem]" src="./boy.png" alt="" />
        </div>
      </div>
    </div>
    <div>
          <div className="overflow-x-auto  h-180  flex flex-col justify-center">
      <table className="table-auto border-collapse border border-gray-300 w-[38rem] rounded-[20px] text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300">S.N</th>
            <th className="border border-gray-300">Code</th>
            <th className="border border-gray-300">Course Name</th>
            <th className="border border-gray-300">L</th>
            <th className="border border-gray-300">T</th>
            <th className="border border-gray-300">P</th>
            <th className="border border-gray-300">C</th>
            <th className="border border-gray-300">Type</th>
          </tr>
        </thead>
        <tbody>
          {obj.map((e, index) => {
            const {sn,code,coursename,L,P,T,C,Type} = e;
            return (
              <tr key={index}>
                <td className="border border-gray-300">{sn}</td>
                <td className="border border-gray-300">{code}</td>
                <td className="border border-gray-300">{coursename}</td>
                <td className="border border-gray-300">{L}</td>
                <td className="border border-gray-300">{P}</td>
                <td className="border border-gray-300">{T}</td>
                <td className="border border-gray-300">{C}</td>
                <td className="border border-gray-300">{Type}</td>
              </tr>
            );
          })}
          <tr>
            <td className="border-black px-4 py-2"></td>
            <td className="border-black px-4 py-2"></td>
            <td className="border-black px-4 py-2"></td>
          </tr>
          <tr className="font-semibold">
            <td className="px-4 py-2" colSpan={4}>
             Total Credits
            </td>
            <td className="px-4 py-2">25</td>
          </tr>
        </tbody>
      </table><br />
       <div className="overflow-x-auto flex w-152  justify-start">
  <table className="table-auto border-collapse border border-gray-300 w-157 rounded-lg text-center">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">Type</th>
        <th className="border border-gray-300 px-4 py-2">S.N</th>
        <th className="border border-gray-300 px-4 py-2">For</th>
        <th className="border border-gray-300 px-4 py-2">Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* Recurring Fee */}
      <tr>
        <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
          Recurring Fee
        </td>
        <td className="border border-gray-300 px-4 py-2">1.</td>
        <td className="border border-gray-300 px-4 py-2">Tuition Fee</td>
        <td className="border border-gray-300 px-4 py-2">₹ 90,000.00</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">2.</td>
        <td className="border border-gray-300 px-4 py-2">Other Institute Fee</td>
        <td className="border border-gray-300 px-4 py-2">₹ 11,250.00</td>
      </tr>

      {/* One Time Fee */}
      <tr>
        <td className="border border-gray-300 px-4 py-2" rowSpan={2}>
          One Time Fee
        </td>
        <td className="border border-gray-300 px-4 py-2">3.</td>
        <td className="border border-gray-300 px-4 py-2">
          Admission Fee/Convocation Fee
        </td>
        <td className="border border-gray-300 px-4 py-2">N/A</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">4.</td>
        <td className="border border-gray-300 px-4 py-2">Fine</td>
        <td className="border border-gray-300 px-4 py-2">0.00</td>
      </tr>

      {/* Total */}
      <tr className="font-semibold bg-gray-100">
        <td
          className="border border-gray-300 px-4 py-2 text-center"
          colSpan={3}
        >
          Total
        </td>
        <td className="border border-gray-300 px-4 py-2">₹ 1,01,250.00</td>
      </tr>
    </tbody>
  </table>
</div><br />
<div className=" w-152 h-40 flex  ">
    <div className=" h-40 w-10 flex flex-col gap-20 w-[38rem]">
        Registration Status: Complete ✔️
         <div> Signature of Faculty Advisor</div>
    </div>
   
    <div>
       
    </div>
    <div className=" h-40 w-10 text-right flex justify-end gap-10 w-[38rem]">
        Payment Status: Verified ✔️ <br /><br /><br /><br />
        Signature of F/I Academic UG/PG
    </div>
    
    
</div>
    </div>
    </div>
        </section>
    </div>
        <div className=" rounded-xl bg-white h-100  drop-shadow-2xl w-70">
            <div className="flex justify-center items-center font-semibold   h-30 "><h1>Contact:</h1></div>
            <div className="font-bold flex w-50 font-semibold  justify-start">
Phone: <br />
+91 94XXXXXXX
</div><br />
<div className="flex justify-center">
<hr className="w-60" />
</div><br /><br />
 <div className="font-bold flex w-50  font-semibold justify-center">
Email: <br />
premXXXXXXXXXXXXXX
</div>

        </div>

    </main>

    </>
}
export default StudentProfile_adminview