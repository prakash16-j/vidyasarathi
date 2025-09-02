import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
let Admin_Navbar=()=>{

    return(<>
            <header className=" bg-white h-21 w-full flex justify-around items-center drop-shadow-2xl ">
             <div className="flex items-center justify-between  w-[40%]">
                   <div className="flex items-center  justify-around  w-[50%]">
                   <Link to="/admin/view"> <img src={logo} alt="" /></Link>
                <div className="text-[1rem] font-[300px]">
                     <h1>Admin Panel</h1>
                 <h1>Vidya Sarthi</h1>
                </div>
                </div>
                <div className="border-2 w-[200px] h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200">
                    <h1>Group Admin</h1>
                </div>
             </div>
                <div className="flex border-2 gap-[50px] justify-end h-[45px] w-[30%]">
                    <h1 className="text-[22px]">Hepl&Support</h1>
                    <button className="bg-amber-300 rounded-[10px] p-[10px] w-[150px]">Logout</button>
                </div>
            </header>
    
    </>)
}
export default Admin_Navbar