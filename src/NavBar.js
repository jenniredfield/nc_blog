import React from 'react';
import {Route, BrowserRouter as Router, NavLink, Link} from 'react-router-dom';


class NavBar extends React.Component {

    state = {
        authors: [],
    }



    componentDidMount () {
        this.fetchAuthors();
      }

    fetchAuthors = () => {


        return fetch(`https://northcoders-sprints-api.now.sh/api/blog/posts`)
          .then((resBuffer) => resBuffer.json())
          .then((res) => {

              let authorsArray = [];
              res.posts.forEach(post => {
                  if(!authorsArray.includes(post.author))
                  authorsArray.push(post.author)
              })
              
              return authorsArray;
              
            }).then(authorsArray => {
        
                this.setState({ 
                    
                  authors: authorsArray,
                  
                });
            })
          .catch(console.log);
      };   

      render (){

          return (
                <div className='links'>
                <Link  to="/">Home</Link>
                { this.state.authors.map(author => {
                    let encodedName = author.replace(' ', "%20");
           
                    return (
                        <Link to={`/authors/${encodedName}`}>{author}</Link>
                    )
                })}
                </div>
     

          )

       
      }
 

}

export default NavBar;