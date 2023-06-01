import menuMusic from "../music/MenuMusic.mp3"
import useSound from 'use-sound'
import { useState, useEffect } from "react";

const AudioPlayer = (event) => {
    const [playSound,{pause}] = useSound(menuMusic)
    const [isSoundOn, setIsSoundOn] = useState(true);

    useEffect(() => {
        const handleKeyPress = (event) => {
            event.preventDefault();
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

};
export default AudioPlayer;