import { ACTION_PLACES_APPEND, ACTION_PLACES_RESET } from "../constants/search";

const initialStatePrototype = {
    places: [],
};

export function searchReducer(state = initialStatePrototype, action) {
    const newState = { ...state };
    switch (action.type) {
        case ACTION_PLACES_APPEND: 
            newState.places.push(...action.payload);
            return newState;
        case ACTION_PLACES_RESET:
            newState.places = [];
            return newState;
        default:
            return state;
    }
}

function getSearchInitialState() {
    return initialStatePrototype;
}
