import React from 'react';
export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    const { episodes } = this.props
    return <div className="header">
      <nav>
        <div className="nav-wrapper blue lighten-1">
          <a href="#" className="brand">{"Per's Stupid Podcast"}</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <div className="userView">
                    <a href="#!user"><img src="images/per_about.jpg"/></a>
                    <div className="divider"></div>
                    <ul className="section">
                    { episodes.map((episode, i) => {
                        return (<li key={i}><a href={"#"+ episode.movie.split(' ').join('')}>{episode.movie}</a></li>)
                      })
                    }
                    <li><a href="mailto:per.k.ohrstrom@gmail.com">Contact</a></li>
                    </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  }
}
