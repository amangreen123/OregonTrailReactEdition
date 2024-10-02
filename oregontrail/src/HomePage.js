import React, {useEffect, useState} from "react";
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";

//This is the home page of the app
//It is the first page that is rendered when the app is started
//It displays a message and a button to start the game
//The message is fetched from the server
//The button is a link to the main menu page
//The background image is a picture of the Oregon Trail
//The background image is from https://www.gettyimages.com/detail/photo/oregon-trail-high-res-stock-photography/3090888?adppopup=true
function HomePage () {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("https://agoregontrail.org/api/Message")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return(
    <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
        <h1>{message}</h1>
        <h2 className="h2"><Fader text={"Press SPACEBAR TO START!"}></Fader></h2>
        <Navigation />
    </div>
    );
}

export default HomePage