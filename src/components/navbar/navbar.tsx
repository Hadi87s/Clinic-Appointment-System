import { Link } from "react-router-dom";
import "./navbar.css";
import "../../App.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/view-appointment">View Appointments</Link>
        </div>
        <div className="log">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
