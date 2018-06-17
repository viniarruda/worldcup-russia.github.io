const CupReducer = (state = { isPending: false, list: [] }, action) => {
    switch (action.type) {
        case 'LOAD_MATCH_PENDING':
            state = {
                ...state,
                isPending: true
            };
        break;
        case 'LOAD_MATCH_FULFILLED':
            state = {
                ...state,
                list: action.payload,
                isPending: false
            }
        break;
        default:
            return state
    }
    return state
}

export default CupReducer