import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    rootStyle : {
        backgroundColor: "#EFEEFB!important",
        width: "100vw!important",
        height: "100vh!important",
        display: "flex!important",
        alignItems: "center!important",
        justifyContent: "center!important",
        overflow: "hidden!important",
        position: "relative!important",
        padding: "0px!important",
        margin:"0px !important",
    },
    container : {
      position: "absolute!important",
      display: "flex!important",
      flexDirection: "column!important",
      maxWidth: "30vw!important",
      width: { xs: "90%!important", sm: "300px!important", md: "250px!important" },
      height: "auto!important",
      backgroundColor: "#FFFFFF!important",
      borderRadius: "8px!important",
      boxShadow: "0px 0px 8px 10px #0000000A!important",
      padding: "30px!important",
      overflow: "auto!important",
      },
      header : {
        color: "#353448!important", 
        fontWeight: "bold!important", 
        fontSize: "20px!important",
        marginBottom:"10px!important",
  
      },
      subHeader : {
        fontSize: "12px!important", 
        color: "#71707E!important",
        marginBottom:"10px!important" 
      },

      bgImg : {
        width: "100%!important", 
        height: "auto!important" 
      },

    buttonStyle_contained: {
              backgroundColor: "#49C792!important",
              borderRadius: "4px!important",
              textTransform: "none!important",
              color: "#FFFFFF!important",
              fontFamily: "Poppins!important",
              width: "100%!important",
              height: "40px!important",
              fontSize: "14px!important",
              boxShadow:"none!important",
             
    },
    
    buttonStyle_outlined : {
      border: "none!important",
      backgroundColor: "#F8F8F8!important",
      borderRadius: "4px!important",
      color: "#353448!important",
      fontFamily: "Poppins!important",
      width: "100%!important",
      height: "40px!important",
      display: "flex!important",
      alignItems: "center!important",
      justifyContent: "center!important",
      position: "relative!important",
      gap: "1px !important",
      marginTop:"10px!important",
      fontSize:"14px!important",
      textTransform:"none!important",
    },
    buttonStyle_withImg : {
      position: "absolute!important",
      left: "10px!important",
      height: "20px!important",
      width: "20px!important",
    },
    textField : {
              "& .MuiOutlinedInput-root": {
                height: "40px!important",
                marginTop:"-10px!important",
                padding:"0!important",
                fontSize:"14px!important",
              },
              "& .MuiOutlinedInput-input": {
                padding:"10!important",
                height:"40px!important",
                boxSizing: "border-box!important",
                fontSize:"14px!important",
              }
    },
    form_Box : {
      display: "flex!important", 
      flexDirection: "column!important", 
      gap: "20px!important" ,
    },
    divider_Box: {
            display: "flex",
            alignItems: "center",
            marginTop:"20px!important",
            marginBottom:"20px!important",
            maxWidth: "254px!important",
            marginLeft: "50px!important",
    },
    labelStyle : {
              fontFamily: "Poppins!important",
              color: "#484759!important",
              fontSize: "12px!important",
    },
    linkStyle : {
                color: "#353448!important",
                fontFamily: "Poppins!important",
                fontSize: "14px!important",
                marginLeft: "5px!important",
    },
    footerText : {
      color: "#71707E!important",
       textAlign: "center!important",
       fontSize:"14px!important",
    }
}));
  export default useStyles;
  