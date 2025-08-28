let StudentTable2 =()=>{

    const students = [
  {
    RollNumber: "200XXXXXX",
    Name: "Prem Kr.",
    Course: "B.Tech",
    Batch: "2020-24",
    FeeStatus: "No due",
    Registration: "Provisional",
    Verification: "Pending",
    Details: "Open"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  },
  {
    RollNumber: "Roll Number",
    Name: "Name",
    Course: "Course",
    Batch: "Batch",
    FeeStatus: "Fee Status",
    Registration: "Registration",
    Verification: "Verification",
    Details: "Details"
  }
];

    return(<>
     <div className="w-full h-full rounded-2xl">
    
      <table className="  w-full h-full border-separate border-spacing-0.8">
        <thead className="">
          <tr className="bg-orange-400 text-white">
            <th className="p-2 text-left rounded-tl-xl">Roll Number</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Course</th>
            <th className="p-2 text-left">Batch</th>
            <th className="p-2 text-left">Fee Status</th>
            <th className="p-2 text-left">Registration</th>
            <th className="p-2 text-left">Verification</th>
            <th className="p-2 text-left rounded-tr-xl">Detail</th>
          </tr>
        </thead>
        <tbody>
           {students.map(({ RollNumber, Name, Course, Batch, FeeStatus, Registration, Verification, Details }, i) => (
        <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-blue-100"}>
          <td className="p-2 text-sm border">{RollNumber}</td>
          <td className="p-2 text-sm border">{Name}</td>
          <td className="p-2 text-sm border">{Course}</td>
          <td className="p-2 text-sm border">{Batch}</td>
          <td className="p-2 text-sm border">{FeeStatus}</td>
          <td className="p-2 text-sm border">{Registration}</td>
          <td className="p-2 text-sm border">{Verification}</td>
          <td className="p-2 text-sm border">{Details}</td>
        </tr>
      ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between px-3 py-2 text-black-600 text-sm font-medium">
        <span className="cursor-pointer">&lt;&lt; Prev. Page</span>
        <span className="cursor-pointer">Next Page &gt;&gt;</span>
      </div>
    </div>
    </>)
}
export default StudentTable2