


import { Typography, Box, Divider, Button, TextField, IconButton, Drawer } from "@mui/material";
import React, { useState } from "react";
import AddMemberStyle from "../../components/AddMembers/AddMembersStyles";
import Dropdown from "../../atoms/DropDown/DropDown";
import dropDownData from "../../atoms/DropDown/DropDownData.json";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";

function AddMembers({ addMember}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [reportingTo, setReportingTo] = useState("");
  const [isDrawerOpen , setIsDrawerOpen] = useState(true);
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // const { members,setMembers } = location.state; 
  // // const [newMember, setNewMember] = React.useState('');
  // console.log("Members from parent:", members);

  // Handle email validation
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };
  const handleSubmit = () => {
    if (name && email && !emailError && dateOfJoining && department && designation && reportingTo) {
      const newMember = { name, email, dateOfJoining, department, designation, reportingTo };
      console.log("New Member Data:", newMember);
      addMember(newMember); // Call the parent's addMember function with the new member data
      setMembers((prevMembers) => [...prevMembers, newMember]);
      console.log(members);
      // Clear fields after submission
      setName("");
      setEmail("");
      setDateOfJoining("");
      setDepartment("");
      setDesignation("");
      setReportingTo("");
      
      // Optionally, close the drawer after submission
      handleDrawerClose();
    } else {
      alert("Please fill out all required fields correctly.");
    }
  };
  console.log(addMember);
  const handleDrawerClose =() =>{
    setIsDrawerOpen(false)
   navigate('/teams');
  }
  console.log(addMember);

  return (
    <>
    
    <Drawer
    anchor="right"
    open={isDrawerOpen}
    onClose={handleDrawerClose}
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
      {isDrawerOpen && 
      <IconButton
      onClick={handleDrawerClose}
       sx={{height:"50px",width:"50px",backgroundColor:"white",
        zIndex: 3000,
        position:"fixed",
        ml:"-90px",
        mt:"20px",
      }}>
         <CloseIcon />
      </IconButton>
      }
    <Box sx={AddMemberStyle.rootStyle}>
      <Box sx={{ ...AddMemberStyle.headerContainer, padding: "1px 0" }}>
        <Typography sx={AddMemberStyle.header}>Add Members</Typography>
        <Divider sx={AddMemberStyle.divider} />
      </Box>
      <Box sx={AddMemberStyle.container}>
        <Box sx={AddMemberStyle.body}>
          {/* Name field */}
          <Typography sx={AddMemberStyle.subHeader}>Name<span style={{ color: "red" }}>*</span></Typography>
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            sx={AddMemberStyle.textField_name}
          />

          {/* Email field */}
          <Box sx={{ mt: "10px" }}>
            <Typography sx={AddMemberStyle.label}>Email<span style={{ color: "red" }}>*</span></Typography>
            <TextField
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Enter a valid email" : ""}
              placeholder="atomicsignals@gmail.com"
              sx={AddMemberStyle.textField_email}
            />
          </Box>
          {/* Date of Joining field */}
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={AddMemberStyle.label}>Date of Joining<span style={{ color: "red" }}>*</span></Typography>
            <TextField
              type="date"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              sx={AddMemberStyle.textField_date}
            />
          </Box>

          {/* Department dropdown */}
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={AddMemberStyle.label}>Department<span style={{ color: "red" }}>*</span></Typography>
            <Dropdown
              options={dropDownData.Departments}
              value={department}
              selectedValue={department}   
        setSelectedValue={setDepartment}
              label="Select Department"
            />
          </Box>

          {/* Designation dropdown */}
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={AddMemberStyle.label}>Designation<span style={{ color: "red" }}>*</span></Typography>
            <Dropdown
              options={dropDownData.Designation}
              value={designation}
              selectedValue={designation}
              setSelectedValue={setDesignation}
              label="Select Role"
            />
          </Box>

          {/* Reporting To dropdown */}
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={AddMemberStyle.label}>Reporting to<span style={{ color: "red" }}>*</span></Typography>
            <Dropdown
              options={dropDownData.reportingTo}
              value={reportingTo}
              selectedValue={reportingTo}
              setSelectedValue={setReportingTo}
              label="Select Manager"
            />
          </Box>

          {/* Submit button */}
          <Box display="flex" flexDirection="row" justifyContent="space-around" gap={2}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            
            sx={{ marginTop: "20px",width:"50%", }}
          >
            Add Member
          </Button>
          <Button
            variant="outlined"
            onClick={handleDrawerClose}
            sx={{ marginTop: "20px",width:"50%" }}
          >
            cancel
          </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </Drawer>
  
    </>
  );
}
AddMembers.defaultProps = {
  addMember: () => {},
};


export default AddMembers;




