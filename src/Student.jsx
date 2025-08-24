let Student=()=>{
    return(<>
    <section>
        {/* write your html here add css in index.css */}
        <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/Logo.png"
          alt="Logo"
          className="logo"
        />
        <h2 className="title">Student Section</h2>
        <span className="title">Vidya Sarthi</span>
      </div>

      <div className="navbar-right">
        <span className="support">Help & Support</span>
        <button className="logout-btn">Log out</button>
      </div>
    </nav>
    </section>
    </>)
}
export default Student