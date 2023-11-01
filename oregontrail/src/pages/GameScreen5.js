import React from 'react';
import bg from "../images/gettyimages-3090888-2.jpg";

const GameScreen5 = () => {


    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <p>Here is the information you put in.</p>
               <li> Leader's Profession:</li>
                  <li> Leader's Name: </li>
                    <li> Party Members </li>
                    <li> Starting Month: </li>
        </div>
    );
};

export default GameScreen5;