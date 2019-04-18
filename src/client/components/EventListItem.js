import React from  'react';
import moment from 'moment';

const EventListItem = (props) => {
    return(
        <div>
            <h3>{props.event.title}</h3>
            <p>{props.event.description}</p>
            <p>{moment(props.event.startTime,'HH:mm').format('hh:mm a').toString()}</p>
            <p>{moment(props.event.date).format('dddd, MMMM Do, YYYY').toString()}</p>
            <p>{props.event.location}</p>
            <p>{props.event.organizer}</p>
            <p>{props.event.category}</p>
        </div>
    );
}

export {EventListItem as default};