import {createStore} from "redux";

const initialState = { playerName: "", groupNames: {
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    },
    Month: "",
    playerProfession: ""
};


const oregonTrailReducer = (state = initialState, action) => {
    //don't run async code in the reducer
    if (action.type === "updatePlayerData") {
        return {
            ...state,
            playerProfession: action.payload.playerProfession,
        };
    }
    if (action.type === "updatePlayerName") {
        return {
            ...state,
            playerName: action.payload.playerName,
        };
    }
    if (action.type === "updateGroupNames") {
        return {
            ...state,
            groupNames: action.payload.playerNames,
        };
    }
    if (action.type === "updateStartMonth") {
        return {
            ...state,
            startMonth: action.payload.startMonth,
        };
    }
    return state;
};

// const store = createStore(oregonTrailReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
// ));

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);

    } catch (error) {
        console.error("Error loading state:", error);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);

    } catch (error) {
        console.error("Error saving state:", error);
    }
}

const persistedState = loadState();

const store = createStore(oregonTrailReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
));

//This calls every time when store is saved
store.subscribe(() => {
    saveState(store.getState());
});


export default store;