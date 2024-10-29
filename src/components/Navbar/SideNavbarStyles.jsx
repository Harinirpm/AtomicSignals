const sideNavStyles = {
    rootStyle: {
        width: 67,
        position: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "customColors.blue",
        color: "white",
        zIndex:10,
    },
    drawerHeader : {
        display: "flex",
         flexDirection: "column",
    },
    drawerHeaderTxt: {
        fontSize: "10px", 
        mt: "-20px",
    },
    divider : {
        width: "50%", 
        marginLeft:"15px",
        backgroundColor: "#C2C2C2",
    },
    listItemTop :{
        justifyContent: "center", 
        mb: "0px" 
    },
    listItemButtonTop : {
        justifyContent: "center",
        px: 1,
        display: "flex",
        flexDirection: "column",
    },
    listItemIconTop : {
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "50px",
        height: "50px",
        borderRadius: "10%",
        ml: 1,
    },
    listItemIconBoxStyleTop : (location, path) => ({
        fontSize: "2rem",
                      backgroundColor:
                        location.pathname === path ? "secondary.main" : "#30287E",
                      height: "35px",
                      width:"35px",
                      ml:"-10px",
                      padding:1,
                      borderRadius:"4px"
    }),
    listItemTextTop : {
        fontSize: "10px", 
        mt: "-5px"
    },
    list : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    listItemBottom : {
        justifyContent: "center",
         mb: "10px" 
    },
    listItemButtonBottom : {
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "10%",
    },
    listItemIconButtonBottom :{
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "40px",
        height: "40px",
        borderRadius: "10%",
    },

    listItemIconBoxStyleBottom : (location, path) => ({
        fontSize: "2rem",
        backgroundColor:
        location.pathname === path ? "secondary.main": "#30287E",
        height: "35px",
        width: "35px",
        ml: "-10px",
        padding: 1,
        borderRadius: "4px",
    }),
    
}
export default sideNavStyles;