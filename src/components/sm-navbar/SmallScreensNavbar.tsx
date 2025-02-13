import { IUser, Role } from "../../types/@types";
import { Link, useNavigate } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SmScreenLinks from "../navbar-links/SmScreenLinks";

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
        props.menuVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } transition duration-300 flex flex-col justify-center bg-gradient-to-r from-blue-900/95 to-blue-500/85
        backdrop-blur-[2px] mt-10 text-center p-4 gap-1 absolute -top-[50px] -right-[50px] md:-right-[70px] min-h-screen w-[370px] border-l-2 border-blue-900`}
    >
      {props.user ? (
        <div
          onClick={() => {
            props.user?.role === Role.doctor
              ? navigate(`/admin/${props.user?.id}`)
              : navigate(`/user/${props.user?.id}`);
          }}
          className="flex justify-center items-center text-blue-900 text-2xl relative bg-blue-100 w-fit px-3 py-1 mx-auto rounded-[50%] border-3 transition duration-150 hover:border-blue-200 hover:bg-blue-700 hover:text-blue-100"
        >
          {props?.user?.fullName.slice(0, 1) ?? ""}
        </div>
      ) : null}
      <SmScreenLinks user={props.user} />
      <div
        className={`bg-blue-100 text-blue-900 py-1 block lg:hidden items-center rounded-2xl ring-1
     hover:ring-blue-400 hover:bg-blue-700 hover:text-blue-100 transition duration-200 
     cursor-pointer w-[100px] mx-auto`}
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
            <LogoutRoundedIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SmallScreensNavbar;
