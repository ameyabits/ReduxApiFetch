const defaultState = {
    data: []
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === 'fetchmydata') {
        return {
            ...state,
            data: action.data
        };
    }
     
        return {
            ...state
        };
};

export default mainReducer;
