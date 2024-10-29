import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimention/UseWindowDimention";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ImportIcon from "../../assets/ImportIcon";
import FilterIcon from "../../assets/Filter";
import TeamsStyles from "./TeamsStyles";
import CustomTable from "../../components/CustomTable/CustomTable";
import AnchorTemporaryDrawer from '../../components/Filters/AchorTemporaryDrawer';
import CloseIcon from "@mui/icons-material/Close";
import AddMembers from "../../components/AddMembers/AddMembers";
import {  Snackbar,
  Alert,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  border: "1px solid #CACACA",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    fontFamily: "Poppins, sans-serif",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Teams() {
  const { width, height } = useWindowDimensions();
  const sidebarWidth = 0;
  const sidebarHeight = 0;
  const [checked, setChecked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contentType, setContentType] = useState("filter");
  const [members, setMembers] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const navigate = useNavigate()
  // Handle the Reset Password button click
  const handleClick = () => {
    if (!passwordError && !confirmPasswordError) {
      // Perform your password reset logic here
      setSnackbarOpen(true); 
      navigate("/forgotPwd"); 
    }
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  //toggle drawer
  const toggleDrawer = (anchor, open, type = "filter") => () => {
    setContentType(type);
    setDrawerOpen(open);
  };
  const addMember = (newMember) => {
    console.log("Member added:", newMember);
    setMembers((prevMembers) => [...prevMembers, newMember]);
};
console.log(members);
//drawerOpen true
const handleDrawerOpen = () => {
  setIsDrawerOpen(true);
};
//to close the drawer
const handleDrawerClose = () => {
  setIsDrawerOpen(false);
};

const handleFilterDrawerOpen = () => {
setIsFilterDrawerOpen(true);
}
const handleFilterDrawerClose = () => {
  setIsFilterDrawerOpen(false);
}


//snackbar
useEffect(() => {
  const timer = setTimeout(() => {
    setSnackbarOpen(true);
  }, 2000);
  return () => clearTimeout(timer);
}, []);
const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};
  return (
    <Box sx={TeamsStyles.rootStyle}>
      <Box
        sx={{
          width: width - sidebarWidth,
          padding: 0,
          height: height - sidebarHeight,
        }}
      >
        <Box sx={{ padding: 3, ml: "70px" }}>
          <Box sx={TeamsStyles.header}>
            <Typography>Team Members</Typography>
            <Box sx={TeamsStyles.header} gap={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={TeamsStyles.checkBox}
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Show only my reportees"
              />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search by name, email"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton sx={TeamsStyles.iconButton} onClick={handleFilterDrawerOpen}>
                <Box sx={TeamsStyles.filterIconBox}>
                  <FilterIcon />
                </Box>
              </IconButton>
              <Divider orientation="horizontal" sx={TeamsStyles.divider} />
              <Button variant="outlined" onClick={toggleDrawer(true, true, "import",)} startIcon={<ImportIcon />}>
                Import
              </Button>
              <Button variant="contained" onClick={handleDrawerOpen}>
        Add Member
      </Button>

      {/* add member drawer*/}
      <Box position="relative">
      {isDrawerOpen && 
      <IconButton
      onClick={handleDrawerClose}
       sx={{height:"50px",width:"50px",backgroundColor:"white",
        zIndex:2900,
        ml:"-490px",
        mt:"20px",
      }}>
         <CloseIcon />
      </IconButton>
      }
              <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            width: 390,
          },
        }}
      >
        <AddMembers addMember={addMember} members={members} setMembers={setMembers} />
      </Drawer>
      </Box>

      {/* filter drawer */}
      <Box position="relative">
      {isFilterDrawerOpen && 
      <IconButton
      onClick={handleFilterDrawerClose}
       sx={{height:"50px",width:"50px",backgroundColor:"white",
        zIndex:2900,
        ml:"-490px",
        mt:"20px",
      }}>
         <CloseIcon />
      </IconButton>
      }
              <Drawer
        anchor="right"
        open={isFilterDrawerOpen}
        onClose={handleFilterDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            width: 390,
          },
        }}
      >
        <Filters />
      </Drawer>
      </Box>

            </Box>
          </Box>

          <CustomTable members={members} />
          <AnchorTemporaryDrawer isOpen={drawerOpen}
            toggleDrawer={() => {}}
            contentType={contentType}
            setMembers={setMembers}
          >
            </AnchorTemporaryDrawer>
        </Box> 
      <Snackbar
          autoHideDuration={3000}
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} 
        >
          <Alert
            onClose={handleSnackbarClose}
            icon={false}
            variant="filled"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              mb: "20px",
              backgroundColor: "#CEF3E4", 
              border: "1px solid #7FDCA4",
              color: "black",
              borderRadius: "10px",
            }}
          >
            Welcome! Have a great day
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Teams;
