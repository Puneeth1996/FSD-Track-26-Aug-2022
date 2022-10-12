import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  fetchPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    var result = await fetch(url);
    var response = await result.json();
    var data = await response;
    this.setState({ posts: data });
    return data;
  };

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    return (
      <>
        <div className='post-container'>
          {this.state.posts.length > 0 &&
            this.state.posts.map( singlePost => {
              return (
                <div key={singlePost.id} className='post-div'>
                  <p>{singlePost.userId}</p>
                  <p>{singlePost.title}</p>
                  <p>{singlePost.body}</p>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default App;
