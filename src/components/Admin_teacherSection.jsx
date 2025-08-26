let Admin_teacherSection =()=>{
    return(
       <section>
        {/* start code from here */}
      <div className="container1">
      <div className="card1">
        {/* Header */}
        <div className="header1">
          <h2 className="header2">Search for teacher:</h2>
          <label className="radio-label1">
            <input type="radio" name="master" className="radio1"/>
            Master List
          </label>
        </div>

        <hr className="horizontal1" />

        {/* Search by list */}
         <div className="section1">
          <h3>Search by List:</h3>
          <div className="row1">
            <select>
              <option>Select Course</option>
            </select>
            <select>
              <option>Select Batch</option>
            </select>
            <select>
              <option>Select Branch</option>
            </select>
            <button className="btn1">Search</button>
          </div>
        </div>

         {/* Specific Search */}
        <div className="section2">
          <h3>Specific Search:</h3>
          <div className="row2">
            {/* <input type="text" placeholder="Enter Roll Number" /> */}
            <label className="input-label">Enter Roll Number</label>
            <input type="text" placeholder="Name (Auto)" />
            <button className="btn2">Apply</button>
          </div>
        </div>

        </div>
        </div>
      <div className="footer1">
      <span className="text1">Export Result as excel file.</span>
      <span className="last-updated">Last updated on: 19 August | 23:00</span>
      <button className="export-btn">Export</button>
    </div>
</section>

    )

}
export default Admin_teacherSection