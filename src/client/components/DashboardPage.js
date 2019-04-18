import React from 'react';
import EventSummary from './EventsSummary';
import {connect} from 'react-redux';

const DashboardPage = (props) => {
    console.log(props);
    return(
        <div>
            <EventSummary />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(DashboardPage);