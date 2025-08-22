import curveBg from"../assets/curveBg.jpg";
let Landing =()=>{
    return(<>
   
    <section >
        {/* write your html here add css in index.css */}
        <div className="landing-container">
            {/* Navbar */}
        <nav className="navbar">
            <div>Mrs. College Guide</div>
         <ul className="nav-links">
            <li><a href="#">Universities</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            
         </ul>

         <div className="nav-buttons"></div>
         <button className="login-btn">LOGIN</button>
         <button className="signup-btn">SIGN UP</button>
        </nav>
        </div>
        {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>
            Find Your <span className="highlight">Future</span> Today!
          </h1>
          <p className="subtitle">
            The Ultimate Guide to Universities Worldwide
          </p>
        </div>
      </section>

      {/* Info Section */}
      <div className="info-section">
        <p>
          Explore your options and make informed decisions with our comprehensive guide to 
          universities around the world. Discover top-ranked institutions, explore diverse programs, 
          and connect with like-minded individuals to build your academic future. With easy-to-use 
          </p>
        </div>
        
    </section>
     
    </>)
}
export default Landing