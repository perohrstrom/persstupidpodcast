import React from 'react';

export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    return <header className="header">
      <ul id="slide-out" className="side-nav green lighten-1">
      <li>
        <div className="userView">
            <a href="#!user"><img src="images/per_about.jpg"/></a>
        <div className="divider"></div>
          <div className="section">
            <p>About Per</p>
            <p>{"I'm a computer programmer, podcast enthusiast, and I moonlight as a passable musician. I love burritos, plaid, dogs, and conversation."}</p>
            <p></p>
          </div>
          <a href="mailto:per.k.ohrstrom@gmail.com"><span className="black-text">Contact Per</span></a>
        </div>
      </li>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons play_arrow">play_arrow</i></a>
  </header>
  }
}
