import { ACTION_PLACES_APPEND, ACTION_PLACES_RESET } from "../constants/search";

const initialStatePrototype = {
    places: [],
};

export function searchReducer(state = initialStatePrototype, action) {
    const newState = { ...state };
    switch (action.type) {
        case ACTION_PLACES_APPEND: 
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
