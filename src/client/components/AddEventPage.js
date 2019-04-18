import React from 'react';
import EventForm from './EventForm';
import {addEvent} from '../actions/events';
import {connect} from 'react-redux';
const AddEventPage = (props) => {
    
    const onFormSubmit = (event) => {
        props.add(event);
    };

    return(
        <div>
            <h1> Add New Event </h1>
            <EventForm onFormSubmit={onFormSubmit} />
        </div>
    );
};

const  mapPropsToDispatch = (dispatch) => ({
    add: (event) =>  dispatch(addEvent(event))
});

export default connect(undefined, mapPropsToDispatch)(AddEventPage);