import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Header from './components/header';
import Counter from './components/counter';
import HandleVisible from './components/handleVisible';
export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const title = 'Indecision'
    const { username } = this.state;
    return (
      <div>
        <Header title = {title} />
        <HandleVisible/>
        <Counter />
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
