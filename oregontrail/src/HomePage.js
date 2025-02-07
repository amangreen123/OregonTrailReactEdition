import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import bg from "./images/gettyimages-3090888-2.jpg"
import "./HomePage.css"
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";

//This is the home page of the app
//It is the first page that is rendered when the app is started
//It displays a message and a button to start the game
//The message is fetched from the server
//The button is a link to the main menu page
//The background image is a picture of the Oregon Trail
//The background image is from https://www.gettyimages.com/detail/photo/oregon-trail-high-res-stock-photography/3090888?adppopup=true

function HomePage() {
    const [message, setMessage] = useState("")
    const apiUrl = process.env.REACT_APP_API_URL

    useEffect(() => {
        fetch(`${apiUrl}/message`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
    }, [apiUrl])

    return (
        <div className="home-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="title"
                >
                    {message}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link to="/mainmenu" className="start-button">
                        Press to Start
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HomePage