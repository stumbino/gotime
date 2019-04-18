import React from 'react';
import ReactDOM from 'react-dom';

class HandleVisible extends React.Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            visibility: false
        }
    }
    toggle(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
          <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
              {this.state.visibility && (
                    <div>
                      <p> Hey. These are some details you can now see!</p>
                    </div>
              )}
          </div>  
        )
    }
}
export {HandleVisible as default};