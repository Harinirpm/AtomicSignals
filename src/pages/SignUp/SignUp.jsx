import { Box, Button, Divider, Typography, TextField } from "@mui/material";
import React from "react";
import GIcon from "../../assets/gIcon.png";
import Outlook from "../../assets/outlook.png";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowDimention/UseWindowDimention";
import SignUpStyles from "./SignUpStyles";
import BgImg from "../../assets/BackgroundImg";
import Logo from "../../assets/Logo";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(true);
  const size = useWindowDimensions();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmailError(!isValid);
  };

  const handleClick = () => {
    if (!emailError) {
      navigate("/team-members");
    }
  };

  return (
    <Box sx={SignUpStyles.rootStyle}>
      <Box sx={SignUpStyles.rootImg}>
        <BgImg style={SignUpStyles.bgImg} />
      </Box>
      <Box sx={SignUpStyles.container}>
        <Box sx={{ mb: 2 }}>
          <Logo style={{ height: "auto" }} />
        </Box>
        <Typography sx={SignUpStyles.header}>Sign Up</Typography>
        <Typography sx={SignUpStyles.subHeader}>
          You're just a few details away from setting up a feedback culture and
          thriving environment.
        </Typography>
        
        {/* Sign up with Google and Outlook buttons */}
        <Button variant="outlined" sx={SignUpStyles.buttonStyle_outlined}>
          <Box
            component="img"
            src={GIcon}
            alt="gIcon"
            sx={SignUpStyles.buttonStyle_withImg}
          />
          Sign Up with Google
        </Button>
        <Button variant="outlined" sx={SignUpStyles.buttonStyle_outlined}>
          <Box
            component="img"
            src={Outlook}
            alt="Outlook icon"
            sx={SignUpStyles.buttonStyle_withImg}
          />
          Sign Up with Outlook
        </Button>
        
        {/* Divider and form section */}
        <Box sx={SignUpStyles.divider_Box}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ px: 1, fontSize: "12px", color: "gray" }}>
            Or
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Email form */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={SignUpStyles.form_Box}
        >
          <label
            style={{
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
            }}
          >
            Work Email <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Enter a valid email" : ""}
            placeholder="atomicsignals@gmail.com"
            sx={SignUpStyles.textField}
          />

          <Button
            variant="contained"
            disableRipple
            disableElevation
            onClick={handleClick}
            disabled={emailError} // Disable button if email is invalid
            sx={SignUpStyles.buttonStyle_contained}
          >
            Sign Up
          </Button>
          <Typography sx={SignUpStyles.footerText}>
            Already have an account?
            <Link
              to="/login"
              style={{
                color: "#353448",
                fontFamily: "Poppins",
                fontSize: "14px",
                marginLeft: "5px",
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

export default SignUp;
