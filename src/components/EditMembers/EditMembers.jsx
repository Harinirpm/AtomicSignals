import { Typography, Box, Divider, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FiltersStyles from "../Filters/FiltersStyles";
import Dropdown from "../../atoms/DropDown/DropDown";
import dropDownData from "../../atoms/DropDown/DropDownData.json";
import AddMemberStyle from "../../components/AddMembers/AddMembersStyles";
import CustomDatePicker from "../../atoms/CustomDatePicker/CustomDatePicker";
import Chip from '@mui/material/Chip';
import Avatar1 from "../../assets/avatar2.jpeg"
import Avatar from '@mui/material/Avatar';
function EditMembers() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);


  //validating email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };
  // Button click condition
  const handleSelect = (index) => {
    setActive(index);
  };
  const handleRoleClick = (index) => {
    setActiveRole(index);
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Box sx={AddMemberStyle.rootStyle}>
      {/* header */}
      <Box sx={{ ...AddMemberStyle.headerContainer, padding: "1px 0" }}>
        <Typography sx={AddMemberStyle.header}>Edit Members</Typography>
        <Divider sx={AddMemberStyle.divider} />
      </Box>
      {/* body
       */}
      <Box sx={AddMemberStyle.container}>
        {/* Name field */}
        <Box sx={AddMemberStyle.body}>
          <Typography sx={AddMemberStyle.subHeader}>
            Name<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            type="text"
            placeholder="Name"
            sx={AddMemberStyle.textField_name}
          />
          {/* email field */}
          <Box sx={{ mt: "10px" }}>
            <Typography sx={AddMemberStyle.label}>
              Email<span style={{ color: "red" }}>*</span>
            </Typography>
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
          {/* date field */}
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <Typography sx={AddMemberStyle.label}>
              Date of Joining<span style={{ color: "red" }}>*</span>
            </Typography>
            {/* <CustomDatePicker /> */}
            <TextField
            type="date"
            placeholder="Name"
            sx={AddMemberStyle.textField_date}
          />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              maxWidth: "100%",
              marginTop: "10px",
            }}
          ></Box>
        </Box>

        <Box sx={{ ml: "20px" }}>
          {/* department */}
          <Typography sx={AddMemberStyle.dropDownHeader}>
            Department<span style={{ color: "red" }}>*</span>
          </Typography>
          <Dropdown
            options={dropDownData.Departments}
            placeholder="Select"
            label="My Dropdown"
          />
        </Box>
        <Box sx={{ ml: "20px", mb: "10px" }}>
          {/* designation */}
          <Typography sx={AddMemberStyle.dropDownHeader}>
            Designation<span style={{ color: "red" }}>*</span>
          </Typography>
          <Dropdown
            options={dropDownData.Designation}
            placeholder="Select"
            label="My Dropdown"
          />
        </Box>
        <Box sx={{ ml: "20px", mb: "20px" }}>
          {/* reporting */}
          <Typography sx={AddMemberStyle.dropDownHeader}>
            Reporting to<span style={{ color: "red" }}>*</span>
          </Typography>
          <Dropdown
            options={dropDownData.reportingTo}
            placeholder="Manager Name"
            label="My Dropdown"
          />
        </Box>
      </Box>
      
       <Chip
       sx={{ml:"20px",backgroundColor:"#F5F5F5",border:"1px solid #CACACA",height:"25px"}}
        avatar={<Avatar alt="Natacha" src={Avatar1} sx={{height:"10px",width:"10px"}}/>}
        label="Steven"
        onDelete={handleDelete}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "16px",
          mt: "auto",
          gap: "10px",
        }}
      >
        <Button variant="contained" sx={{ width: "50%" }}>
          Solve
        </Button>
        <Button variant="outlined" sx={{ width: "50%" }}>
          Cancel
        </Button>
      </Box>
      
    </Box>
  );
}

export default EditMembers;
