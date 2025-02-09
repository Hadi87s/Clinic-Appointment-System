import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
