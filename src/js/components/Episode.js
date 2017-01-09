import React from 'react';

export default class Episode extends React.Component {
  constructor() {
        super();
    }

    tweetTitle(movie) {
      return this.props.guest.movie.replace(/ /g, "")
    }

  render() {
    let { name, movie, soundCloudId, description, description2, description3, poster } = this.props.guest
    console.log(description2, description3)
    return <div id={movie.split(' ').join('')} className="scrollspy section">
        <div className={"card large "}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={poster}/>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{name}/{movie}<i className="material-icons right">close</i></span>
            <p className="episodeDescription">{description}</p>
            <p className="episodeDescription">{description2}</p>
            <p className="episodeDescription">{description3}</p>
            <iframe
              className="soundCloudPlayer"
              width="98%"
              height="110"
              scrolling="no"
              frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + soundCloudId + "&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true"}>
            </iframe>
            <a className="twitter-hashtag-button"
              href={"https://twitter.com/intent/tweet?button_hashtag="+this.tweetTitle(movie) +"&hashtags=stupidpodcast"}>
            Tweet</a>
          </div>
        </div>
      </div>
  }
}
