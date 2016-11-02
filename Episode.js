import React from 'react';
import styles from './stylesheets.css';

export default class Episode extends React.Component {
  constructor() {
        super();
    }

  render() {
    let { name, movie, soundCloudId, description } = this.props
    const cardStyle = {
      width: "400px",
      display: "inline-block",
      padding: "20px"
    }
    return <div style={cardStyle}>
        <div className="col s12 my7">
          <div className="card medium">
            <span className="card-title">{name}</span>
            <span className="card-content">{movie}</span>
            <div className="card-image">
              <img
                src="https://www.edx.org/sites/default/files/upload/upvote-downvote.png"
                alt={name}
                width="50px"
                height="50%"
              />
            </div>
            <div className="col s12 m5">
              <div className="card-panel teal">
                <span className="white-text">{description}
                </span>
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
