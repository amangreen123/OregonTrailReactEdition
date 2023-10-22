import "./App.css";
import React from "react";

import Mainmenu from "./mainmenuPage";
import HomePage from "./HomePage";
import TopTen from "./topten";
import Setup from "./setup";
import Trail from "./trail";
import AudioPlayer from './components/AudioPlayer';
import GameScreen1 from "./components/GameScreen1";
import GameScreen3 from "./components/GameScreen3";
import GameScreen4 from "./components/GameScreen4";
import GameScreen5 from "./components/GameScreen5";
import GameScreen2 from "./components/GameScreen2";


import {
    Route,
    Routes,
} from "react-router-dom";

//Client slide routing for the app using react-router-dom
//Each route is a page in the app
//The path is the url path to the page
//The element is the component that is rendered when the path is matched
//The component is the page that is rendered when the path is matched

function App() {
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage />}></Route>
                <Route path={"/mainmenu"} element={<Mainmenu />}> </Route>
                <Route path={"/topten"} element={<TopTen />}> </Route>
                <Route path={"/setup"} element={<Setup />}> </Route>
                <Route path={"/trail"} element={<Trail />}> </Route>
                <Route path={"/GameScreen1"} element={<GameScreen1 />}> </Route>
                <Route path={"/GameScreen2"} element={<GameScreen2 />}> </Route>
                <Route path={"/GameScreen3"} element={<GameScreen3 />}> </Route>
                <Route path={"/GameScreen4"} element={<GameScreen4 />}> </Route>
                <Route path={"/GameScreen5"} element={<GameScreen5 />}> </Route>
            </Routes>
            <AudioPlayer/>
        </div>
    )
}

export default App