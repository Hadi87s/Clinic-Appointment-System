import { INav, links, securedLinks } from "./LgScreenLinks";
import SecuredNavLink from "../securedNavLink/SecuredNavLink";
import LgNavLink from "../navbar/lgNavLink";

const SmScreenLinks = (props: INav) => {
  return (
    <div className="flex flex-col items-center lg:hidden gap-5 mb-5">
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

export default SmScreenLinks;
