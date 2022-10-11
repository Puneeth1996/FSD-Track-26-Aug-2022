import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts : [] 
    };
  }

  fetchPost = async (event) => {
    console.log('Button was clicked');
    // var result = await ();
    //   .then(response => response.json())
    //   .then(data => data);
    // setInterval(() => {
    //   console.log(result);
    // }, 1000);
    const url = 'https://jsonplaceholder.typicode.com/posts'
    var result = await fetch(url);
    var response = await result.json();
    var data =  await response;
    console.log(data);
    data.forEach( element => {
      console.log(element)
    });
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={ event => this.fetchPost(event)}>Make Post GET Call</button>
      </div>
    )
  }
}

export default App;

