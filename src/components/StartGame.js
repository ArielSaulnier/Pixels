import React from 'react';
import Typewriter from "typewriter-effect";

function  StartGame(){
    return(
        <div>
            <div style={typewriterstyle}>
                <Typewriter options={{loop:true}}onInit={(typewriter)=> {
                    typewriter
                    .typeString("HELLO NEWBIE")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("WELCOME TO THE GAME")
                    .pauseFor(2000).start();
                }}/>
    <div className="sheesh">
    <span >Start</span></div></div></div>
    )
}

const typewriterstyle = {
    color: "#61dafb"
}

export default StartGame;