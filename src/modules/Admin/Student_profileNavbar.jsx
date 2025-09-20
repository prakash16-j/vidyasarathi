import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
let Student_profilelNavbar = ()=>{
     return(<>
                <header className=" bg-white w-full flex justify-around items-center drop-shadow-2xl ">
                 <div className="flex items-center justify-between  w-[40%]">
                       <div className="flex items-center  justify-around  w-[50%]">
                        <img src={logo} alt="" />
                    <div className="text-[1.2rem] font-[300px]">
                         <h1>Admin Panel</h1>
                     <h1>Vidya Sarthi</h1>
                    </div>
                    </div>
                   
                 </div>
                    <div className="flex border-2 gap-[50px] justify-end h-[45px] w-[30%]">
                        <h1 className="text-[22px]">Hepl&Support</h1>
                       <NavLink to={"/"}>

                        <button className="bg-amber-400 text-white rounded-[30px] w-[100px] h-[30px]">Logout</button>
                       </NavLink>
                    </div>
                </header>
        
        </>)
}
export default Student_profilelNavbar