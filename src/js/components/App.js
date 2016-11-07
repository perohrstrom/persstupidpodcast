import React from 'react';
import Materialize from 'materialize-css';
import Episode from './Episode';
import MovieForm from './Movieform';
import NavBar from './NavBar';
import guests from '../../data/guests';
import Footer from './Footer';
import styles from '../../css/stylesheets.css';
// import rachel from './images/rachelepp.jpg';
// import steve from './images/steveconzo.jpg';
// import jordan from './images/jordanhudock.jpg';
// import candice from './images/candiceruud.jpg';
// import dan from './images/danmunkus.jpg';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div>
      <NavBar />
      <div className={styles.episodes}>
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
      <MovieForm />
      <Footer />
    </div>
  }
}
