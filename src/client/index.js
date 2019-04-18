import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import {setEvents} from './actions/events';

const axios = require('axios');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
// store.dispatch(startSetEvents());
axios.get('/api/getEvents')
.then((response) => {
    const eventArray = [];
        console.log(response);
        response.data.forEach((event) => {
            console.log(event);
            const addedEvent = {
                id: event._id,
                title: event.title,
                description: event.description,
                location: event.location,
                startTime: event.startTime,
                date: event.date,
                category: event.category,
                organizer: event.organizer
            };
            eventArray.push(addedEvent);
        });
        store.dispatch(setEvents(eventArray));
})
.catch((error) => {
    console.log(error);
});


