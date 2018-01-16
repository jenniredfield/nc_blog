import React from 'react';

class Authors extends React.Component {

    state = {
        name: null,
        posts: [],
    }

    
    componentDidMount () {
        const {name} = this.props.match.params
        this.fetchPostsByAuthor(name);
    }
   
    componentWillReceiveProps (nextProps) {
        const oldName = this.props.match.params.name
        const newName = nextProps.match.params.name
        if (oldName !== newName) {
            this.fetchPostsByAuthor(newName);
        }
    }


    fetchPostsByAuthor = (name) => {
        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/authors/${name}`)
          .then((resBuffer) => resBuffer.json())
          .then((res) => {
            this.setState({ 
              posts:  res.posts,
              name:  name,
            });
          
          })
          .catch(console.log);
      };   

       
       

      render() {
            return (
            <div className="postByAuthor-wrapper">
                <h2>{this.state.name}</h2>

             {  this.state.posts.map((post, i) => {
                   return (
                   <div className="author-post-div" key={i}>
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


