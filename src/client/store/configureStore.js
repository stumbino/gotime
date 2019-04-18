import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventsReducer from '../reducers/EventsReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const configureStore = createStore(
        combineReducers({
            events: eventsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return configureStore;
}