import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
function Avatars() {
  return (
    <Stack direction="row" spacing={1}>
    <Avatar sx={{height:"20px",width:"20px",fontSize:"10px", bgcolor: "#007C32" }}>C</Avatar>
    <Avatar sx={{height:"20px",width:"20px",fontSize:"10px",bgcolor: "#4C9E29"}}>E</Avatar>
    <Avatar sx={{height:"20px",width:"20px",fontSize:"10px", bgcolor:"#F2B824" }}>T</Avatar>
    <Avatar sx={{height:"20px",width:"20px",fontSize:"10px", bgcolor: "#F2EB24" }}>D</Avatar>
    <Avatar sx={{height:"20px",width:"20px",fontSize:"10px", bgcolor: "#DE1010" }}>U</Avatar>
  </Stack>
  )
}

export default Avatars;
