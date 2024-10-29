const filtersStyle = {
  rootStyle: {
    padding: 0,
    // ml:"20px"
  },
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    color: "#353448",
    fontSize: "16px",
    marginLeft:"20px",
    mb:"10px"
    
  },
  divider: {
    backgroundColor: "#fcfcfc",
    height: "1px",
  },
  body :{
    ml:"20px",
    mr:"20px",
  },
  subHeader :{
    color:"#484759",
    fontSize:"12px",
    mt:"10px",
    mb:"10px",
  },
  textField :{
    "& .MuiOutlinedInput-root": {
      height: "40px",
      // marginTop:"10px",
      padding:"0",
      fontSize:"14px",
      maxWidth:"480px",
      width:"167%","& fieldset": {
      borderColor: "#BDBDBD", 
      borderWidth: "1px", 
    },
    "&:hover fieldset": {
      borderColor: "#49C792",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#49C792", 
    },
      
    },
    "& .MuiOutlinedInput-input": {
      padding:"10",
      height:"40px",
      boxSizing: "border-box",
      fontSize:"14px",
      
    },

  }
};
export default filtersStyle;
