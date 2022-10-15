import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./PostCard.css";

class PostCard extends Component {
    render() {
        return (
            <Card className='post-div'>
                <Card.Body>
                    <Card.Title>{this.props.postData.id}: {this.props.postData.title}</Card.Title>
                    <Card.Text>{this.props.postData.body}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><Link to={"/post/"+this.props.postData.id}>Read this post to check all Comments</Link></Card.Footer>
            </Card>
        );
    }
}

export default PostCard;