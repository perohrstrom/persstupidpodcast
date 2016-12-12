import React from 'react';
import styles from '../../css/stylesheets.css';

export default class Episode extends React.Component {
  constructor() {
        super();
    }

    tweetTitle(movie) {
      return this.props.movie.replace(/ /g, "")
    }

  render() {
    let { name, movie, soundCloudId, description, poster, i } = this.props

    return <div>
        <div className="col s12 m7">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={poster}/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{name} w/ {movie}<i className="material-icons right">more_vert</i></span>
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + soundCloudId + "&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true"}>
            </iframe>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{movie} w/ {name}<i className="material-icons right">close</i></span>
            <p>{description}</p>
            <a className="twitter-hashtag-button"
              href={"https://twitter.com/intent/tweet?button_hashtag="+this.tweetTitle(movie) +"&hashtags=stupidpodcast"}>
            Tweet</a>
          </div>
        </div>
      </div>
      </div>

  }
}
