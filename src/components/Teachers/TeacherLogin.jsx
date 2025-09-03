import { Link } from "react-router-dom"

let TeacherLogin=()=>{
    return(<>    
  <section className="mainheading">
    
     
<aside className="admin-login">
   
    <div className="login-box ">
      <h3 className="font-bold text-[20px]">Teacher Login</h3>
      <hr className="w-1/2 text-left ml-0 mt-[10px]" />

      <p>Welcome onboard with us!</p>
    

      <form className="flex  flex-col gap-[5px]">
        <label htmlFor="email">Enter Email ID</label>
        <input className="bg-blue-200  h-[40px] rounded-[20px] " type="email" id="email" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input className="bg-blue-200 border-2 h-[40px] rounded-[20px] " type="password" id="password" placeholder="Enter your password" />

        <div className="extra">
          <a href="#">Forgot Password?</a>
        </div>

      <Link to='/teacher-profile'>
      
           <button className="bg-amber-300 h-[40px] rounded-[20px] w-[12rem] "  type="submit">LogIn</button>
      </Link>
      
        {/* <div><p className="inline">Are You student?</p><h1></h1></div> */}
        <Link to='/teacher-login'>  
        {/* <div><p className="inline">Are You Teacher?</p><h1>Login as Teacher</h1></div> */}
        </Link>
      </form>
    </div>
    </aside>
 </section>

    </>)
}
export default TeacherLogin