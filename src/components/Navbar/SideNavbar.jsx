import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link, useLocation } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import NavLogo from "../../assets/NavLogo";
import Profile from "../../assets/Profile";
import GroupIcon from "../../assets/GroupIcon";
import FeedbackIcon from "../../assets/FeedbackIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import NotificationIcon from "../../assets/NotificationIcon";
import Logout from "../../assets/Logout";
import sideNavStyles from "../Navbar/SideNavbarStyles";

const drawerWidth = 67;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const menuItems = [
  { text: "Profile", icon: <Profile />, path: "/profile" },
  { text: "Teams", icon: <GroupIcon />, path: "/teams" },
  { text: "Feedback", icon: <FeedbackIcon />, path: "/feedback" },
];

const bottomIcons = [
  { icon: <SettingsIcon />, path: "/settings" },
  { icon: <NotificationIcon />, path: "/notification" },
  { icon: <Logout />, path: "/logout" },
];

function SideNavbar() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box sx={sideNavStyles.rootStyle}>
      <Box>
        <DrawerHeader sx={sideNavStyles.drawerHeader}>
          <NavLogo height="50px" width="30px" marginLeft="-20px" />
          <Typography sx={sideNavStyles.drawerHeaderTxt}>V 1.0.02</Typography>
        </DrawerHeader>
        <Divider sx={sideNavStyles.divider} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={sideNavStyles.listItemTop}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                sx={sideNavStyles.listItemButtonTop}
              >
                <ListItemIcon sx={sideNavStyles.listItemIconTop}>
                  <Box
                    key={item.path}
                    sx={sideNavStyles.listItemIconBoxStyleTop(location, item.path)}
                  >
                    {item.icon}
                  </Box>
                </ListItemIcon>
                <Typography sx={sideNavStyles.listItemTextTop}>
                  {item.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ mb: 0 }}>
        <List
          sx={sideNavStyles.list}
        >
          {bottomIcons.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={sideNavStyles.listItemBottom}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                sx={sideNavStyles.listItemButtonBottom}
              >
                <ListItemIcon
                  sx={sideNavStyles.listItemIconButtonBottom}
                >
                  <Box
                  key={item.path}
                    sx={sideNavStyles.listItemIconBoxStyleBottom(location, item.path)}
                  >
                    {item.icon}
                  </Box>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default SideNavbar;
