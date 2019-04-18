const defaultReducerState = [];

const eventsReducer = (state = defaultReducerState, action) =>{
    switch(action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                action.event
            ];
        case 'SET_EVENTS':
            return action.events;
        default:
            return state;
    };
};

export {eventsReducer as default};