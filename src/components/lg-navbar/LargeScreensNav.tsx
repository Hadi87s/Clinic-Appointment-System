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
    <div className="hidden md:flex gap-5 ">
      {links.map((link) => (
        <LgNavLink path={link.path}>{link.title}</LgNavLink>
      ))}

      {props.user?.role === Role.doctor ? (
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
      {props.user?.role === Role.doctor ? (
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
    </div>
  );
};

export default LargeScreensNav;
