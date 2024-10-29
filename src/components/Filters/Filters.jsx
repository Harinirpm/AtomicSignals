import { Typography, Box, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import FiltersStyles from "../Filters/FiltersStyles";
import Dropdown from '../../atoms/DropDown/DropDown';
import dropDownData from "../../atoms/DropDown/DropDownData.json"
import ButtonData from "../../atoms/CustomButton/ButtonData.json"
function Filters() {
  const [active, setActive] = useState(null);
  const [activeRole, setActiveRole] = useState(null);
  // Button click condition
  const handleSelect = (index) => {
    setActive(index);
  };
  const handleRoleClick = (index) => {
    setActiveRole(index);
  };

  return (
    <Box sx={FiltersStyles.rootStyle}>
       <Box sx={{ ...FiltersStyles.headerContainer, padding: '1px 0' }}>
        <Typography sx={FiltersStyles.header}>
          Filters
        </Typography>
        <Divider sx={FiltersStyles.divider} />
      </Box>
      <Box sx={FiltersStyles.container}>
        
        <Box sx={FiltersStyles.body}>
          <Typography sx={FiltersStyles.subHeader}>Overall Performance</Typography>
          
          <Box sx={{ display: 'flex', gap: '10px', maxWidth: '95%',mt:"10px", }}>
            {ButtonData.overAllPerformance.slice(0, 3).map((button, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => handleSelect(index)}
                sx={{
                  color: "#353448",
                  backgroundColor: active === index ? "#EEFBF6" : "transparent",
                  border: active === index ? "2px solid #49C792" : "1px solid #EBEBEB",
                  fontSize: "14px",
                  height: "auto",
                  minWidth: 'auto', 
                  padding: "6px", 
                  lineHeight: 'normal',
                  flex: 'none', 
                }}
                
              >
                {button}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '10px', maxWidth: '90%', marginTop: '10px' }}>
            {ButtonData.overAllPerformance.slice(3, 5).map((button, index) => (
              <Button
                key={index + 3}
                variant="outlined"
                onClick={() => handleSelect(index + 3)}
                sx={{
                  color: "#353448",
                  backgroundColor: active === index + 3 ? "#EEFBF6" : "transparent",
                  border: active === index + 3 ? "2px solid #49C792" : "1px solid #EBEBEB",
                  fontSize: "14px",
                  height: "auto",
                  minWidth: 'auto', 
                  padding: "6px", 
                  lineHeight: 'normal',
                  flex: 'none', 
                }}
              >
                {button}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: '10px', maxWidth: '100%', marginTop: '10px' }}>
            {ButtonData.overAllPerformance.slice(5).map((button, index) => (
              <Button
                key={index + 5}
                variant="outlined"
                onClick={() => handleSelect(index + 5)}
                sx={{
                  color: "#353448",
                  backgroundColor: active === index + 5 ? "#EEFBF6" : "transparent",
                  border: active === index + 5 ? "2px solid #49C792" : "1px solid #EBEBEB",
                  fontSize: "14px",
                  height: "auto",
                  minWidth: 'auto', 
                  padding: "6px", 
                  lineHeight: 'normal',
                  flex: 'none', 
                  
                }}
              >
                {button}
              </Button>
            ))}
          </Box>
          
        </Box>
        <Box sx={{ml:"20px"}}>
        <Typography sx={FiltersStyles.subHeader}>Department</Typography>
          <Dropdown
        options={dropDownData.Departments}  
        placeholder="Select" 
        label="My Dropdown"
      />
        </Box>
        <Box sx={{ml:"20px",mb:"10px"}}>
        <Typography sx={FiltersStyles.subHeader}>Designation</Typography>
          <Dropdown
        options={dropDownData.Designation}  
        placeholder="Select" 
        label="My Dropdown"
      />
        </Box>
        <Box sx={{ml:"20px",mb:"20px"}}>
        <Typography sx={FiltersStyles.subHeader}>Reporting to</Typography>
        <TextField
            type="text"
            placeholder="Name"
            sx={FiltersStyles.textField}
          />
          </Box>
          <Box sx={{ml:"20px",mb:"20px"}}>
        <Typography sx={FiltersStyles.subHeader}>Role</Typography>
          {ButtonData.Role.map((role,idx) => (
           <Button variant="outlined" key={idx}
           onClick={() => handleRoleClick(idx)}
                sx={{
                  color: "#353448",
                  backgroundColor: activeRole === idx ? "#EEFBF6" : "transparent",
                  border: activeRole === idx ? "2px solid #49C792" : "1px solid #EBEBEB",
                  fontSize: "14px",
                  height: "auto",
                  minWidth: 'auto', 
                  padding: "6px", 
                  lineHeight: 'normal',
                  flex: 'none', 
                  gap:"10px",mr:"10px",
                }}
           >{role}</Button>
          ))}
        </Box>
        
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '13px', mt: 'auto',gap:"10px" }}>
        <Button variant='contained'sx={{width:"50%"}}>Apply filter</Button>
        <Button variant='outlined' sx={{width:"50%"}}>Reset</Button>
      </Box>
    </Box>
  );
}

export default Filters;
