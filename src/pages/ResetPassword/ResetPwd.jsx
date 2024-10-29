import {
  Box,
  Button,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResetPwdStyles from "./ResetPwdStyles";
import BgImg from "../../assets/BackgroundImg";
import Logo from "../../assets/Logo";

function ResetPwd() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackbarOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.length < 6);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(e.target.value !== password);
  };

  const navigate = useNavigate();
  
  // Handle the Reset Password button click
  const handleClick = () => {
    if (!passwordError && !confirmPasswordError) {
      // Perform your password reset logic here
      setSnackbarOpen(true); // Show success Snackbar
      navigate("/forgotPwd"); // Navigate if required
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={ResetPwdStyles.rootStyle}>
      <Box sx={ResetPwdStyles.rootImg}>
        <BgImg style={ResetPwdStyles.bgImg} />
      </Box>
      <Box style={ResetPwdStyles.container}>
        <Box sx={{ mb: 2 }}>
          <Logo style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
        <Typography sx={ResetPwdStyles.header}>Reset Password</Typography>
        <Typography sx={ResetPwdStyles.subHeader}>
          Please provide a new password for your account
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={ResetPwdStyles.form_Box}
        >
          <label
            style={{
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
            }}
          >
            New password <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={
              passwordError ? "Password must be at least 6 characters" : ""
            }
            placeholder="Enter your password"
            sx={ResetPwdStyles.textField}
          />
          <label
            style={{
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
            }}
          >
            Confirm new password <span style={{ color: "red" }}>*</span>
          </label>
          <TextField
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? "Passwords must match" : ""}
            placeholder="Confirm your password"
            sx={ResetPwdStyles.textField}
          />
          <Button
            variant="contained"
            disableRipple
            disableElevation
            sx={ResetPwdStyles.buttonStyle_contained}
            onClick={handleClick}
            disabled={passwordError || confirmPasswordError} // Disable button if errors exist
          >
            Reset Password
          </Button>
        </Box>

        {/* Snackbar with Alert */}
        <Snackbar
          autoHideDuration={3000}
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} 
        >
          <Alert
            onClose={handleSnackbarClose}
            icon={false}
            variant="filled"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              mb: "20px",
              backgroundColor: "#CEF3E4", 
              border: "1px solid #7FDCA4",
              color: "black",
              borderRadius: "10px",
            }}
          >
            Link sent to registered email
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default ResetPwd;
