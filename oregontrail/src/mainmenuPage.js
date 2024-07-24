import React from "react";
import "./mainmenu.css"
import bg from "./images/gettyimages-3090888-2.jpg";
import Navigation from "./components/Navigation";

//This is the main menu page of the app
//It is the first page that is rendered when the app is started
//It displays a message and a button to start the game
//The message is fetched from the server
//The button is a link to the main menu page
//The background image is a picture of the Oregon Trail
function MainmenuPage (){


    return(
        //make the background cover the whole page
        <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <body>
            <ol>
                <h1 className= "App">This is the beginning of amazing journey...</h1>
                <h1>Of The Oregon Trail</h1>
                <h1>Choose one of the Options</h1>
                <p>1. Travel the trail</p>
                <p>2. Learn about the trail</p>
                <p>3. See the Oregon Top 10</p>
                <p>4. Turn Sound (Off / On)</p>
            </ol>
            </body>
             <Navigation />
        </div>
    );

}

export default MainmenuPage