import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import HomeHero from './HomeHero';
import Footer from '../footer/Footer';
import HomePublicPages from './HomePublicPages';
import HomeSources from './HomeSources';

export default class HomeContainer extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <HomeHero />
        <HomePublicPages />
        <HomeSources />
        <Footer />
      </div>
    );
  }
}

