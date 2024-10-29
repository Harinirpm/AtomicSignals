import React from 'react'
import Box from "@mui/material/Box";
import useWindowDimensions from '../../utils/useWindowDimention/UseWindowDimention';
import TeamMemStyles from './TeamMemStyles';
import SideNavbar from '../../components/Navbar/SideNavbar';
function TeamMembers() {
    const { width,height } = useWindowDimensions();
    const sidebarWidth = 0;
    const sidebarHeight = 0;
  return (
<>
    <Box sx={TeamMemStyles.rootStyle}>
    <Box  sx={{
      width: width - sidebarWidth, 
      padding: 0,
      height: height - sidebarHeight,
      
    }}>
        <SideNavbar />
          <Box padding={5} sx={{ml:"60px"}}>
            <Box>hello</Box>
    </Box>
    </Box>
    </Box>
    </>
  )
}

export default TeamMembers
