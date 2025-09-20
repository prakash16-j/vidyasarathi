import { FaCheck } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
let Studentcards=()=>{
    let data = [
        {
            logo : 10,
            heading :"uploaded module"
        },
        {
            logo : <FaCheck className="bg-orange-400  h-[3rem] w-[3rem] rounded-full text-white " />,
            heading :"Profile Status"
        },
        {
            logo : <FaCheckDouble className="bg-green-400 h-[3rem] w-[3rem] rounded-full text-white " />,
            heading :"Request/Report"
        },
        {
            logo : 10,
            heading :"Edit Material"
        },
    ]
    return(<>
             <section>
                <div className="flex bg-white drop-shadow-2xl mt-[10px] rounded-2xl w-[40rem]">
                    {
                        data.map((e)=>{
                            let{logo,heading}=e
                            return(
                                <>
                                <div className="flex flex-col justify-around items-center w-[12rem] h-[10rem] ">
                                    <div className=" h-[5rem] w-[5rem] rounded-full flex items-center justify-center bg-blue-300 p-[5px]">
                                        {logo}
                                    </div>
                                    <div className="text-xl">
                                        <h1>{heading}</h1>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
             </section>
    </>)
}
export default Studentcards