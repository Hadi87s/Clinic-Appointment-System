import { IUser, Role } from "../../types/@types";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  user: IUser | null;
  menuVisible: boolean;
  logout: () => void;
}

const SmallScreensNavbar = (props: IProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        props.menuVisible ? "flex" : "hidden"
      } flex-col mt-10 text-center gap-2`}
    >
      <span className="flex justify-center items-center text-white">
        {props?.user?.fullName.split(" ")[0] ?? ""} {"!"}
      </span>
      <Link to="/">Home</Link>
      {props.user?.role === Role.doctor ? (
        <Link to="/dashboard">Dashboard</Link>
      ) : null}
      {props.user?.role === Role.doctor ? (
        <Link to="/manage-appointments">Manage</Link>
      ) : null}

      <Link to="/create-appointment">Book Now</Link>
      <Link to="/view-appointment">View Appointments</Link>
      <div
        className={`font-[500] bg-blue-100 text-blue-900 p-1 block lg:hidden items-center rounded-2xl ring-1
     hover:ring-blue-400 hover:bg-blue-700 hover:text-blue-100 transition duration-200 
     cursor-pointer`}
      >
        {!props.user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link
            onClick={(e) => {
              e.preventDefault();
              props.logout();
              navigate("/");
            }}
            to="/"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default SmallScreensNavbar;
