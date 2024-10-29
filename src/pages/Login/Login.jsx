import { Box, Button, Typography, TextField } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo";
import { Link, useNavigate } from "react-router-dom";
import LogInStyles from "./LoginStyles";
import BgImg from "../../assets/BackgroundImg";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState(true); 

  const navigate = useNavigate();

  // Email validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  // Password validation (at least 6 characters)
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(newPassword.length < 6);
  };

  // Handle login click
  const handleClick = () => {
    // Only navigate if both fields are valid
    if (!emailError && !passwordError) {
      navigate("/team-members");
    }
  };

  return (
    <Box sx={LogInStyles.rootStyle}>
      <Box sx={LogInStyles.rootImg}>
        <BgImg style={LogInStyles.bgImg} />
      </Box>
      <Box sx={LogInStyles.container}>
        <Box sx={{ mb: 2 }}>
          <Logo style={{ height: "auto" }} />
        </Box>
        <Typography sx={LogInStyles.header}>Welcome!</Typography>
        <Typography sx={LogInStyles.subHeader}>
          One positive feedback per day or week can make us grow exponentially
        </Typography>

        {/* Login Form */}
        <Box component="form" noValidate autoComplete="off" sx={LogInStyles.form_Box}>
          <label
            style={{
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
            }}
          >
            Email
          </label>
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Enter a valid email" : ""}
            placeholder="atomicsignals@gmail.com"
            sx={LogInStyles.textField}
          />

          <label
            style={{
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
            }}
          >
            Password
          </label>
          <TextField
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? "Password must be at least 6 characters" : ""}
            placeholder="Enter your password"
            sx={LogInStyles.textField}
          />

          {/* Forgot Password Link */}
          <Link
            to="/forgotPwd"
            style={{
              color: "#353448",
              fontFamily: "Poppins",
              fontSize: "14px",
              marginLeft: "5px",
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Link>

          {/* Log In Button */}
          <Button
            variant="contained"
            disableRipple
            disableElevation
            sx={LogInStyles.buttonStyle_contained}
            onClick={handleClick}
            disabled={emailError || passwordError}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
