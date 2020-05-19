import { 
    ACTION_PLACES_RESET, 
    ACTION_PLACES_STORE, 
    ACTION_CITIES_APPEND 
} from "../constants/search";

export function placesAppend(payload) {
    return { type: ACTION_PLACES_STORE, payload: payload };
}

export function placesReset() {
    return { type: ACTION_PLACES_RESET };
}

export function citiesAppend(payload) {
    return { type: ACTION_CITIES_APPEND, payload: payload }
}

export function saveSearchQuery(payload) {
    return {}
}