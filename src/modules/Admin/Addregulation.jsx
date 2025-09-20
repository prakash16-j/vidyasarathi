import AddRegulation_V from "./AddRegulation_V"
import Admin_Navbar from "./Admin_Navbar"
import Quickaction from "./Quick actions"

let Addregulation=()=>{

    return <>

    <section className=" mt-[150px]  h-150">
      {/* <div className="h-[7rem] ">
    <Admin_Navbar title="Add Regulation"></Admin_Navbar>
    </div>  */}
    <div className="h-[20rem] flex  justify-center ">
    <Quickaction></Quickaction>
    </div>
    <div>
     <AddRegulation_V></AddRegulation_V>
    </div>

    </section>
    
    
    </>
}
export default Addregulation