import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getPlayerData = async () => {
    const response = await axios.get(`${apiUrl}/setup/Player`);
    return response.data;
};

export const updateGameState = async (gameState, pace) => {
    const response = await axios.get(`${apiUrl}/updateGame`, { params: { ...gameState, pace } });
    return response.data;
};

export const resetGameState = async (initialState) => {
    const response = await axios.get(`${apiUrl}/resetGame`, { params: initialState });
    return response.data;
};