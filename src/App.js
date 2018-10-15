import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import HeroImage from './HeroImage/HeroImage';
import HorizCard from './Card/HorizCard';
import Footer from './Footer/Footer';
import Research from './Research/Research';
import People from './People/People';
import Contact from './Contact/Contact';
import FilteredPublications from './Publications/FilteredPublications/FilteredPublications';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="-app-wrapper container-fluid text-primary">
        <Nav />
        <Route path='/' exact component={HeroImage} />
        <Route path='/' exact render = {()=> <h1 className = '-app-titles container'>Research</h1>} />
        <Route path='/' exact component={Research} />
        <Route path='/publications' exact component={FilteredPublications} />
        <Route path='/people' exact component={People} />
        {/* <Contact /> */}
        {/* <h1 className = '-app-titles container'>Recent Publications</h1> */}
        {/* <HorizCard imgUrl = 'https://cdn.stocksnap.io/img-thumbs/960w/DGWQ8ZWZQS.jpg'
          title = 'A Light-Up Probe with Aggregation-Induced Emission for Real-Time Bio-orthogonal Tumor Labelling and Image-Guided Photodynamic Therapy'
          subtitle = 'Guangxue Feng and Bin Liu'
          text = 'Acc. Chem. Res., 2018, 51 (6), pp 1404–1414'
          btnLabel = 'Read More'
          />   */}
        <Footer />        
      </div>
    );
  }
}

export default App;
