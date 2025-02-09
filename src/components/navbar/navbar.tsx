import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  return (
    <div className="flex justify-center mx-auto w-[100%]">
      <div
        className={`mt-2 flex w-[90%] justify-between content-center ${
          menuVisible ? "h-45" : "h-15"
        } p-4 z-10 text-blue-200 navbar rounded-2xl bg-gradient-to-r from-blue-900/85 to-blue-500/85
        backdrop-blur-[2px] fixed inset-0 inset-x-auto border-2 border-blue-600`}
      >
        <div className="logo ">Logo</div>
        <div className="links hidden md:flex gap-5 ">
          <Link
            className={`transition duration-150 hover:text-white ${
              location.pathname == "/" ? "border-b-2 rounded-b-[2px]" : ""
            }`}
            to="/"
          >
            Home
          </Link>
          {user?.role === Role.doctor ? (
            <Link
              className={`transition duration-150 hover:text-white ${
                location.pathname == "/dashboard"
                  ? "border-b-2 rounded-b-[2px]"
                  : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          ) : null}
          {user?.role === Role.doctor ? (
            <Link
              className={`transition duration-150 hover:text-white ${
                location.pathname == "/manage-appointments"
                  ? "border-b-2 rounded-b-[2px]"
                  : ""
              }`}
              to="/manage-appointments"
            >
              Manage Appointment
            </Link>
          ) : null}

          <Link
            className={`transition duration-150 hover:text-white ${
              location.pathname == "/create-appointment"
                ? "border-b-2 rounded-b-[2px]"
                : ""
            }`}
            to="/create-appointment"
          >
            Create Appointment
          </Link>
          <Link
            className={`transition duration-150 hover:text-white ${
              location.pathname == "/view-appointment"
                ? "border-b-2 rounded-b-[2px]"
                : ""
            }`}
            to="/view-appointment"
          >
            View Appointments
          </Link>
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
        <div className="font-[500] bg-blue-700 p-4 hidden md:flex items-center rounded-2xl ring-1 hover:ring-blue-400 hover:bg-blue-500 hover:text-blue-950 transition duration-200 cursor-pointer">
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
