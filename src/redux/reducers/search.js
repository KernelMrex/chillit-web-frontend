import { ACTION_PLACES_STORE, ACTION_PLACES_RESET } from "../constants/search";

const initialStatePrototype = {
    query: {
        text: "",
        city_id: 0,
    },
    places: [],
};

export function searchReducer(state = initialStatePrototype, action) {
    const newState = { ...state };
    switch (action.type) {
        case ACTION_PLACES_STORE: 
            newState.places = action.payload;
            return newState;
        case ACTION_PLACES_RESET:
            newState.places = [];
            return newState;
        default:
            return state;
    }
}

export function getSearchInitialState() {
    return initialStatePrototype;
}
