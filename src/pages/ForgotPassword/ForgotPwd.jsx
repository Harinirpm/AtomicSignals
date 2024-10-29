import { Box, Button, Typography, TextField } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo";
import { Link, useNavigate } from "react-router-dom";
import ForgotPwdStyles from "./ForgotPwdStyles";
import BgImg from "../../assets/BackgroundImg";

function ForgotPwd() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(true); // Initially invalid

  const navigate = useNavigate();

  // Email validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  // Handle 'Get Link' click
  const handleClick = () => {
    if (!emailError) {
      navigate("/resetPwd");
    }
  };

  return (
    <Box sx={ForgotPwdStyles.rootStyle}>
      <Box sx={ForgotPwdStyles.rootImg}>
        <BgImg style={ForgotPwdStyles.bgImg} />
      </Box>
      <Box sx={ForgotPwdStyles.container}>
        <Box sx={{ mb: 2 }}>
          <Logo style={{ height: "auto" }} />
        </Box>
        <Typography sx={ForgotPwdStyles.header}>Forgot Password</Typography>
        <Typography sx={ForgotPwdStyles.subHeader}>
          Provide us the registered email to reset your password.
        </Typography>

        {/* Forgot Password Form */}
        <Box component="form" noValidate autoComplete="off" sx={ForgotPwdStyles.form_Box}>
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
            sx={ForgotPwdStyles.textField}
          />

          {/* Get Link Button */}
          <Button
            variant="contained"
            sx={ForgotPwdStyles.buttonStyle_contained}
            disableRipple
            disableElevation
            onClick={handleClick}
            disabled={emailError} // Button enabled only if email is valid
          >
            Get Link
          </Button>

          <Typography sx={ForgotPwdStyles.footerText}>
            Remembered the password?
            <Link
              to="/login"
              style={{
                color: "#353448",
                fontFamily: "Poppins",
                fontSize: "14px",
                marginLeft: "5px",
                textAlign: "right",
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPwd;
