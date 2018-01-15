import React from 'react';
import {Route, BrowserRouter as Router, NavLink, Link} from 'react-router-dom';

class Authors extends React.Component {

    state = {
        author: this.props.match.params.name,
        posts: [],
    }

    
    componentDidMount () {
        this.fetchPostsByAuthor();
    }


    fetchPostsByAuthor = () => {


        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/authors/${this.state.author}`)
          .then((resBuffer) => resBuffer.json())
          .then((res) => {
                console.log(res)
            this.setState({ 
              posts:  res.posts,
            });
          
          })
          .catch(console.log);
      };   

       
       

      render() {
       
            console.log('****************')
            return (
            <div class="postByAuthor-wrapper">
                <h2>{this.state.author}</h2>

             {  this.state.posts.map(post => {
                   return (
                   <div className="author-post-div">
                        <h3>{post.title}</h3>
                        <p className="author-posts">{post.body}</p> 
                   </div> 
                   )
                   }) }

               </div>


            );
      }
}

export default Authors;

