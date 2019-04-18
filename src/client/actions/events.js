const axios = require('axios');

export const addEvent = ({id,title, description, location, startTime, category, organizer, date}) => {
    return{
        type: 'ADD_EVENT',
        event: {
            id,
            title,
            description,
            location,
            startTime,
            category,
            organizer,
            date
        }
    };
};

export const startAddEvent = ({title, description, location, startTime, category, date, organizer = 'Anonymous'}) => {
        const event = {title, description, location, startTime, category, date, organizer};
        return (dispatch, getState) => {
            axios.post('/api/postEvent', event)
            .then((response)=> {
                console.log(response);
                dispatch(addEvent({...event, id: response.data._id}));
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export const startSetEvents = () => {
    return (dispatch, getState) =>{
    axios.get('/api/getEvents')
    .then((response) => {
        const eventArray = [];
        response.forEach((event) => {
            const data = event.data;
            const addedEvent = {
                id: data._id,
                title: data.title,
                description: data.description,
                location: data.location,
                startTime: data.startTime,
                date: data.date,
                category: data.category,
                organizer: data.organizer
            };
            eventArray.push(addEvent);
        });
        dispatch(setEvents(eventArray));
    })
    .catch((error) => {
        console.log(error);
    });
    }
}

export const setEvents = (events) => {
    return {
        type: 'SET_EVENTS',
        events
    };
};
