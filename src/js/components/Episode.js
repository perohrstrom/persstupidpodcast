import React from 'react';
import styles from '../../css/stylesheets.css';

export default class Episode extends React.Component {
  constructor() {
        super();
    }

  render() {
    let { name, movie, soundCloudId, description, poster, i } = this.props

    return <div className={styles.cardstyle}>
        <div className="col s12 my7">
          <div className="card medium hoverable">
            <span className="card-title">{name}</span>
            <span className="card-content">{movie}</span>
            <div className="episode-content">
              <div className="card-image">
                <img
                  src={poster}
                  alt={name}
                />
              </div>
              <div className="col s12 m5">
                <div className="card-panel grey">
                  <span className={styles.description}>{description}</span>
                </div>
              </div>
            </div>
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              frameBorder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + soundCloudId + "&amp;color=ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=true"}>
            </iframe>
          </div>
        </div>
    </div>
  }
}
