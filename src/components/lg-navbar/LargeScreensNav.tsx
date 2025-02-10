import { Link, useLocation } from "react-router-dom";
import { IUser, Role } from "../../types/@types";
import LgNavLink from "../navbar/lgNavLink";

interface IProps {
  user: IUser | null;
}
const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/create-appointment",
    title: "Create Appointment",
  },
  {
    path: "/view-appointment",
    title: "View Appointments",
  },
];

const LargeScreensNav = (props: IProps) => {
  const location = useLocation();
  return (
    <div className="hidden lg:flex gap-5 ">
      {links.map((link) => (
        <LgNavLink path={link.path}>{link.title}</LgNavLink>
      ))}

      {props.user?.role === Role.doctor ? (
        <Link
          className={`transition duration-150 hover:text-white flex items-center ${
            location.pathname == "/dashboard" ? "text-white" : ""
          }`}
          to="/dashboard"
        >
          <span>Dashboard</span>
        </Link>
      ) : null}
      {props.user?.role === Role.doctor ? (
        <Link
          className={`transition duration-150 hover:text-white flex items-center ${
            location.pathname == "/manage-appointments" ? "text-white" : ""
          }`}
          to="/manage-appointments"
        >
          <span>Manage</span>
        </Link>
      ) : null}
    </div>
  );
};

export default LargeScreensNav;
