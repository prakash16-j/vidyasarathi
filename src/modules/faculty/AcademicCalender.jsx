import React from "react";
import FacultyNavbar from "./FacultyNavbar";

const semSubjects = [
  { sn: 1, code: "MEC701", title: "Automation in Manufacturing", lec: 3, tut: 0, prac: 0, credits: 3 },
  { sn: 2, code: "PEC-III", title: "", lec: 3, tut: 0, prac: 0, credits: 3 },
  { sn: 3, code: "PEC-IV", title: "", lec: 3, tut: 0, prac: 0, credits: 3 },
  { sn: 4, code: "OEC III", title: "", lec: 3, tut: 0, prac: 0, credits: 3 },
  { sn: 5, code: "OEC IV", title: "", lec: 3, tut: 0, prac: 0, credits: 3 },
  { sn: 6, code: "ME701P", title: "Lab VII (RAC)", lec: 0, tut: 0, prac: 2, credits: 1 },
  { sn: 7, code: "ME702D", title: "Project-I", lec: 0, tut: 0, prac: 4, credits: 2 },
  { sn: 8, code: "ME703I", title: "Internship Assessment", lec: 0, tut: 0, prac: 2, credits: 2 },
];

const profElectiveIII = [
  { code: "MEP702", title: "Refrigeration and Air Conditioning" },
  { code: "MEP703", title: "Cryogenics" },
  { code: "MEP704", title: "Gas Dynamics" },
];

const profElectiveIV = [
  { code: "MEP705", title: "Power Plant Engineering" },
  { code: "MEP706", title: "Finite Element Analysis" },
  { code: "MEP707", title: "Tool Design" },
];

const openElectiveIII = [
  { code: "MEO708", title: "Mechanical Vibrations" },
  { code: "MEO709", title: "Convective Heat Transfer" },
  { code: "MEO710", title: "Micro and Nano Manufacturing" },
  { code: "MEO711", title: "Energy Systems and Management" },
  { code: "MEO712", title: "Condition Monitoring" },
];

const openElectiveIV = [
  { code: "MEO713", title: "Rapid Prototyping" },
  { code: "MEO714", title: "Industrial Automation" },
  { code: "MEO715", title: "Technology Management" },
  { code: "MEO716", title: "Computer Aided Manufacturing" },
  { code: "MEO717", title: "Maintenance Engineering & Management" },
];

const AcademicCalender = () => {
  return <>
    <FacultyNavbar></FacultyNavbar>
    <section className=" w-300 h-170">
    <div className="p-6 space-y-8 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-center">
        Semester - VII <br /> Branch: Mechanical Engineering
      </h2>

      {/* Main Subject Table */}
      <div className="w-full md:w-4/5 flex justify-center">
        <table className="table-auto border-2 border-black border-solid border-collapse text-center w-full">
            <tr className="bg-gray-200 font-semibold">
              <th className="border-2 border-black px-4 py-2">S.N.</th>
              <th className="border-2 border-black px-4 py-2">Code</th>
              <th className="border-2 border-black px-4 py-2">Course Title</th>
              <th className="border-2 border-black px-4 py-2">Lecture</th>
              <th className="border-2 border-black px-4 py-2">Tutorial</th>
              <th className="border-2 border-black px-4 py-2">Practical</th>
              <th className="border-2 border-black px-4 py-2">Credits</th>
            </tr>
            {
            semSubjects.map((sub) => (
              <tr key={sub.sn}>
                <td className="border-2 border-black px-2 py-1">{sub.sn}</td>
                <td className="border-2 border-black px-2 py-1">{sub.code}</td>
                <td className="border-2 border-black px-2 py-1 text-left">{sub.title}</td>
                <td className="border-2 border-black px-2 py-1">{sub.lec}</td>
                <td className="border-2 border-black px-2 py-1">{sub.tut}</td>
                <td className="border-2 border-black px-2 py-1">{sub.prac}</td>
                <td className="border-2 border-black px-2 py-1">{sub.credits}</td>
              </tr>
            ))
            }
            <tr className="font-bold bg-gray-100">
              <td colSpan="6" className="border-2 border-black text-right pr-2">Total credits</td>
              <td className="border-2 border-black">20</td>
            </tr>
          
        </table>
      </div>
<br />
      {/* Professional Electives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-4/5">
        <table className="table-auto border-2 border-black border-solid border-collapse w-full text-left">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              <th className="border-2 border-black px-2 py-1">Code</th>
              <th className="border-2 border-black px-2 py-1">Professional Elective-III (Any one)</th>
            </tr>
          </thead>
          <tbody>
            {profElectiveIII.map((elec) => (
              <tr key={elec.code}>
                <td className="border-2 border-black px-2 py-1">{elec.code}</td>
                <td className="border-2 border-black px-2 py-1">{elec.title}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto border-2 border-black border-solid border-collapse w-full text-center">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              <th className="border-2 border-black px-2 py-1">Code</th>
              <th className="border-2 border-black px-2 py-1">Professional Elective-IV (Any one)</th>
            </tr>
          </thead>
          <tbody>
            {profElectiveIV.map((elec) => (
              <tr key={elec.code}>
                <td className="border-2 border-black px-2 py-1">{elec.code}</td>
                <td className="border-2 border-black px-2 py-1">{elec.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<br />
      {/* Open Electives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-4/5">
        <table className="table-auto border-2 border-black border-solid border-collapse w-full text-left">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              <th className="border-2 border-black px-2 py-1">Code</th>
              <th className="border-2 border-black px-2 py-1">Open Elective-III (Any one)</th>
            </tr>
          </thead>
          <tbody>
            {openElectiveIII.map((elec) => (
              <tr key={elec.code}>
                <td className="border-2 border-black px-2 py-1">{elec.code}</td>
                <td className="border-2 border-black px-2 py-1">{elec.title}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto border-2 border-black border-solid border-collapse w-full text-left">
          <thead>
            <tr className="bg-gray-200 font-semibold">
              <th className="border-2 border-black px-2 py-1">Code</th>
              <th className="border-2 border-black px-2 py-1">Open Elective-IV (Any one)</th>
            </tr>
          </thead>
          <tbody>
            {openElectiveIV.map((elec) => (
              <tr key={elec.code}>
                <td className="border-2 border-black px-2 py-1">{elec.code}</td>
                <td className="border-2 border-black px-2 py-1">{elec.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
  </>
};

export default AcademicCalender;
