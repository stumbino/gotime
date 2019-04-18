import React from 'react';
import EventSummary from './EventsSummary';
import {connect} from 'react-redux';
import EventList from './EventList';

const DashboardPage = (props) => {
    console.log(props);
    return(
        <div>
            <EventSummary />
            <EventList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(DashboardPage);