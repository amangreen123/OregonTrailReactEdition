import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "./images/gettyimages-3090888-2.jpg";
import GameScreen1 from "./pages/GameScreen1";
import GameScreen2 from "./pages/GameScreen2";
import GameScreen3 from "./pages/GameScreen3";
import GameScreen4 from "./pages/GameScreen4";
import GameScreen5 from "./pages/GameScreen5";
import "./setup.css";

function SetUp() {
    const [page, setPage] = useState(1);

    const renderPage = () => {
        switch (page) {
            case 1:
                return <GameScreen1 onNext={() => setPage(2)} />;
            case 2:
                return <GameScreen2 onNext={() => setPage(3)} />;
            case 3:
                return <GameScreen3 onNext={() => setPage(4)} />;
            case 4:
                return <GameScreen4 onNext={() => setPage(5)} />;
            case 5:
                return <GameScreen5 />;
            default:
                return <GameScreen1 onNext={() => setPage(2)} />;
        }
    };

    return (
        <div className="setup" style={{ backgroundImage: `url(${bg})` }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="setup-content"
            >
                <h1 className="setup-title">SETUP</h1>
                <div id="data">{renderPage()}</div>
            </motion.div>
        </div>
    );
}

export default SetUp;
