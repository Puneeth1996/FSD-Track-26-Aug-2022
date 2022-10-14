import React, { Component } from "react";
import PostContainer from './Container/PostContiner/index';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Router from './router';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: ''
    };
  }

  fetchPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      var result = await fetch(url);
      var response = await result.json();
      var data = await response;
      this.setState({ posts: data, loading: false, error: '' });
    } catch (error) {
      console.log(error);
      this.setState({ posts: [], loading: false, error: 'Error in the API call. Please retry.' });
    }
  };

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    let loader = <></>;
    if (this.state.loading) {
      loader = <p> Loading . . . </p>;
    }
    return (
      <>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/">Home</Link>
        <Router />
      </>
    );
  }
}

export default App;



