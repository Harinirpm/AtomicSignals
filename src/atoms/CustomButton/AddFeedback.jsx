import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "../../components/Filters/AchorTemporaryDrawer";
import CloseIcon from "@mui/icons-material/Close";
import EditMembers from "../../components/EditMembers/EditMembers";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";

function AddFeedback() {
  const [isActionDrawerOpen, setIsActionDrawerOpen] = React.useState(false);
    const handleActionDrawerOpen = () => {
      setIsActionDrawerOpen(true);
    }
   const handleActionDrawerClose = () => {
    setIsActionDrawerOpen(false);
   }
  
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" sx={{ height: "30px"}}>
          Add Feedback
        </Button>
        <IconButton
          sx={{ backgroundColor: "#e1fce9", height: "30px", width: "30px" }}
          onClick={handleActionDrawerOpen}
        >
          <ModeEditOutlineOutlinedIcon
            sx={{ color: "secondary.main", fontSize: "16px " }}
          />
        </IconButton>
        <Box position="relative">
            <Drawer
      anchor="right"
      open={isActionDrawerOpen}
      onClose={handleActionDrawerClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "white",
          width: 390,
        },
      }}
    >
      <EditMembers />
      </Drawer>
      </Box>
      </Stack>
           
    </>
  );
}

export default AddFeedback;
