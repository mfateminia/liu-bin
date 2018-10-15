import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import HeroImage from './HeroImage/HeroImage';
import Footer from './Footer/Footer';
import Research from './Research/Research';
import People from './People/People';
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
        <Footer />        
      </div>
    );
  }
}

export default App;
