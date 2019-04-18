import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
   
    render() {
        console.log(this.props);
        return(
        <div>
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

// export default Header;
export {Header as default};

