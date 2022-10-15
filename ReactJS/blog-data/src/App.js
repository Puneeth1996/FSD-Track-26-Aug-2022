import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Router from './router';


class App extends Component {
  render() {
    return (
      <>
        <nav className='main-nav'>
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link> |{" "}
          <Link to="/">All Posts</Link>
        </nav>
        <Router />
      </>
    );
  }
}

export default App;



