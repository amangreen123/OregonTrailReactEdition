import "./App.css";
import React from "react";


import Mainmenu from "./mainmenuPage";
import HomePage from "./HomePage";
import TopTen from "./topten";
import Setup from "./setup";
import Trail from "./trail";
import AudioPlayer from './components/AudioPlayer';

import {
    Route,
    Routes
} from "react-router-dom";



function App() {
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage />}> </Route>
                <Route path={"/mainmenu"} element={<Mainmenu />}> </Route>
                <Route path={"/topten"} element={<TopTen />}> </Route>
                <Route path={"/setup"} element={<Setup />}> </Route>
                <Route path={"/trail"} element={<Trail />}> </Route>
            </Routes>
            <AudioPlayer />
        </div>

    )
}

export default App