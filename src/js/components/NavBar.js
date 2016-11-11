import React from 'react';
import styles from '../../css/stylesheets.css';

export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Per’s Stupid Podcast</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://perlikethefruit.wordpress.com/" target="_blank">Per’s Blog</a></li>
          <li><a href="mailto:perlikethefruit@gmail.com?Subject=Hi%20Per">Contact Per</a></li>
        </ul>
      </div>
    </nav>
  }
}
