import React from "react";

function NavBar(){
    const titlestyle = {
        color: "#61dafb",
        position: "absolute",
        top: "50px",
        left: "50px",
        textAlign: "left",
        fontSize: "calc(20px + 2vmin)",
        backgroundColor: "#282c34",
    }
    return(
        <div style={titlestyle}><b>F4D3D</b></div>
    )
}
export default NavBar;