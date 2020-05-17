const PLACES_STORE_URL = "places.chillit.com";

export function searchPlaces(query, cityID, offset = 0, amount = 2) {
    return new Promise((resolve, reject) => {
        let url = buildURLQuery("http://" + PLACES_STORE_URL + "/places", {
            "query": query,
            "city_id": cityID,
            "offset": offset,
            "amount": amount,
        });

        fetch(url, {
            method: "GET",
            
        }).then((result) => {
            if (result.status !== 200) {
                reject("bad returned status code " + result.status);
                return;
            }
            result.json().then((result) => {
                resolve(result);
                return;
            }, (error) => {
                reject(error);
                return
            })
        }, (error) => {
            reject(error);
            return;
        });
    });
}

function buildURLQuery(urlString, params) {
    let url = new URL(urlString);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url;
}