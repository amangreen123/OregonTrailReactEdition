import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGameStates } from "./trailComponents/useGameStates";
import { PlayerInfo } from "./trailComponents/PlayerInfo";
import { TrailStatus } from "./trailComponents/TrailStatus";
import { TrailTerrain } from "./trailComponents/TrailTerrain";
import ErrorBoundary from "./trailComponents/ErrorBoundary";
import "./trail.css";

const Trail = () => {
    const navigate = useNavigate();
    const { gameState, selectedPace, setSelectedPace, updateTrail, resetTrail, isLoading, error } = useGameStates();

    const handlePaceClick = (pace) => {
        setSelectedPace(pace);
    };

    const handleQuit = () => {
        navigate("/mainmenu");
    };

    return (
        <ErrorBoundary>
            <motion.div className="trail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="game-container">
                    <PlayerInfo
                        leader={gameState.playerNames?.[0]}
                        party={gameState.playerNames?.slice(1)}
                        profession={gameState.playerProfession}
                        money={gameState.playerMoney}
                        startMonth={gameState.startMonth}
                        status={gameState.playerStatus}
                    />
                    <TrailStatus
                        health={gameState.groupHealth}
                        milesTraveled={gameState.milesTraveled}
                        daysOnTrail={gameState.daysOnTrail}
                        pace={gameState.currentPace?.name || selectedPace}
                    />
                    <TrailTerrain
                        terrain={gameState.currentTerrain?.name || gameState.terrain}
                        weather={gameState.currentWeather?.type || gameState.weather?.weatherConditions}
                        image={gameState.currentTerrain?.imageUrl || gameState.image}
                    />
                    <div className="game-controls">
                        <div className="pace-controls">
                            <h3>Set Pace</h3>
                            <div className="pace-buttons">
                                {["Steady", "Strenuous", "Grueling", "Resting"].map((pace) => (
                                    <button
                                        key={pace}
                                        className={`game-control-button ${selectedPace === pace ? "selected" : ""}`}
                                        onClick={() => handlePaceClick(pace)}
                                        disabled={isLoading || selectedPace === pace}
                                    >
                                        {pace}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="action-controls">
                            <button className="game-control-button primary" onClick={updateTrail} disabled={isLoading}>
                                Travel Trail
                            </button>
                            <button className="game-control-button warning" onClick={resetTrail} disabled={isLoading}>
                                Reset Game
                            </button>
                            <button className="game-control-button danger" onClick={handleQuit} disabled={isLoading}>
                                Quit Game
                            </button>
                        </div>
                    </div>
                    {isLoading && <p className="loading">Loading...</p>}
                    {error && <p className="error">{error}</p>}
                    {gameState.message && <p className="game-message">{gameState.message}</p>}
                </div>
            </motion.div>
        </ErrorBoundary>
    );
};

export default Trail;
