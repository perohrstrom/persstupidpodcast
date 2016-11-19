import React from 'react';
import styles from '../../css/stylesheets.css';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <footer >
      <div className="container">
        <div className="row btm-banner">
          <div className="col l6 s12">
            <h5 className="white-text">More about Per</h5>
            <p className="grey-text text-lighten-4">Per is a computer programmer, musician, and enthusiastic gent. He enjoys collaborating and conversation. Hence, this stupid podcast.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul className="left hide-on-med-and-down footer-li" >
              <li className={styles.footer}><a className="grey-text text-lighten-3 icono-macbook " target="_blank" href="https://github.com/perohrstrom">@perohrstrom on GitHub</a></li>
              <li className={styles.footer}><a className="white-text textghten-3 icono-twitter" target="_blank" href="https://twitter.com/perlikethefruit">@perlikethefruit</a></li>
              <li className={styles.footer}><a className="white-text textghten-3 iconolinkedIn" target="_blank" href="https://www.linkedin.com/in/perohrstrom">LinkedIn</a></li>
              <li className={styles.footer}><a className="white-text text-lighten-3 icono-piano" target="_blank" href="http://bit.ly/2fehSqj">Music</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2016 Copyright
        </div>
      </div>
    </footer>
  }
}
