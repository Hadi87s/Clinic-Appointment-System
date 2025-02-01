import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the matched route's component */}
    </>
  );
}

export default NavbarLayout;
