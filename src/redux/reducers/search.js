import { ACTION_APPEND_PLACES, ACTION_RESET_PLACES } from "../constants/search";

const initialStatePrototype = {
    places: [],
    offset: 0,
    hasPlaces: false,
};

export function searchReducer(state = initialStatePrototype, action) {
    const newState = { ...state };
    switch (action.type) {
        case ACTION_APPEND_PLACES:
            newState.places = action.payload;
            newState.offset += action.payload.length;
            newState.hasPlaces = (newState.offset > 0) ? true : false;
            return newState;
        case ACTION_RESET_PLACES:
            newState.places = [];
            newState.hasPlaces = false;
            return newState;
        default:
            return state;
    }
}

export function getSearchInitialState() {
    return initialStatePrototype;
}
