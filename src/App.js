import React, { Component } from 'react';
import Nav from './Nav/Nav';
import HorizCard from './Card/HorizCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid text-primary">
        <Nav />
        <HorizCard imgUrl = 'https://cdn.stocksnap.io/img-thumbs/960w/DGWQ8ZWZQS.jpg'
          title = 'A Light-Up Probe with Aggregation-Induced Emission for Real-Time Bio-orthogonal Tumor Labelling and Image-Guided Photodynamic Therapy'
          subtitle = 'Guangxue Feng and Bin Liu'
          text = 'Acc. Chem. Res., 2018, 51 (6), pp 1404–1414'
          btnLabel = 'Read More'
          />
      </div>
    );
  }
}

export default App;
