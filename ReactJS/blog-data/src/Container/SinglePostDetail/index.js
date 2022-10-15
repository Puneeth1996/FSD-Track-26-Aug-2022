import React, { Component } from 'react';

class SinglePostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            singlePostDetail: [],
            postComments: []
        };
    }


    fetchSinglePostDetail = async (idFromPath) => {
        const url = "https://jsonplaceholder.typicode.com/posts/"+idFromPath;
        try {
            var result = await fetch(url);
            var response = await result.json();
            var data = await response;
            this.setState({ singlePostDetail: data});
        } catch (error) {
            console.log(error+"fetchSinglePostDetail");
        }
    };
    fetchPostComments = async (idFromPath) => {
        const url = "https://jsonplaceholder.typicode.com/posts/"+idFromPath+"/comments";
        try {
            var result = await fetch(url);
            var response = await result.json();
            var data = await response;
            this.setState({ postComments: data});
        } catch (error) {
            console.log(error+"fetchPostComments");
        }
    };


    componentDidMount() {
        let idFromPath = parseInt(window.location.pathname.split('/')[2]);
        if(Number.isInteger(idFromPath)){
            this.setState({ id: idFromPath })
        } else {
            console.log('Not a number');
        }
        // other way 
        // let valFromPath = window.location.pathname.split('/')[2]
        // check if contains characters
        // strings are iterable ie, contains array of characters



        // Next steps 
        // make the api call 
        // https://jsonplaceholder.typicode.com/posts/1  // details for the poarticular post id 
        this.fetchSinglePostDetail(idFromPath);

        // https://jsonplaceholder.typicode.com/posts/1/comments // list of comments for the particular post id  
        this.fetchPostComments(idFromPath);
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>Post ID: {this.state.singlePostDetail.id}</div>
                <div>Post Body: {this.state.singlePostDetail.body}</div>
                <div>Post Comments: {this.state.postComments.map(singleComment => 
                        <div style={{ margin: 50 }}>
                            <p>{singleComment.name}</p>
                            <p>{singleComment.body}</p>
                            <p>{singleComment.email}</p>
                        </div>
                )}</div>
            </div>
        );
    }
}

export default SinglePostDetail;
