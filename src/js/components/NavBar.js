import React from 'react';
import styles from '../../css/stylesheets.css';

export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <nav className="col s3 m4 l3">
      <div>
        <a href="#">Per’s Stupid Podcast</a>
      </div>
      <div>
        <ul id="nav-mobile">
          <li>
            <a href="https://perlikethefruit.wordpress.com/" target="_blank">Per’s Blog</a>
          </li>
          <li>
            <a href="mailto:perlikethefruit@gmail.com?Subject=Hi%20Per">Contact Per</a>
          </li>
          <li className={styles.footer}><a className="grey-text text-lighten-3 icono-macbook" target="_blank" href="https://github.com/perohrstrom">@perohrstrom on GitHub</a><span className="icono-macbook"></span></li>
          <li className={styles.footer}><a className="white-text textghten-3 icono-twitter" target="_blank" href="https://twitter.com/perlikethefruit">@perlikethefruit</a></li>
          <li className={styles.footer}><a className="white-text textghten-3 iconolinkedIn" target="_blank" href="https://www.linkedin.com/in/perohrstrom">LinkedIn</a></li>
          <li className={styles.footer}><a className="white-text text-lighten-3 icono-piano" target="_blank" href="http://bit.ly/2fehSqj">Music</a></li>
        </ul>
      </div>
    </nav>
  }
}
