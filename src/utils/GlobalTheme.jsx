import { createTheme } from "@mui/material/styles";

export const globalTheme = createTheme({
  palette: {
    primary: {
      //light gray for bgColor
      main: "#EFEEFB", 
      contrastText: "#FFFFFF", 
    },
    secondary: {
      // green color for buttons
      main: "#49C792", 
      contrastText: "#FFFFFF",
    },
    customColors : {
      //white color
      white : "white",
      // dark blue for navbar
        blue : "#1B1558", 
      //glass color for google signIn
        glassColor : "#F8F8F8" 

    }
  },
  typography:{
    fontFamily: "Poppins",
},
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,   
        disableElevation: true, 
        disableTouchRipple:true,
        disableFocusRipple:true,
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: 4,
            fontFamily: "Poppins",
            textTransform: "none",
            color: "#FFFFFF",
            backgroundColor:"#49C792",
            boxShadow:"none",
            "&:hover": {
            boxShadow: "none",
          },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "#49C792",
            borderColor: "#49C792",
            borderRadius: 4,
            textTransform: "none",
            fontFamily: "Poppins",
            
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiTextField: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins", 
          },
          input: {
            fontFamily: "Poppins",
          },
        },
    },
  },
});
