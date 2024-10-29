import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Dropdown({ options = [], placeholder = "Select...", label = "Dropdown",selectedValue,  
  setSelectedValue }) {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value); // Update the parent state with the selected option
  };

  return (
    <div>
      <FormControl 
        sx={{
          m: 0, 
          width: '100%', 
          maxWidth: 340, 
          border: "none", 
          boxShadow: "none",
          
        }}
      >
        <Select
          displayEmpty
          value={selectedValue || ""} // Use the selected value passed from the parent
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <Typography sx={{ fontSize: "14px", color: "#C2C1C7" }}>
                  {placeholder}
                </Typography>
              );
            }
            return selected;
          }}
          inputProps={{ 'aria-label': label }}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            height: "40px",
            maxWidth: "480px",
            width: "100%", 
            borderRadius: "5px", 
            backgroundColor: "white",
            boxShadow: "none",
            padding: "8px 12px", 
            '&.Mui-focused': {
              border: "1px solid #EBEBEB", 
              boxShadow: "none",
            },
            '&:hover': {
              border: "1px solid #EBEBEB", 
              boxShadow: "none",
            },
            "&:active": {
              border: "none",
            },
            '& .MuiInputBase-input': {
              fontSize: "14px"
            },
          }}
        >
          <MenuItem disabled value="">
            <Typography>{placeholder}</Typography>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{ fontSize: "14px" }}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
