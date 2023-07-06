import React, {useEffect, useState} from "react";
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";

function HomePage () {

    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return(
    <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
        <h1>{message}</h1>
        <h2 className="h2"><Fader text={"Press SPACEBAR TO START"}></Fader></h2>
        <Navigation />
    </div>
    );
}

export default HomePage