import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideNavbar from '../../components/Navbar/SideNavbar';
import useWindowDimensions from '../../components/useWindowDimention/UseWindowDimention';

function TeamMembers() {
    const { width,height } = useWindowDimensions();
    // const sidebarWidth = 250;
    // const sidebarHeight = 10;
  return (

    <Box
    sx={{
      backgroundColor: "#EFEEFB",
      width: "100vw",
      height: "100vh",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      padding: 2,
    }}
  >
    <SideNavbar />
    <Box  sx={{
        //   width: width - sidebarWidth, 
        //   padding: 2,
        //   height: height - sidebarHeight,

        }}>
    <Typography>Team Members</Typography>
    </Box>
    </Box>
  )
}

export default TeamMembers
