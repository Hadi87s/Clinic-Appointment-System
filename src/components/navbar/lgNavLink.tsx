import { Link } from "react-router-dom";

interface IProps {
  path: string;
  children: React.ReactNode;
}

const LgNavLink = (props: IProps) => {
  return (
    <Link
      className={`transition duration-150 hover:text-white ${
        location.pathname == props.path ? "border-b-2 rounded-b-[2px]" : ""
      }`}
      to={props.path}
    >
      {props.children}
    </Link>
  );
};

export default LgNavLink;
