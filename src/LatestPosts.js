import React from 'react';
import {Link} from 'react-router-dom';

class LatestPosts extends React.Component {

    state = {
        posts: [],

    }

    shouldComponentUpdate () {
        this.fetchPosts();
      }


    fetchPosts = () => {


            return fetch(`https://northcoders-sprints-api.now.sh/api/blog/posts`)
              .then((resBuffer) => resBuffer.json())
              .then((res) => {
            
                this.setState({ 
                
                  posts:  res.posts,
                });
              
              })
              .catch(console.log);
          };
    
    


     render ()  {
         
           return <div className="posts-wrapper">

           { this.state.posts.map(function(post){
                return (

                    <Link  to={`/posts/${post.id}`}>
                    <div className="post-snippet">
                        <h2>{post.author}</h2>
                        <p className="description">{post.title}</p>
                    </div>
                     </Link>

                )

           })

           }


    
            </div>

        }

}


export default LatestPosts;