import { Outlet, useLocation } from "react-router-dom";
import Quickaction from "../modules/Admin/Quick actions";
import Admin_Navbar from "../modules/Admin/Admin_Navbar";

const AdminLayout = () => {
  const location = useLocation();

  // Map routes to titles
  const routeTitles = {
    "/admin": "Global Admin",
    "/admin/add-faculty": "Add Faculty",
    "/admin/add-students": "Add Students",
    "/admin/admin-students": "View Faculty & Students",
    "/admin/add-regulation": "Add Regulation",
    "/admin/student-table": "Student Table",
  };

  const title = routeTitles[location.pathname] || "Admin Panel";

  return (
    <section className="flex flex-col justify-around gap-10 bg-gray-50 items-center">
      <div className="w-full mt-10">
        <Admin_Navbar title={title} />
      </div>

      {location.pathname === "/admin" && (
        <div className="top-[150px] border-solid mt-[200px] border-amber-200">
          <Quickaction />
        </div>
      )}

      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminLayout;
