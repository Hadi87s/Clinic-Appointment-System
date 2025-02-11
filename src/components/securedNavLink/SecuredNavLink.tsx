import { IUser, Role } from "../../types/@types";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  user: IUser | null;
  role: Role;
  path: string;
  title: string;
}

const SecuredNavLink = (props: IProps) => {
  const location = useLocation();
  return (
    <>
      {props.user?.role === props.role ? (
        <Link
          className={`transition duration-150 hover:text-white flex items-center ${
            location.pathname == props.path ? "text-white" : ""
          }`}
          to={props.path}
        >
          <span>{props.title}</span>
        </Link>
      ) : null}
    </>
  );
};

export default SecuredNavLink;
