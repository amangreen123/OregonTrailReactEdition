import { useState, useEffect, useCallback } from "react";
import { getPlayerData, updateGameState, resetGameState } from "../API/Services";

const initialGameState = {
    groupHealth: 100,
    milesTraveled: 0,
    daysOnTrail: 0,
    message: "",
    playerNames: [],
    playerStatus: "",
    playerProfession: "",
    playerMoney: 0,
    startMonth: "",
    pace: "",
    weather: { weatherConditions: "" },
    terrain: "",
    image: "/images/default.jpg",
};

export const useGameStates = () => {
    const [gameState, setGameState] = useState(initialGameState);
    const [selectedPace, setSelectedPace] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            setIsLoading(true);
            try {
                const data = await getPlayerData();
                setGameState(prevState => ({
                    ...prevState,
                    ...data,
                    image: data.image || prevState.image,
                }));
            } catch (err) {
                setError("Failed to fetch player data. Please try again.");
                console.error("Error fetching player data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlayerData();
    }, []);

    const updateTrail = useCallback(async () => {
        if (!selectedPace) {
            alert("Please Select Pace");
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            const updatedTrail = await updateGameState(gameState, selectedPace);
            setGameState(prevState => ({
                ...prevState,
                ...updatedTrail,
                // Preserve important player information
                playerNames: prevState.playerNames.length ? prevState.playerNames : updatedTrail.playerNames,
                playerProfession: prevState.playerProfession || updatedTrail.playerProfession,
                playerMoney: prevState.playerMoney || updatedTrail.playerMoney,
                startMonth: prevState.startMonth || updatedTrail.startMonth,
                playerStatus: prevState.playerStatus || updatedTrail.playerStatus,
                image: updatedTrail.image || prevState.image,
            }));
        } catch (err) {
            setError("Failed to update trail. Please try again.");
            console.error("Error updating trail:", err);
        } finally {
            setIsLoading(false);
        }
    }, [gameState, selectedPace]);

    const resetTrail = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            await resetGameState();
            setGameState(initialGameState);
            setSelectedPace("");
        } catch (err) {
            setError("Failed to reset trail. Please try again.");
            console.error("Error resetting trail:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Debug logging
    useEffect(() => {
        console.log("Game state updated:", gameState);
    }, [gameState]);

    return {
        gameState,
        setGameState,
        selectedPace,
        setSelectedPace,
        updateTrail,
        resetTrail,
        isLoading,
        error,
    };
};
