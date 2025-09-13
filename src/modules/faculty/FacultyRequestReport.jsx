import FacultyNavbar from "./FacultyNavbar"
import { TiTick } from "react-icons/ti";

let FacultyRequestReport = () => {
  let obj = [
    {
      SN: 1,
      Req: "CS304",
      Module: "ME304",
      Comment: "Info is wrong",
      complete: <TiTick />
    },
    {
      SN: 2,
      Req: "CS304",
      Module: "ME304",
      Comment: "Info is wrong",
      complete: <TiTick />
    },
    {
      SN: 3,
      Req: "CS304",
      Module: "ME304",
      Comment: "Info is wrong",
      complete: <TiTick />
    },
    {
      SN: 4,
      Req: "CS304",
      Module: "ME304",
      Comment: "Info is wrong",
      complete: <TiTick />
    },
    {
      SN: 5,
      Req: "CS304",
      Module: "ME304",
      Comment: "Info is wrong",
      complete: <TiTick />
    },
    {
      SN: 6,
      Req: "",
      Module: "",
      Comment: "",
      complete: <TiTick />
    }
  ];

  return (
    <>
      <FacultyNavbar />

      <section className="border-solid flex items-center justify-center text-center h-100 p-6">
        {/* Wrapper with border radius */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <table className="border w-180 h-70 text-center border-collapse">
            {/* Header Row */}
            <tr className="bg-gray-200">
              <td className="border border-gray-400 px-4 py-2 font-semibold">S.N</td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">Request Code</td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">Module Code</td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">Comment</td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">Complete</td>
            </tr>

            {/* Data Rows */}
            {obj.map((data) => {
              let { SN, Req, Module, Comment, complete } = data;
              return (
                <tr key={SN}>
                  <td className="border border-gray-400 px-4 py-2">{SN}</td>
                  <td className="border border-gray-400 px-4 py-2">{Req}</td>
                  <td className="border border-gray-400 px-4 py-2">{Module}</td>
                  <td className="border border-gray-400 px-4 py-2">{Comment}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className="flex items-center justify-center">
                      <h1 className="bg-[#FF9900] text-white w-5 h-5 rounded-full flex items-center justify-center">
                        {complete}
                      </h1>
                    </div>
                  </td>
                </tr>
              );
            })}

            {/* Footer Row */}
            <tr className="bg-gray-100 font-semibold">
              <td colSpan={2} className="border border-gray-400 px-4 py-2">
                Total
              </td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2">6</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default FacultyRequestReport;
