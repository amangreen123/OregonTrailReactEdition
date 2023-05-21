import menuMusic from "../music/MenuMusic.mp3"
import useSound from 'use-sound'
import { useState, useEffect } from "react";

const AudioPlayer = (event) => {
    const [playSound,{pause}] = useSound(menuMusic)
    const [isSoundOn, setIsSoundOn] = useState(true);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "4") {
                if (isSoundOn) {
                    pause();
                } else {
                    playSound();
                }
                setIsSoundOn(!isSoundOn);
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [isSoundOn, playSound, pause]);

    return(
        <div>
            <div>Press the "4" key to {isSoundOn ? "turn sound off" : "turn sound on"}.</div>;
        </div>
    )
};
export default AudioPlayer;