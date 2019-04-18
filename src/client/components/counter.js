import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    addOne() {
        console.log('add one');
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne() {
        this.setState((prevState)=>{
            console.log(prevState);
            return {
                count: prevState.count - 1
            }
        })
    }
    reset(){
        console.log('handle reset');
        this.setState(() =>{
            return{
                count: 0
            };
        });
  
    }
    render(){

        return(
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
export {Counter as default};