import { IoMdDownload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

let SearchForTeacher=()=>{
let obj=[{
    s1:(<>Select Course <IoMdDownload /></>)
},
{
    s1:(<>Select Batch <IoMdDownload /></>)
},
{
    s1:(<>Select Branch <IoMdDownload /></>)
},
]
let obj1=[{
    s2:"Enter Roll no"
},
{
s2:"Name"
},
{

},

]

    return <>
   
  <div>
          
    <div className=" w-300  left-40 h-110 bg-white rounded-xl drop-shadow-2xl ">
        <div className="flex justify-between w-285 left-10 absolute   leading-12 ">
         <h1 className="border-2 border-black h-10 font-bold ">
            Search for Teachers
            </h1>
            <h1>
             <input  type="radio" /><label htmlFor="" className="font-bold"> Master List</label>
            </h1>     
</div>
<br /><br />
<hr  /><br />

 <h1 className="font-bold absolute left-10">Search by List:</h1><br /><br />
 <div className="flex justify-evenly gap-10">
 {
    obj.map((e)=>{
        let{s1,}=e
        return<>
        <select className="select rounded-full text-sm" >
            <option  className="bg-[#D8E7F5]" value="">{s1}</option>
            <option value=""></option>
            <option value=""></option>
        </select>
       
        </>
        
        
    })
   }
    <h1 className="border-2 bg-[#F3B300] flex rounded-[100px] font-bold items-center justify-center text-[white] w-40">Search <span><CiSearch /></span></h1>
   </div>
  <br />  <h1 className="font-bold absolute left-10">Specific Search :</h1><br /><br />
 <div className="flex justify-evenly gap-10">
 {
    obj1.map((e)=>{
        let{s2}=e
        return<>
        <select className="select rounded-full text-sm w-[13rem]" >
            <option  className="bg-[#D8E7F5]" value="">{s2}</option>
            <option value=""></option>
            <option value=""></option>
        </select>
       
        </>
        
        
    })
   }
       <h1 className="border-2 bg-[#F3B300] flex rounded-[100px] float-right font-bold items-center justify-center text-[white] w-40">Apply</h1>

   </div>
   <br />
   
 
    </div>
    
  </div>
   

    </>
}
export default SearchForTeacher