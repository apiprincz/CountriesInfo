const initialState = {
    num: 0,
    data: null,
    error: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
       
        case "FetchData":
            return { ...state, data: action.data, }
        
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}


export default reducer