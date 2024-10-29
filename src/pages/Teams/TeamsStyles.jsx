const TeamsStyles = {
  rootStyle: {
    backgroundColor: "primary.main",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    padding: "0px",
    margin: "0px ",
    zIndex: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:"10px"
  },
  checkBox: {
    color: "black",
    "&.Mui-checked": {
      color: "secondary.main",
    },
  },
  iconButton: {
    backgroundColor: "secondary.main",
    borderRadius: "4px",
    color: "customColors.white",
    "&:hover": {
      backgroundColor: "secondary.main",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
  filterIconBox: {
    fontSize: "2rem",
    mt: "20px",
    ml: "15px",
  },
  divider: {
    height: "100%",
    width: "30px",
    backgroundColor: "#CACACA",
    transform: "rotate(90deg)",
  },
};
export default TeamsStyles;
