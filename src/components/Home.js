import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from '../img.png';

class Home extends Component{
    state ={
        posts : [ ]
    }
    // react life cycel method, must execute Aioxs inside it
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts : response.data.slice(0,10)
                })
            })
    }
    render(){
        // distruction 
        const { posts } = this.state;
        // check if there are posts or not
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={img} alt="des"></img>
                        <div className="card-content">
                            <Link to={ "/" + post.id }>
                                <span className="card-title" style={{fontWeight: "bold"}}>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet!</div>
        ) 
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home