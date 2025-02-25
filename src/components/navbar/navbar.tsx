import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import "../../App.css";
import { authContext } from "../../providers/authProvider";
import { useContext, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LgScreenLinks from "../navbar-links/LgScreenLinks";
import SmallScreensNavbar from "../sm-navbar/SmallScreensNavbar";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Role } from "../../types/@types";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.onclick = () => {
      setMenuVisible(false);
    };
  }, []);

  return (
    <div className="flex justify-center mx-auto w-[100%]">
      <div
      style={{zIndex: "1000"}}
        className={`mt-2 flex w-[90%] justify-between content-center h-17
         p-4 text-blue-200 navbar rounded-2xl bg-gradient-to-r from-blue-900/85 to-blue-500/85
        backdrop-blur-[2px] fixed inset-0 inset-x-auto border-2 border-blue-600 font-[500]`}
      >
        <div
          onClick={() => {
            scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            navigate("/");
          }}
          className="logo h-fit text-white text-[24px] cursor-pointer transition-all duration-150 hover:drop-shadow-lg"
        >
          AppointMed
        </div>
        <LgScreenLinks user={user} />
        <SmallScreensNavbar
          user={user}
          menuVisible={menuVisible}
          logout={logout}
        />
        {!user ? (
          <Link
            to="/login"
            className="hidden lg:flex font-[500] bg-blue-100 text-blue-900 p-4 items-center rounded-2xl ring-1 hover:ring-blue-400 hover:bg-blue-700 hover:text-blue-100 transition duration-200 cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <div className="hidden lg:flex gap-2 items-center bg-blue-200 py-3 rounded-4xl">
            <div
              onClick={() => {
                user.role === Role.doctor
                  ? navigate(`/admin/${user.id}`)
                  : navigate(`/user/${user.id}`);
              }}
              className="cursor-pointer flex items-center text-blue-900 relative bg-blue-100 px-3 py-1 rounded-[50%] border-3 transition duration-150 hover:border-blue-200 hover:bg-blue-700 hover:text-blue-100"
            >
              <span className="text-2xl">{user.fullName.slice(0, 1)}</span>
            </div>
            <div className="font-[500] bg-blue-100 text-blue-900 flex  items-center px-2.5 py-2 rounded-[50%] border-3 hover:border-blue-200 hover:bg-blue-700 hover:text-blue-100 transition duration-200 cursor-pointer">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate("/");
                }}
                to="/"
              >
                <LogoutRoundedIcon fontSize="small" />
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setMenuVisible(!menuVisible);
          }}
          className="flex items-center lg:hidden cursor-pointer z-10"
        >
          {!menuVisible ? <Menu fontWeight="bold" /> : <X />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
