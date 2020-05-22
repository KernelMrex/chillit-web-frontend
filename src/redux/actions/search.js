import { 
    ACTION_APPEND_PLACES, ACTION_RESET_PLACES, 
} from "../constants/search";

export function appendPlaces(payload) {
    return { type: ACTION_APPEND_PLACES, payload: payload }
}

export function resetPlaces() {
    return { type: ACTION_RESET_PLACES };
}