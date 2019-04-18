
export const addEvent = ({title, description, location, startTime, category, organizer, date} = {
    title: '',
    description: '',
    location: '',
    startTime: '00:00',
    category: null,
    date: null,
    organizer: 'Anonymous'
}) => {
    return{
        type: 'ADD_EVENT',
        event: {
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
