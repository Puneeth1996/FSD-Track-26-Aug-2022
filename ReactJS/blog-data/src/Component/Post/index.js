import React, { Component } from 'react';
import "./Post.css";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div key={this.props.postData.id} className='post-div'>
                <p>{this.props.postData.userId}</p>
                <p>{this.props.postData.title}</p>
                <p>{this.props.postData.body}</p>
            </div>
        );
    }
}

export default Post;
