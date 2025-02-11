import { IUser, Role } from "../../types/@types";
import LgNavLink from "../navbar/lgNavLink";
import SecuredNavLink from "../securedNavLink/SecuredNavLink";

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
    title: "Book Now",
  },
];

const securedLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
    role: Role.doctor,
  },
  {
    path: "/manage-appointments",
    title: "Manage",
    role: Role.doctor,
  },
  {
    path: "/view-appointment",
    title: "View Appointments",
    role: Role.patient,
  },
];

const LargeScreensNav = (props: IProps) => {
  return (
    <div className="hidden lg:flex gap-5 ">
      {links.map((link, index) => (
        <LgNavLink key={index} path={link.path}>
          {link.title}
        </LgNavLink>
      ))}

      {securedLinks.map((link, index) => {
        return (
          <SecuredNavLink
            key={index}
            user={props.user}
            role={link.role}
            path={link.path}
            title={link.title}
          />
        );
      })}
    </div>
  );
};

export default LargeScreensNav;
