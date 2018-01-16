import React, {Component} from 'react';
import './App.css';
import LatestPosts from './LatestPosts';
import Post from './Post';
import Authors from './Authors';
import NavBar from './NavBar';
import {Route, Switch, BrowserRouter, Link, NavLink} from 'react-router-dom';



class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        
         <header> <h1 className="blog">Blog</h1> <img src="nc_logo.png" alt='logo'/></header>
         
            <div className="wrapper">
                <section className="main-content">
                  {/* <Switch> */}
                    <Route exact path="/" component={LatestPosts}/>
                    <Route path="/posts/:id" component={Post}/>
                    <Route exact path="/authors/:name" component={Authors}/>
                  {/* </Switch> */}
                  {/* <Route  component={PageNotFound}/> */}
                </section>
                <section className="side-bar">
                  <NavBar/>
                </section>
            </div>
      </div>
      </BrowserRouter>
    );
  }
}




export default App;


//components