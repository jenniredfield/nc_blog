import React, { Component } from 'react';
import './App.css';
import LatestPosts from './LatestPosts';
import Post from './Post';
import Authors from './Authors';
import NavBar from './NavBar';
import { Route, BrowserRouter} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header> <div className="blog"><h1>Blog</h1>
          <p>Created by Jen &amp; and Megan</p></div> <img src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png" alt='logo' /></header>

          <div className="wrapper">
            <section className="main-content">
            
              <Route exact path="/" component={LatestPosts} />
              <Route path="/posts/:id" component={Post} />
              <Route exact path="/authors/:name" component={Authors} />
              <Route path="/authors/:name" search="?path=:0" />
            </section>
            <section className="side-bar">
              <NavBar />
            </section>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}




export default App;


//components