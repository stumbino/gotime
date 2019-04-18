import React from 'react';
import EventForm from './EventForm';
import {addEvent, startAddEvent} from '../actions/events';
import {connect} from 'react-redux';
import '../styles/header.css';
const AddEventPage = (props) => {
    
    const onFormSubmit = (event) => {
        props.add(event);
    };

    return(
        <div>
            <h1 className="sectionHeader"> Add New Event </h1>
            <EventForm onFormSubmit={onFormSubmit} />
        </div>
    );
};

const  mapPropsToDispatch = (dispatch) => ({
    add: (event) =>  dispatch(startAddEvent(event))
});

export default connect(undefined, mapPropsToDispatch)(AddEventPage);