import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import TimePicker from 'react-time-picker';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import {history} from '../routers/AppRouter';

export class EventForm extends React.Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            title: props.event ? props.event.title : '',
            description: props.event ? props.event.description : '',
            location: props.event ? props.event.location : '',
            startTime: props.event ? props.event.startTime : '00:00',
            date: props.event ? props.event.date : moment(),
            category: props.event ? props.event.category : null,
            organizer: props.event ? props.event.organizer : '',
            focused: false,
            error: ''
        };
    }

    onTimeChange = (time) => {
        console.log(time);
        this.setState({
            startTime: time
        });
    };

    onCategoryChange = (e) => {
        console.log(e.target.value);
        const category = e.target.value;
        this.setState({
            category
        });
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({
            title
        });
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({
            description
        });
    };

    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState({
            location
        });
    };

    onOrganizerChange = (e) => {
        const organizer = e.target.value;
        this.setState({
            organizer
        });
        console.log(this.state);
    };

    formSubmitted = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description || !this.state.startTime || !this.state.category) {
            const error = 'Must at least include: title, description, start time, and category.';
            this.setState({error});
        } else {
            this.props.onFormSubmit({
                title: this.state.title,
                description: this.state.description,
                location: this.state.location,
                startTime: this.state.startTime,
                date: this.state.date,
                category: this.state.category,
                organizer: this.state.organizer === '' ? 'Anonymous' : this.state.organizer,
            });
            history.push('/');
        }
    };

    render(){
        return(
            <form onSubmit={this.formSubmitted}>
                <input type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Event Title" />
                <input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Event Description"/>
                <input type="text" value={this.state.location} onChange={this.onLocationChange} placeholder="Event Location"/>
                <TimePicker 
                    onChange={this.onTimeChange}
                    value={this.state.startTime}
                />
                <div>
                    <label>Category:</label>
                    <select  onChange={this.onCategoryChange}>
                        <option value={null} selected disabled>Select Category</option>
                        <option value='Coding'>Coding</option>
                        <option value='Music'>Music</option>
                        <option value='Food'>Food</option>
                    </select>
                </div>
                <SingleDatePicker 
                    date={this.state.date}
                    onDateChange={(date) => this.setState({date})}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({focused})}
                    id='event_date'
                />
                <input type="text" value={this.state.organizer} onChange={this.onOrganizerChange} placeholder="Organizer" />
                <button>Save Event</button>
                {this.state.error}
            </form>
        );
    }
}

export {EventForm as default};