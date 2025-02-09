import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import "../../App.css";
import { authContext } from "../../providers/authProvider";
import { useContext, useState } from "react";
import { Role } from "../../types/@types";
import { Menu } from "lucide-react";
const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mx-auto w-[100%]">
      <div
        className={`mt-2 flex w-[90%] justify-between content-center ${
          menuVisible ? "h-45" : "h-15"
        } p-4 text-white navbar rounded-2xl bg-gradient-to-r from-gray-900/85 to-gray-700/85 backdrop-blur-sm fixed inset-0 inset-x-auto`}
      >
        <div className="logo ">Logo</div>
        <div className="links hidden md:flex gap-5 ">
          <Link to="/">Home</Link>
          {user?.role === Role.doctor ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : null}
          {user?.role === Role.doctor ? (
            <Link to="/manage-appointments">Manage Appointment</Link>
          ) : null}

          <Link to="/create-appointment">Create Appointment</Link>
          <Link to="/view-appointment">View Appointments</Link>
        </div>

        <div
          className={`${
            menuVisible ? "flex" : "hidden"
          } flex-col mt-10 text-center gap-2`}
        >
          <Link to="/">Home</Link>
          {user?.role === Role.doctor ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : null}
          {user?.role === Role.doctor ? (
            <Link to="/manage-appointments">Manage Appointment</Link>
          ) : null}

          <Link to="/create-appointment">Create Appointment</Link>
          <Link to="/view-appointment">View Appointments</Link>
          <span></span>
        </div>
        <div className="log bg-gray-700 p-4 hidden md:flex items-center rounded-2xl ring-1 hover:ring-gray-400 hover:bg-gray-500 hover:text-gray-950 transition duration-200 cursor-pointer">
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link
              onClick={(e) => {
                e.preventDefault();
                logout();
                navigate("/");
              }}
              to="/"
            >
              Logout
            </Link>
          )}
        </div>
        <div
          onClick={() => {
            menuVisible ? setMenuVisible(false) : setMenuVisible(true);
          }}
          className="flex md:hidden"
        >
          {" "}
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
