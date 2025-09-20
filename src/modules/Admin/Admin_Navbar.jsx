import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

let Admin_Navbar = ({ title }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 px-6">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/admin/view">
            <img className="h-14 w-auto" src={logo} alt="Logo" />
          </Link>
          <div className="leading-tight">
            <h1 className="text-lg font-semibold">Admin Panel</h1>
            <h1 className="text-sm text-gray-600">Vidya Sarthi</h1>
          </div>
        </div>

        {/* Center Title Box */}
        <div className="border-2 w-[200px] h-10 flex justify-center items-center rounded-2xl font-medium bg-blue-200">
          <h1>{title}</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <h1 className="text-lg">Help & Support</h1>
          <Link to="logoutpopup">
            <button className="bg-amber-300 rounded-lg h-10 w-[150px] text-base">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Admin_Navbar
