import React, { Component } from 'react';
import Nav from './Nav/Nav';
import HorizCard from './Card/HorizCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HorizCard imgUrl = 'https://cdn.stocksnap.io/img-thumbs/960w/DGWQ8ZWZQS.jpg'
          title = 'My Title'
          subtitle = 'Subtitle'
          text = 'a lot of dummy text'
          />
      </div>
    );
  }
}

export default App;
