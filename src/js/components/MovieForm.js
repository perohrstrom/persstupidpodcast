import React from 'react';

export default class MovieForm extends React.Component {
  constructor() {
    super();
  }

  render(){
    return <div id="movie_form" className={styles.movieForm}>
      <form onSubmit={this.submitMovie} className="modal-content hoverable">
        <div>
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="name">First Name</label>
          </div>
        </div>
        <div>
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div>
          <div className="input-field col s6">
            <input id="movie" type="text"
          />
            <label htmlFor="movie">Suggest a Movie</label>
          </div>
        </div>
        <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Textarea</label>
        </div>
      </div>
        <div className="modal-footer">
          <button className={styles.button} type="submit" name="action">Submit</button>
        </div>
      </form>
    </div>
  }
}
