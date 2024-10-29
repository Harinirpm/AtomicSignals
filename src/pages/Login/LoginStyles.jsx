
const LogInStyles = {
  
    rootStyle : {
      backgroundColor: "primary.main",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        padding: "0px",
        margin:"0px ",
    },
    rootImg : {
      position: "fixed",
      top: "40%",
      left: "0px",
      width: "100%",
      height: "100%",
  },
    container : {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      maxWidth: "100vw",
      width: { xs: "90%", sm: "300px", md: "350px" },
      height: "auto",
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      boxShadow: "0px 0px 8px 10px #0000000A",
      padding: "30px",
      overflow: "auto",
      },
      header : {
        color: "#353448", 
        fontWeight: "bold", 
        fontSize: "20px",
        marginBottom:"10px",
  
      },
      subHeader : {
        fontSize: "12px", 
        color: "#71707E",
        marginBottom:"10px" 
      },

      bgImg : {
        width: "100%", 
        height: "auto" ,
        objectFit: "cover",
      },

    buttonStyle_contained: {
              backgroundColor: 'secondary.main',
              width: "100%",
              height: "40px",
              fontSize: "14px",
              boxShadow:"none",
             
    },
    textField : {
              "& .MuiOutlinedInput-root": {
                height: "40px",
                marginTop:"-10px",
                padding:"0",
                fontSize:"14px",
              },
              "& .MuiOutlinedInput-input": {
                padding:"10",
                height:"40px",
                boxSizing: "border-box",
                fontSize:"14px",
              }
    },
    form_Box : {
      display: "flex", 
      flexDirection: "column", 
      gap: "20px" ,
    },

    labelStyle : {
              fontFamily: "Poppins",
              color: "#484759",
              fontSize: "12px",
    },
    linkStyle : {
                color: "#353448",
                fontFamily: "Poppins",
                fontSize: "14px",
                marginLeft: "5px",
                textAlign:"right",
    },
    footerText : {
      color: "#71707E",
       textAlign: "center",
       fontSize:"14px",
    }
}
  export default LogInStyles;
  