import { Box, Button, Divider, Typography, TextField } from '@mui/material';
import React from 'react';
import GroupImg from '../../assets/Group.png';
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

function ForgotPwd() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.length < 6);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/resetPwd');
  }

  return (
    <Box
      sx={{
        backgroundColor: "#EFEEFB",
        width: "97vw",
        height: "94vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        padding: 2,
      }}
    >
      <Box sx={{}}>
        <img src={GroupImg} alt="groupImg" style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          maxWidth: "90vw",
          width: { xs: "90%", sm: "300px", md: "350px" },
          height: "auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 0px 8px 10px #0000000A",
          padding: "30px",
          overflow: "auto",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src={Logo} alt="logo" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
        <Typography sx={{ color: "#353448", fontWeight: "bold", fontSize: "20px", mb: 1 }}>
        Forgot Password
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#71707E", mb: 2,  }}>
        Provide us the registered email to reset your password.
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <label style={{ fontFamily: "Poppins", color: "#484759",fontSize:"12px" }}>Email</label>
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? 'Enter a valid email' : ''}
            placeholder="atomicsignals@gmail.com"
            sx={{
             "& .MuiOutlinedInput-root": {
                height: "40px",
                mt:"-10px",
                padding:"0"
              },
              "& .MuiOutlinedInput-input": {
                padding:"10",
                height:"40px",
                boxSizing: "border-box",

              }
            }}
          />
          <Button
            variant="contained"
            disableRipple
  disableElevation
            sx={{
              backgroundColor: "#49C792",
              borderRadius: "4px",
              textTransform: "none",
              color: "#FFFFFF",
              fontFamily: "Poppins",
              width: "100%",
              height: "40px",
              fontSize: "14px",
              boxShadow:"none",
              mt:"10px",
              
            }}
            onClick={handleClick}
          >
           Get Link
          </Button>
            <Typography sx={{ color: "#71707E", textAlign: "center",mt:"20px" }}>
            Remembered the password?
              <Link to="/login" style={{ color: "#353448", fontFamily: "Poppins", fontSize: "14px", marginLeft: "5px" }}>
                Login
              </Link>
            </Typography>
          
         
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPwd;
