import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import "../../App.css";
import { authContext } from "../../providers/authProvider";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import LargeScreensNav from "../lg-navbar/LargeScreensNav";
import SmallScreensNavbar from "../sm-navbar/SmallScreensNavbar";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mx-auto w-[100%]">
      <div
        className={`mt-2 flex w-[90%] justify-between content-center ${
          menuVisible ? "h-[50%]" : "h-17"
        } p-4 z-10 text-blue-200 navbar rounded-2xl bg-gradient-to-r from-blue-900/85 to-blue-500/85
        backdrop-blur-[2px] fixed inset-0 inset-x-auto border-2 border-blue-600 font-[500]`}
      >
        <div className="logo h-fit text-white text-[24px]">AppointMed</div>
        <LargeScreensNav user={user} />
        <SmallScreensNavbar
          user={user}
          menuVisible={menuVisible}
          logout={logout}
        />
        {!user ? (
          <Link
            to="/login"
            className="font-[500] bg-blue-100 text-blue-900 p-4 flex  items-center rounded-2xl ring-1 hover:ring-blue-400 hover:bg-blue-700 hover:text-blue-100 transition duration-200 cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <div className="hidden lg:flex gap-2">
            <span className="flex items-center text-white">
              {user.fullName.split(" ")[0]}
            </span>
            <div className="font-[500] bg-blue-100 text-blue-900 p-4 flex  items-center rounded-2xl ring-1 hover:ring-blue-400 hover:bg-blue-700 hover:text-blue-100 transition duration-200 cursor-pointer">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate("/");
                }}
                to="/"
              >
                Logout
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            menuVisible ? setMenuVisible(false) : setMenuVisible(true);
          }}
          className="flex lg:hidden cursor-pointer"
        >
          {" "}
          {!menuVisible ? <Menu /> : <X />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
