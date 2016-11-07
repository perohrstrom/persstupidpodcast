import React from 'react';
import Materialize from 'materialize-css';
import Episode from './Episode';
import MovieForm from './Movieform';
import NavBar from './NavBar';
import guests from './Guests';
import document from './document';
import Footer from './Footer';
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
        <Episode
          name="Daniel Munkus"
          movie="The Dark Knight"
          soundCloudId="255462528"
          description={"You either die the hero, or live long enough to be a guest on my podcast. Gothams finest welcomes Dan Munkus! You comic loving son-of-a-bitch!"}

        />
        <Episode
          name="Candice Ruud"
          movie="The Sound of Music"
          soundCloudId="242022610"
          description={"I knew what I was getting myself into. It doesnt make it any easier to manage a podcast over the emphatic singing of Candice and Rachel. Enjoy."}

        />
        <Episode
          name="Jordan Hudock"
          movie="Annie Hall"
          soundCloudId="237040746"
          description={"Annie Hall. Are we in love with her. Ofcourse, but I dont need to apologize. Neither does Jordan, because he is awesome and you know it!"}

        />
        <Episode
          name="Rachel Epp"
          movie="Star Wars (Original Trilogy)"
          soundCloudId="233061557"
          description={"Well, I felt like I experienced something really amazing this episode. Such an honor to introduce Rachel to the world of Star Wars."}

        />
        <Episode
          name="Mary Jennings"
          movie="The House of the Devil"
          soundCloudId="227243854"
          description={"The amazing Mary Jennings joins me for fright night! The House of the Devil - is it an eighties movie? Is it a modern movie? Is it amazing? Yes. Yes. Yes."}

        />
        <Episode
          name="Steve Conzo"
          movie="Jurassic Park"
          soundCloudId="223556137"
          description={"Steve kicks off the Stupid Podcast where we not only learn about the future of tourist amusements, but also that I need a timer on these conversations."}

        />
      <MovieForm />
      <Footer />
    </div>
  }
}
