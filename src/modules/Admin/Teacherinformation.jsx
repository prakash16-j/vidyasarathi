import Admin_Navbar from "./Admin_Navbar"
import Contact from "./contact";
import SpecificSearch from "./specificsearch_and_contact";

let Teacherinformation=()=>{

    let obj=[
        {
            sn:1,
            code:"CS304",
            className:"CSE 4th Sec A"
        },
         {
            sn:2,
            code:"CS304",
            className:"CSE 4th Sec B"
        },
         {
            sn:3,
            code:"CS304",
            className:"IT 4th Sec A"
        },
        {
            sn:4,
            code:"CS304",
            className:"EE 4th Sec D"
        },
        {
             sn:5,
            code:"ME304",
            className:"Environmental Sciences & Green"
        }

    ]
    return <>
    <br />
   <section className=" ">
    <Admin_Navbar></Admin_Navbar>
  <div className="flex  items-center">
    <div className="h-[35rem] w-[50rem]">
    <br />
    <div className="flex flex-col items-center">
      <div className="w-[25rem] border border-solid"></div>
      <h1 className="font-bold text-center w-[25rem]">Student Information</h1>
      <div className="w-[25rem] border border-solid"></div>
    </div>
    <br />
    <div className="relative w-[50rem] flex justify-around h-[12rem]">
      <div>
        <h1>Name: Prem Kumar</h1>
        <h1>Roll: 200XXXX</h1>
        <h1>Subject: Compiler Design</h1>
      </div>
      <div>
        <img className="h-[5rem]" src="./boy.png" alt="" />
      </div>
    </div>

    <div className="overflow-x-auto w-[40rem] flex justify-center">
      <table className="table-auto border-collapse border border-gray-300 w-[30rem] rounded-[20px] text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300">S.N</th>
            <th className="border border-gray-300">Code</th>
            <th className="border border-gray-300">Class Name</th>
          </tr>
        </thead>
        <tbody>
          {obj.map((e, index) => {
            const { sn, code, className } = e;
            return (
              <tr key={index}>
                <td className="border border-gray-300">{sn}</td>
                <td className="border border-gray-300">{code}</td>
                <td className="border border-gray-300">{className}</td>
              </tr>
            );
          })}
          <tr>
            <td className="border-black px-4 py-2"></td>
            <td className="border-black px-4 py-2"></td>
            <td className="border-black px-4 py-2"></td>
          </tr>
          <tr className="font-semibold">
            <td className="px-4 py-2" colSpan={2}>
              Total Classes
            </td>
            <td className="px-4 py-2">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="bg-white  h-[30rem] flex flex-col gap-4  w-[20rem] justify-center items-center">
    <SpecificSearch  />
    <Contact />
  </div>
  </div>
</section>

    </>
}
export default Teacherinformation