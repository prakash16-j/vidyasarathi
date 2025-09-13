import React from "react";

let FacultyEditmaterialTable = () => {
 const rows = [
    { sn: 1, materialId: "CS304", subjectCode: "ME304", title: "Operating System", type: "Notes" },
    { sn: 2, materialId: "CS304", subjectCode: "ME304", title: "OP QB", type: "QB" },
    { sn: 3, materialId: "CS304", subjectCode: "ME304", title: "OP - PYQ", type: "PYQ" },
    { sn: 4, materialId: "CS304", subjectCode: "ME304", title: "Practice", type: "NOTES" },
  ];

  return (
       <div className=" flex justify-center items-start w-[35rem] h-[22rem] drop-shadow-2xl bg-[white] rounded-3xl "style={{paddingTop:"33px", marginLeft:"40px", marginTop:"30px"}}>
  <table className="w-[420px] border-collapse border border-black rounded-2xl">
    <thead>
      <tr>
        <th className="border-2 border-solid px-2 py-3">S.N</th>
        <th className="border-2 border-solid px-2 py-3">Material_ID</th>
        <th className="border-2 border-solid px-2 py-3">Subject_CODE</th>
        <th className="border-2 border-solid px-2 py-3">Title</th>
        <th className="border-2 border-solid px-2 py-3">TYPE</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((r) => (
        <tr key={r.sn}>
          <td className="border-2 border-solid px-3 py-3">{r.sn}.</td>
          <td className="border-2 border-solid px-2 py-3">{r.materialId}</td>
          <td className="border-2 border-solid px-2 py-3">{r.subjectCode}</td>
          <td className="border-2 border-solid px-2 py-3">{r.title}</td>
          <td className="border-2 border-solid px-2 py-3">{r.type}</td>
        </tr>
      ))}
      <tr>
        <td className="border-2 border-solid px-3 py-10">5.</td>
        <td className="border-2 border-solid" colSpan={3}></td>
        <td className="border-2 border-solid"></td>
      </tr>
      <tr>
        <td className="border-2 border-solid px-3 h-[4.5rem] py-10">6.</td>
        <td className="border-2 border-solid" colSpan={3}></td>
        <td className="border-2 border-solid"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td className="border-2 border-solid font-semibold px-4 py-3" colSpan={4}>
          Total
        </td>
        <td className="border-2 border-solid font-semibold text-center">5</td>
      </tr>
    </tfoot>
  </table>
</div>
  );
}
export default FacultyEditmaterialTable;
