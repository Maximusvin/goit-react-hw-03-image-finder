import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';

export default class App extends Component {
  state = {
    query: '',
  };

  handleSubmitSearchbar = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitSearchbar} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}
