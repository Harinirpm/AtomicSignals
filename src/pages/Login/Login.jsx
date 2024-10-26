import { Box, Button, Divider, Typography, TextField } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles";
import GroupImg from '../../assets/Group.png';
import Logo from "../../assets/logo.png";
import GIcon from "../../assets/gIcon.png";
import Outlook from "../../assets/outlook.png";
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    backgroundColor: "#5078E1",
    color: "white",
    boxShadow: "none",
    border: "1px solid #5078E1",
    height: "45px",
    width: "100%",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "none",
  },
}));

function Login() {
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


  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/forgotPwd');
  }

  return (
    <Box
      sx={{
        backgroundColor: "#EFEEFB",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "fixed",
        padding: 2,
      }}
    >
      <Box sx={{ position: "fixed",
          top: "40%",
          left: 0,
          width: "100%",
          height: "100%",}}>
        <img src={GroupImg} alt="groupImg" style={{objectFit: "cover", width:"100%",height: "auto", }} />
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
        Welcome!
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#71707E", mb: 2,}}>
        One positive feedback per day or week can make us grow exponentially
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
          <label style={{ fontFamily: "Poppins", color: "#484759",fontSize:"12px" }}>Password</label>
           <TextField
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordError ? 'Password must be at least 6 characters' : ''}
          placeholder="Enter your password"
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
            <Link to="/forgotPwd" style={{ color: "#353448", fontFamily: "Poppins", fontSize: "14px",textAlign:"right"}}>
              Forgot Password?
            </Link>
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

            }}
            onClick={handleClick}
          >
            LogIn
          </Button>
          
         
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
