import React, { Component } from 'react';
import './App.css';
import LatestPosts from './LatestPosts';
import Post from './Post';
import Authors from './Authors';
import NavBar from './NavBar';
<<<<<<< HEAD
import {Route, Switch, BrowserRouter, Link, NavLink} from 'react-router-dom';
=======
import { Route, BrowserRouter} from 'react-router-dom';
>>>>>>> f90b1457b0105b205fe9a7c41d27f10f1141cf28



class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
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
=======
        <div className="App">

          <header> <h1 className="blog">Blog</h1> <img src="nc_logo.png" alt='logo' /></header>

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
>>>>>>> f90b1457b0105b205fe9a7c41d27f10f1141cf28
      </BrowserRouter>
    );
  }
}




export default App;


//components