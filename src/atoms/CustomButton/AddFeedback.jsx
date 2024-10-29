import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EditMembers from "../../components/EditMembers/EditMembers";
import { Drawer } from "@mui/material";
import AddFeedbackStyles from "./AddFeedbackStyles";
function AddFeedback({ memberId, memberDetails, onEdit }) {
  const [isActionDrawerOpen, setIsActionDrawerOpen] = useState(false);
  const handleActionDrawerOpen = () => {
    setIsActionDrawerOpen(true);
  };
  const handleActionDrawerClose = () => {
    setIsActionDrawerOpen(false);
  };
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" sx={{ height: "30px" }}>
          Add Feedback
        </Button>
        <IconButton
          sx={AddFeedbackStyles.IconButton}
          onClick={handleActionDrawerOpen}
        >
          <ModeEditOutlineOutlinedIcon sx={AddFeedbackStyles.editIcon} />
        </IconButton>
        <Drawer
          anchor="right"
          open={isActionDrawerOpen}
          onClose={handleActionDrawerClose}
          BackdropProps={{
            sx: { backgroundColor: "rgba(128, 128, 128, 10)" },
          }}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "white",
              width: 390,
            },
          }}
        >
          {isActionDrawerOpen && (
            <IconButton
              onClick={handleActionDrawerClose}
              sx={AddFeedbackStyles.drawerIconButton}
            >
              <CloseIcon />
            </IconButton>
          )}
          <EditMembers
            memberDetails={memberDetails}
            onSubmit={(updatedMember) => {
              onEdit(updatedMember);
              handleActionDrawerClose();
            }}
          />
        </Drawer>
      </Stack>
    </>
  );
}

export default AddFeedback;
