const AddMemberStyles = {
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
        mb:"10px",
        mt:"10px",
        
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
            mt:"20px",
            // mb:"10px",
      },
      label :{
        color:"#484759",
        fontSize:"12px",
        mb:"15px",
      },
      textField_name :{
        "& .MuiOutlinedInput-root": {
          height: "40px",
          // marginTop:"10px",
          padding:"0",
          fontSize:"14px",
          maxWidth:"480px",
          width:"167%",
          "& fieldset": {
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
    
      },
      textField_email : {
        "& .MuiOutlinedInput-root": {
          height: "40px",
          marginTop:"-10px",
          padding:"0",
          fontSize:"14px",
          maxWidth:"480px",
          width:"167%",
          "& fieldset": {
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
        }
},
textField_date :{
     "& .MuiOutlinedInput-root": {
    height: "40px", 
    width: "217%", 
    maxWidth: "480px", 
    marginTop: "-10px", 
    fontSize: "14px", 
    padding: "0", 
    "& fieldset": {
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
    padding: "0 10px", 
    height: "40px",
    boxSizing: "border-box",
    fontSize: "14px",
  },
  "&::-webkit-datetime-edit-text": {
    color: "gray", 
    fontSize: "12px",
  },
  "& .MuiInputLabel-root": {
    color: "gray",
    fontSize: "10px",
  },
},
dropDownHeader:{
    color:"#484759",
    fontSize:"12px",
    // mt:"10px",
    mb:"10px",
},

}
export default AddMemberStyles;