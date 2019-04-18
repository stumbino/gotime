import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import {Link} from 'react-router-dom';


export class EventSummary extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchParameter: '',
            calendarStartDate: null, //moment().startOf('month'),
            calendarEndDate: null, //moment().endOf('month'),
            focused: null
        }
    }

    onSearchChange = (e) => {
        const value = e.target.value;
        this.setState({
            searchValue: value
        });
    };

    datesChanged = (startDate, endDate) => {
        this.setState({
            calendarStartDate: startDate,
            calendarEndDate: endDate
        });
    };

    render(){
        return(
            <div>
                <div>
                    <p>Currently viewing 0 events</p>
                </div>
                <div>
                    <p>Search</p>
                    <input type="text" onChange={this.onSearchChange} value={this.state.searchValue} />
                    <select>
                        <option value="Name">Name</option>
                        <option value="Date">Date</option>
                    </select>
                    <DateRangePicker 
                       startDate={this.state.calendarStartDate}
                       startDateId='selectedStartDate'
                       endDate={this.state.calendarEndDate}
                       endDateId='selectedEndDate'
                       onDatesChange={({startDate, endDate}) => this.datesChanged(startDate, endDate)}
                       focusedInput={this.state.focused}
                       onFocusChange={(focusedInput) => this.setState({focused: focusedInput})} 
                    />
                </div>
                <Link to='/createEvent'>Create Event</Link>
            </div>
        );
    }
};

export {EventSummary as default};