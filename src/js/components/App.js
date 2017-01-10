import React from 'react';
import Materialize from 'materialize-css';
import Episode from './Episode';
import NavBar from './NavBar';
import guests from '../../data/guests';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div className="grey darken-3">
      <div className="container">
        <NavBar episodes={guests} />
          { guests.map((guest, i) =>
            <Episode
              guest={guest}
              key={i}
            />
            )
          }
      </div>
    </div>
  }
}
