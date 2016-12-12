import React from 'react';
import Materialize from 'materialize-css';
import Episode from './Episode';
import NavBar from './NavBar';
import guests from '../../data/guests';
import Footer from './Footer';
import styles from '../../css/stylesheets.css';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div className="row">
      <NavBar />
      <div className="col s12 m8 l9 push-s3">
        { guests.map((guest, i) =>
          <Episode
            name={guest.name}
            movie={guest.movie}
            soundCloudId={guest.soundCloudId}
            description={guest.description}
            poster={guest.poster}
            key={i}
          />
          )
        }
      </div>

    </div>
  }
}
