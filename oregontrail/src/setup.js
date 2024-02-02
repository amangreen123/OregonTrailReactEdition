import React, {useState} from "react";
import "./setup.css";
import bg from "./images/gettyimages-3090888-2.jpg";
import GameScreen1 from "./pages/GameScreen1";
import GameScreen2 from "./pages/GameScreen2";
import GameScreen3 from "./pages/GameScreen3";
import GameScreen4 from "./pages/GameScreen4";
import GameScreen5 from "./pages/GameScreen5";

function SetUp() {
    const [page, setPage] = useState(1);

    const renderPage = () => {
        switch (page) {
            case 1:
                return <GameScreen1 />;
            case 2:
                return <GameScreen2 />;
            case 3:
                return <GameScreen3 />;
            case 4:
                return <GameScreen4 />;
            case 5:
                return <GameScreen5 />;
            default:
                return <GameScreen1 />;
        }
    };

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <h1>SETUP</h1>
            <div id="data">{renderPage()}</div>
        </div>
    );
}

export default SetUp;


