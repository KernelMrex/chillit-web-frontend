import { ACTION_PLACES_RESET, ACTION_PLACES_APPEND } from "../constants/search";

export function placesAppend(payload) {
    return { type: ACTION_PLACES_APPEND, payload: payload };
}

export function placesReset() {
    return { type: ACTION_PLACES_RESET };
}