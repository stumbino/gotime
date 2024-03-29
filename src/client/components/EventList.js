import React from 'react';
import {connect} from 'react-redux';
import EventListItem from './EventListItem';

const EventList = (props) => {
    console.log(props);
    return(
        <div>
            {props.events.length === 0 ? 
                ('No Events!') :
                (props.events.map((event) => {
                    return <EventListItem event={event} key={event.id} />
                }))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    events: state.events
});

export default connect(mapStateToProps)(EventList);

