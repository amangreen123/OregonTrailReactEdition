import React from "react";
import "./mainmenu.css"
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";

function MainmenuPage (){

    return(
        <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <body>
            <h1>This is the beginning of amazing journey...</h1>
            <h1>Of The Oregon Trail</h1>
            <h1>Choose one of the Options</h1>
            <p>1. Travel the trail</p>
            <p>2. Learn about the trail
            </p>
            <p>3. See the Oregon top 10</p>
            <p>4. Turn Sound (Off / On)</p>
            </body>
        </div>
    )

}

export default MainmenuPage