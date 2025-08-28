let AdminLogin=()=>{
    return(<>
    <section>
        <body>
  <section className="mainhead">
    <div className="left-content">
      <h1>VIDYA SARTHI</h1>
      <h2>Welcome to Vidya Sarthi</h2>
      <p>
        A digital bridge between students and teachers, where teachers share 
        knowledge and students access notes with ease.
      </p>
    </div>

    <div className="login-box">
      <h3>Login</h3>
      <hr style="width:50%;text-align:left;margin-left:0;margin-top:10px;" color="black" />
      <p>Welcome onboard with us!</p>

      <form>
        <label htmlFor="email">Admin Email ID</label>
        <input className="new" type="email" id="email" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input className="new" type="password" id="password" placeholder="Enter your password" />

        <div className="extra">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="logbutton" type="submit">LogIn</button>
      </form>
    </div>
  </section>
</body>

    </section>
    </>)
}
export default AdminLogin