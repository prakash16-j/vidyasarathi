let Admin_Footer =()=>{
return(<>
 <footer className="flex justify-around w-full items-center border-2">
    <div>
        <a href="">Export Reault As Excel file</a>
    </div>
    <div className="flex gap-20 items-center">
       <div className="flex
       "> <h1>Last updated on :</h1> <span>27 Aug| 19:00</span></div>
       <div className="bg-amber-300 w-30 h-9 flex items-center justify-center rounded-2xl text-xl text-amber-50 font-medium">
         <button>Export</button>  
       </div>
    </div>
 </footer>
</>)
}
export default Admin_Footer