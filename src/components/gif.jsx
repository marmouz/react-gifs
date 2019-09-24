/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    // console.log(id);
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img role="presentation" src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
