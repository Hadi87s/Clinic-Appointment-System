import { IUser, Role } from "../../types/@types";
import LgNavLink from "../navbar/lgNavLink";
import SecuredNavLink from "../securedNavLink/SecuredNavLink";

export interface INav{
  user: IUser | null;
}

export const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
];

export const securedLinks = [
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
  {
    path: "/create-appointment",
    title: "Book Now",
    role: Role.patient,
  },
];

const LgScreenLinks = (props: INav) => {
  return (
    <div className=" hidden lg:flex gap-5 ">
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

export default LgScreenLinks;
