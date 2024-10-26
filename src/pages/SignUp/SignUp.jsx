import { Box, Button, Divider, Typography, TextField } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles";
import GroupImg from '../../assets/Group.png';
import Logo from "../../assets/logo.png";
import GIcon from "../../assets/gIcon.png";
import Outlook from "../../assets/outlook.png";
import { Link, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../components/useWindowDimention/UseWindowDimention';

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

function SignUp() {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const size = useWindowDimensions()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };

  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/team-members');
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
        position: "relative",
        padding: 2,
        margin:"0px !important"
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
          Sign Up
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#71707E", mb: 3 }}>
          You're just a few details away from setting up a feedback culture and thriving environment.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              border: "none",
              backgroundColor: "#F8F8F8",
              borderRadius: "4px",
              textTransform: "none",
              color: "#353448",
              fontFamily: "Poppins",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={GIcon}
              alt="gIcon"
              sx={{
                position: "absolute",
                left: "10px",
                height: "20px",
                width: "20px",
              }}
            />
            Sign Up with Google
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "none",
              backgroundColor: "#F8F8F8",
              borderRadius: "4px",
              textTransform: "none",
              color: "#353448",
              fontFamily: "Poppins",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={Outlook}
              alt="Outlook icon"
              sx={{
                position: "absolute",
                left: "10px",
                height: "20px",
                width: "20px",
              }}
            />
            Sign Up with Outlook
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", my: 3,maxWidth:"254px",ml:"50px" }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ px: 1, fontSize: "12px", color: "gray" }}>Or</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <label style={{ fontFamily: "Poppins", color: "#484759",fontSize:"12px" }}>Work Email <span style={{ color: "red" }}>*</span></label>
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
            }}
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Typography sx={{ color: "#71707E", textAlign: "center", }}>
            Already have an account?
            <Link to="/login" style={{ color: "#353448", fontFamily: "Poppins", fontSize: "14px", marginLeft: "5px" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
