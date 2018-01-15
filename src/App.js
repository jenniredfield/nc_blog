import React, {Component} from 'react';
import './App.css';
import LatestPosts from './LatestPosts';
import Post from './Post';
import Authors from './Authors';
import NavBar from './NavBar';
import {Route, BrowserRouter as Router, Link, NavLink} from 'react-router-dom';



class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        
         <header> <h1 className="blog">Blog</h1> <img src="nc_logo.png" alt='logo'/></header>
         
            <div className="wrapper">
                <section className="main-content">
                  <Route exact path="/" component={LatestPosts}/>
                  <Route path="/posts/:id" component={Post}/>
                  <Route path="/authors/:name" component={Authors}/>
                </section>
                <section className="side-bar">
                  <NavBar/>
                </section>
            </div>
      </div>
      </Router>
    );
  }
}




export default App;


//components