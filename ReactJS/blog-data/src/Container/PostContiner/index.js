import React, { Component } from 'react';
import Post from '../../Component/Post';
import "./PostContainer.css";

class PostContainer extends Component {
    render() {
        return (
            <div className='post-container'>
                {this.props.allPosts.length > 0 && this.props.allPosts.map( singlePost => <Post postData={singlePost} /> )}
            </div>
        );
    }
}

export default PostContainer;
