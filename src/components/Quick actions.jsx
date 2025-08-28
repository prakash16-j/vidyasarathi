
import { LuCircleDollarSign } from "react-icons/lu";

// import { FaEuroSign } from "react-icons/fa6";
import { BsCardHeading } from "react-icons/bs";
import { TbUserScan } from "react-icons/tb";
import { LiaFileUploadSolid } from "react-icons/lia";

let Quickaction=()=>{
let obj=[{
    icon:<LuCircleDollarSign />,
    img:"./image.png"
    
    // <FaEuroSign />, 
    ,
    text:(<>Add Faculty/ <br />
    Remove Faculty</>)

},
{
    icon:<BsCardHeading />,
    text:(<>Add Student/ <br />Remove Student</>)
},
{
    icon:<TbUserScan />,
    text:(<>View Faculty <br /> & Student</>)
},
{
    icon:<LiaFileUploadSolid />,
    text:"Add Regulations"
}
]
    return <>
    <div className="">
        <div className="  w-300   bg-white rounded-xl drop-shadow-2xl  h-64 ">
           <h1 className="  h-10  w-50  text-center font-bold ">
            Quick Actions:
            </h1>
            <br />
            <div className="flex  w-300  justify-evenly h-40">
            {
                obj.map((e)=>{
                    let{icon,text,img}=e
                    return <>
                    <div className=" bg-[#D8E7F5]  w-50 rounded-[10px] ">
                        {/* <img className="h-10 w-10" src={img} alt="" /> */}
                 <div className="  flex items-center justify-center h-18 ">
                    <div className="bg-[#F3B300] rounded-[10px] flex items-center justify-center w-11 h-11"> <h1 className="text-[white]  text-[25px]">{icon}</h1>
                 </div>  
                 </div>
                    <h1 className="border-2 bg-[blue] flex items-center justify-center text-[15px] text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 text-transparent bg-clip-text">{text}</h1>
                    </div>
                    </>
                })
            }
            </div>
            </div>

        
    </div>
    </>
}
export default Quickaction