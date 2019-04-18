const defaultReducerState = [];

const eventsReducer = (state = defaultReducerState, action) =>{
    switch(action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                action.event
            ]
        default:
            return state;
    };
};

export {eventsReducer as default};