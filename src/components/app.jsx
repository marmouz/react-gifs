import React, { Component } from 'react';
import giphy from 'giphy-api';
/* eslint-disable react/destructuring-assignment */

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = "JOIn0tgHoetPKh1XIBLfMjRSi5mOu7pL";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  search = (query) => {
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=JOIn0tgHoetPKh1XIBLfMjRSi5mOu7pL&q=${query}&limit=10&offset=0&rating=G&lang=en`
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, ((err, res) => {
      // Res contains gif data!
      this.setState(
        { gifs: res.data }
      );
    }));
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
