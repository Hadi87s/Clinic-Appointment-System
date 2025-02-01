import { Link, Navigate, useNavigate } from "react-router-dom";
import "./navbar.css";
import "../../App.css";
import { authContext } from "../../providers/authProvider";
import { useContext } from "react";
import { Role } from "../../types/@types";
const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="links">
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
        <div className="log">
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
      </div>
    </div>
  );
};

export default Navbar;
