
// synchronous action creator
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

// asynchronous action creator
export const fetchCountryData = () => {

    

    return (dispatch) => {
    //   https://restcountries.com/v2/name/{name}
        return fetch('https://restcountries.com/v2/name/{name}')
            .then(response => response.json())
            .then(json => console.log(json))
            .then(json => dispatch(
                { type: "FetchData", data: json }))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }

}