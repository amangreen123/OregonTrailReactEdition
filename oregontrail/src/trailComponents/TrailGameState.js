import { useState, useEffect } from 'react';
import {getPlayerData,updateGameState,resetGameState} from "../Services";


export const useGameStates = (initialState) => {

    const [gameState, setGameState] = useState(initialState);
    const [selectedPace, setSelectedPace] = useState("");

    useEffect(() => {
        getPlayerData().then(data => setGameState(data));
    }, []);

    const updateTrail = async () => {
        if (!selectedPace) {
            alert('Please Select Pace');
            return;
        }

        const updatedTrail = await updateGameState(gameState, selectedPace);
        setGameState(updatedTrail)
    };

    const resetTrail = async () => {
        await resetGameState();
        setGameState(initialState)
    };

    return {gameState,setGameState,selectedPace,setSelectedPace,updateTrail,resetTrail}
}