import { Link } from "react-router-dom";

interface IProps {
  path: string;
  children: React.ReactNode;
}

const LgNavLink = (props: IProps) => {
  return (
    <Link
      className={`transition duration-150 hover:text-white flex items-center ${
        location.pathname == props.path ? "text-white" : ""
      }`}
      to={props.path}
    >
      <span>{props.children}</span>
    </Link>
  );
};

export default LgNavLink;
