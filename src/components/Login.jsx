import AdminLogin from "./AdminLogin"
import { Link } from "react-router-dom";

let Login =()=>{
    return(<>
    <section className="login-section flex justify-around">
         <div className="left-content">
      <h1>VIDYA SARTHI</h1>
      <h2>Welcome to Vidya Sarthi</h2>
      <p>
        A digital bridge between students and teachers, where teachers share 
        knowledge and students access notes with ease.
      </p>
    </div>

   
     
        <div className=" text-black landing-login  ">
      <h3 className="font-bold text-[20px]">Admin Login</h3>
      <hr className="w-1/2 text-left ml-0 mt-[10px]" />

      <p>Welcome onboard with us!</p>
    

      <form className="flex  flex-col gap-[5px]">
        <label htmlFor="email">Admin Email ID</label>
        <input className="bg-blue-100  h-[40px] font-bold rounded-[20px] placeholder:text-center" type="email" id="email" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input className="bg-blue-100 border-2 h-[40px] font-bold rounded-[20px] placeholder:text-center " type="password" id="password"  placeholder="Enter your password" />

        <div className="extra">
          <a href="#" className="hover:text-yellow-300">Forgot Password?</a>
        </div>

        <Link to="/admin/view">
        <button className="bg-amber-300 h-[40px] font-medium w-78 rounded-[20px]" type="submit">LogIn As Admin</button>
        </Link>
        <div className="flex items-center"><p className="">Are You student?</p><a href="" className="font-black">Login as student</a></div>
        <div><p className="inline">Are You Teacher?</p><a href="" className="font-black">Login as Teacher</a></div>
      </form>
    </div>
    
    </section>
    </>)
}
export default Login