import React, { Component } from 'react';
import PostCard from '../../Component/Post/PostCard';
import "./PostContainer.css";

class PostContainer extends Component {
    render() {
        return (
            <div className='post-container'>
                {this.props.allPosts.length > 0 && this.props.allPosts.map( singlePost => <PostCard postData={singlePost} key={singlePost.id} /> )}
            </div>
        );
    }
}

export default PostContainer;
