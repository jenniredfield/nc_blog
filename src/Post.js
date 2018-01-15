import React from 'react';

import {Route, BrowserRouter as Router, Link} from 'react-router-dom';



 class Post extends React.Component {

    state = {
        id: this.props.match.params.id,
        post: [],
    }


    componentDidMount () {
        this.fetchPost();
      }


    fetchPost = () => {


            return fetch(`https://northcoders-sprints-api.now.sh/api/blog/posts/${this.state.id}`)
              .then((resBuffer) => resBuffer.json())
              .then((res) => {
            
                this.setState({ 
                
                  post:  res.post,
                });
              
              })
              .catch(console.log);
          };
    
     
     render() {


 
      return (
          <div className="post-wrapper">
                <div className="grid-1-post">
                    <img src={this.state.post.avatarUrl}/>
                </div>
                <div className="grid-2-post">
                    <h2>{this.state.post.author}</h2><span>{this.state.post.createdAt}</span>
                    <h2>{this.state.post.title}</h2>
                    <div className="post-body">
                        <p>{this.state.post.body}</p>
                    </div>
                </div>
          </div>
     
      )
    }
  }

  export default Post;