import {createStore} from "redux";

const initialState = { playerName: "", groupNames: "", startMonth: "", playerProfession: "", playerMoney: 0};

const oregonTrailReducer = (state = initialState, action) => {

    if(action.type === "updatePlayer") {
        return {
            playerProfession: action.playerProfession,
            playerMoney: action.playerMoney,
        };
    }

    // if(action.type === "updatePlayerName") {
    //     return {
    //         playerName: action.playerName,
    //     };
    // }
    //
    // if(action.type === "updateGroupNames") {
    //     return {
    //         groupNames: action.groupNames,
    //     };
    // }
    //
    // if (action.type === "updateStartMonth") {
    //     return {
    //         startMonth: action.startMonth,
    //     };
    // }
    return state;
};

const store = createStore(oregonTrailReducer);

export default store;