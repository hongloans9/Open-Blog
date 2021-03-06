import React, { Component } from 'react';
import homebg from './home-bg.jpg';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-light fixed-top" id="mainNav">
          <div class="container">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to="/Open-Blog/">
                    Home
                </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Open-Blog/posts/new">
                    Add new post
                </Link>
                </li>
              </ul>
          </div>
        </nav>
        <header className="masthead" style={{ backgroundImage: `url(${homebg})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Open Blog</h1>
                  <span className="subheading">Where You Can Post or Delete</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
