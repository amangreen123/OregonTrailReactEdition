import {createStore} from "redux";

const initialState = { playerName: "", groupNames: "", startMonth: "", playerProfession: "", playerMoney: 0};

const oregonTrailReducer = (state = initialState, action) => {
    //don't run async code in the reducer
    if (action.type === "updatePlayerData") {
        return {
            playerProfession: action.payload.playerProfession,
        };
    }
    return state;
};

const store = createStore(oregonTrailReducer);

export default store;