let AdminLogin=()=>{
    return(<> 
  <section className="mainhead">
    <div className="left-content">
      <h1>VIDYA SARTHI</h1>
      <h2>Welcome to Vidya Sarthi</h2>
      <p>
        A digital bridge between students and teachers, where teachers share 
        knowledge and students access notes with ease.
      </p>
    </div>
    </section>
    
  <section className="mainheading">
    
     
<aside className="admin-login">
   
    <div className="login-box ">
      <h3 className="font-bold text-[20px]">Admin Login</h3>
      <hr class="w-1/2 text-left ml-0 mt-[10px]" />

      <p>Welcome onboard with us!</p>
    

      <form className="flex  flex-col gap-[5px]">
        <label htmlFor="email">Admin Email ID</label>
        <input className="bg-blue-200  h-[40px] rounded-[20px] " type="email" id="email" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input className="bg-blue-200 border-2 h-[40px] rounded-[20px] " type="password" id="password" placeholder="Enter your password" />

        <div className="extra">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="bg-amber-300 h-[40px] rounded-[20px]" type="submit">LogIn As Admin</button>
        <div><p className="inline">Are You student?</p><a href="" className="font-black">Login as student</a></div>
        <div><p className="inline">Are You Teacher?</p><a href="" className="font-black">Login as Teacher</a></div>
      </form>
    </div>
    </aside>
 </section>

    </>)
}
export default AdminLogin