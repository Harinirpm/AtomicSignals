import React, { useEffect } from "react";
import { Box, Drawer, IconButton, Typography, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Filters from "./Filters";
import AddMembers from "../AddMembers/AddMembers";
import EditMembers from "../EditMembers/EditMembers";

const AnchorTemporaryDrawer = ({ isOpen, toggleDrawer, contentType, setMembers }) => {

  const renderContent = () => {
    const addMember = (newMember) => {
      setMembers((prevMembers) => [...prevMembers, newMember]);
      toggleDrawer(false); // Close the drawer after adding a member
    };
    
    if (contentType === "addMember") {
      return <AddMembers addMember={addMember} toggleDrawer={isOpen} />;
    } else if (contentType === "filter") {
      return <Filters />;
    } else if (contentType === "editMembers") {
      return <EditMembers />;
    }
    return null;
  };

  // Close drawer automatically when `isOpen` changes
  useEffect(() => {
    if (!isOpen) toggleDrawer(false);
  }, [isOpen, toggleDrawer]);

  const handleClose =() =>{
    toggleDrawer(false);
  }
  
  return (
    <>
    <Box>
    {isOpen && (
        <IconButton
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 16,
            right: 480,
            backgroundColor: "#ffffff",
            color: "black",
            boxShadow: 1,
            borderRadius: "50%",
            zIndex: 2800,
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          <CloseIcon />
        </IconButton>
      )} 
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        BackdropProps={{
          sx: { backgroundColor: "rgba(128, 128, 128, 0.5)" },
        }}
        sx={{
          zIndex: 1200,
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            width: 390,
          },
        }}
      >
        <Box sx={{ paddingTop: 3 }}>{renderContent()}</Box>
      </Drawer>
      </Box>
    </>
  );
};

export default AnchorTemporaryDrawer;
