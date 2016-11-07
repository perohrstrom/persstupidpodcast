import React from 'react';
import styles from './stylesheets.css';

export default class MovieForm extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div id="movie_form" className="valign-wrapper">
      <form className="col s12 center-align">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="movie" type="text" className="validate" />
            <label htmlFor="movie">Suggest a Movie</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>
  }
}
