import React from  'react';
import moment from 'moment';
import '../styles/list.css';

const EventListItem = (props) => {
    return(
        <div className="item">
            <div className="itemContent">
            <h3 className="item-header">{props.event.title}</h3>
            <p>{props.event.description}</p>
            <p>{moment(props.event.startTime,'HH:mm').format('hh:mm a').toString()}</p>
            <p>{moment(props.event.date).format('dddd, MMMM Do, YYYY').toString()}</p>
            <p>{props.event.location}</p>
            <p>{props.event.organizer}</p>
            <p>{props.event.category}</p>
            </div>
        </div>
    );
}

export {EventListItem as default};