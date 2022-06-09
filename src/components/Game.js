import React from "react";
import GamePic from "./GamePic";

function Game(){
    let tries = 0;
    return(
        <div>
            <GamePic tries={tries}/>
            <div>test</div>

        </div>
    )
}
export default Game;