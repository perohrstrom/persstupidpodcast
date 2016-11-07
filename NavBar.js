import React from 'react';
import styles from './stylesheets.css';

export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Per’s Stupid Podcast</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#movie_form">Suggest a Movie</a></li>
          <li><a href="badges.html">Per’s Blog</a></li>
          <li><a href="collapsible.html">Contact Per</a></li>
        </ul>
      </div>
    </nav>
  }
}
