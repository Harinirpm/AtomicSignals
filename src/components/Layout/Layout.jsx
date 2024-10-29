import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimention/UseWindowDimention";
import SideNavbar from "../Navbar/SideNavbar";
function Layout() {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const withNavbar = ['/profile','/teams','/feedback','/notification'];
  const showNavbar = withNavbar.some((path) => location.pathname.startsWith(path));
  return (
    <>
    {showNavbar && <SideNavbar />}
      <div
        sx={{
          backgroundColor: "#EFEEFB;",
          overflow: "hidden",
          maxWidth: width * 3,
          maxHeight: height * 0.98,
          width: "100vw",
          height: "100vh",
          margin: "0 !important",
          padding: "0 !important",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
