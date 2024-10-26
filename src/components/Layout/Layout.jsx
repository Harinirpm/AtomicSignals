import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import useWindowDimensions from "../useWindowDimention/UseWindowDimention";
function Layout() {
    const { height, width } = useWindowDimensions();
  return (
    <>
            <div sx={{backgroundColor: "#EFEEFB;",
        overflow: "hidden",
        maxWidth: width * 3,   
        maxHeight: height * 0.98,  
            width: "100vw",
            height: "100vh",          
        margin: "0 !important",
        padding: "0 !important",
        boxSizing:"border-box",
      }}>
              <Outlet />
            </div>
    </>
  );
}

export default Layout;
