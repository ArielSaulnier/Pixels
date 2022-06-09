import React from "react";
import Blur from 'react-blur';

function GamePic(props){
    let image = '../spongebob.jpg' 
    return(
        <Blur img="/spongebob.jpg" blurRadius={5} enableStyles>
  The content.
</Blur>
    )
}
export default GamePic;