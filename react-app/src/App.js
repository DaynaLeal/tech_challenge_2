import React from 'react';
import axios from 'axios';
import './style.css';

export default class App extends React.Component{
  state = {
    songs: [],
  };
  componentDidMount() {
    axios.get("./data/songs.json").then((response) => {
      this.setState({songs: response.data});
    });
  }
  render() {
  const { songs } = this.state;
  return (
    <div>
      <ul className="songs">
          {songs.map((song) => (
            <li className="song">
              <p>
                <strong>Title:</strong> {song.title}
              </p>
              <p>
                <strong>Artist:</strong> {song.artist}
              </p>
              <p>
                <strong>Year:</strong> {song.year}
              </p>
            </li>
          ))}
        </ul>
    </div>
  );
  }
}

