import { Typography, Box, Divider, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FiltersStyles from "../Filters/FiltersStyles";
import Dropdown from "../../atoms/DropDown/DropDown";
import dropDownData from "../../atoms/DropDown/DropDownData.json";
import AddMemberStyle from "../../components/AddMembers/AddMembersStyles";
import CustomDatePicker from "../../atoms/CustomDatePicker/CustomDatePicker";
import Chip from '@mui/material/Chip';
import Avatar1 from "../../assets/avatar2.jpeg"
import Avatar from '@mui/material/Avatar';
import EditMemberStyles from "./EditMemberStyles";
function EditMembers({ member = {}, onSubmit, onClose }) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [formData, setFormData] = useState({
    name: member.name || "",
    email: member.email || "",
    dateOfJoining: member.dateOfJoining || "",
    department: member.department || "",
    designation: member.designation || "",
    role: member.role || "",
    reportingTo: member.reportingTo || ""
  });

  useEffect(() => {
    setFormData({
      name: member.name || "",
      email: member.email || "",
      dateOfJoining: member.dateOfJoining || "",
      department: member.department || "",
      designation: member.designation || "",
      role: member.role || "",
      reportingTo: member.reportingTo || ""
    });
  }, [member]);

    // handle change for text fields
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  //validating email
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setFormData((prevData) => ({
      ...prevData,
      email: email,
    }));
  };
  const handleSubmit = () => {
    if (!emailError) {
      onSubmit(formData); 
    }
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
      <Box sx={AddMemberStyle.container}>
        {/* Name field */}
        <Box sx={AddMemberStyle.body}>
          <Typography sx={AddMemberStyle.subHeader}>
            Name<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
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
               name="email"
              value={formData.email}
              onChange={handleEmailChange}
              // value={email}
              // onChange={handleEmailChange}
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
            name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
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
            value={formData.department}
            onChange={(value) => setFormData({ ...formData, department: value })}
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
            value={formData.designation}
            onChange={(value) => setFormData({ ...formData, designation: value })}
            placeholder="Select"
            label="My Dropdown"
          />
        </Box>
        <Box sx={{ ml: "20px", mb: "10px",mt:"-10px" }}>
          {/* reporting */}
          <Typography sx={AddMemberStyle.dropDownHeader}>
            Role<span style={{ color: "red" }}>*</span>
          </Typography>
          <Dropdown
            options={dropDownData.role}
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
            placeholder="Manager Name"
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
            value={formData.reportingTo}
            onChange={(value) => setFormData({ ...formData, reportingTo: value })}
            placeholder="Manager Name"
            label="My Dropdown"
          />
        </Box>
        
      </Box>
      
       <Chip
       sx={EditMemberStyles.chip}
        avatar={<Avatar alt="Natacha" src={Avatar1} sx={{height:"10px",width:"10px"}}/>}
        label="Steven"
        onDelete={handleDelete}
      />
      <Box
        sx={EditMemberStyles.buttonBox}
      >
        <Button variant="contained" sx={{ width: "50%" }} onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="outlined" sx={{ width: "50%" }}  onClick={onClose}>
          Cancel
        </Button>
      </Box>
      
    </Box>
  );
}

export default EditMembers;
