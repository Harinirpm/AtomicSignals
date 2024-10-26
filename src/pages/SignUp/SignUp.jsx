import { Box, Button, Divider, Typography, TextField } from "@mui/material";
import React from "react";
import GroupImg from "../../assets/Group.png";
import Logo from "../../assets/logo.png";
import GIcon from "../../assets/gIcon.png";
import Outlook from "../../assets/outlook.png";
import { Link, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../components/useWindowDimention/UseWindowDimention";
import useStyles from "../../styles/SignUpStyles";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const size = useWindowDimensions();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/team-members");
  };
  return (
    <Box className={classes.rootStyle}>
      <Box>
        <img src={GroupImg} alt="groupImg" className={classes.bgImg} />
      </Box>
      <Box className={classes.container}>
        <Box sx={{ mb: 2 }}>
          <img src={Logo} alt="logo" style={{ height: "auto" }} />
        </Box>
        <Typography className={classes.header}>Sign Up</Typography>
        <Typography className={classes.subHeader}>
          You're just a few details away from setting up a feedback culture and
          thriving environment.
        </Typography>
        <Button variant="outlined" className={classes.buttonStyle_outlined}>
          <Box
            component="img"
            src={GIcon}
            alt="gIcon"
            className={classes.buttonStyle_withImg}
          />
          Sign Up with Google
        </Button>
        <Button variant="outlined" className={classes.buttonStyle_outlined}>
          <Box
            component="img"
            src={Outlook}
            alt="Outlook icon"
            className={classes.buttonStyle_withImg}
          />
          Sign Up with Outlook
        </Button>
        <Box className={classes.divider_Box}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ px: 1, fontSize: "12px", color: "gray" }}>
            Or
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={classes.form_Box}
        >
          <label className={classes.labelStyle}>
            Work Email <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Enter a valid email" : ""}
            placeholder="atomicsignals@gmail.com"
            className={classes.textField}
          />

          <Button
            variant="contained"
            disableRipple
            disableElevation
            onClick={handleClick}
            className={classes.buttonStyle_contained}
          >
            Sign Up
          </Button>
          <Typography className={classes.footerText}>
            Already have an account?
            <Link to="/login" className={classes.linkStyle}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
