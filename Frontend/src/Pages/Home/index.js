import React from 'react';
import Hero from './Hero/Hero';
import New from './New/New';
import Categories from './Categories/Categories';
import Reviews from './Reviews/Reviews';


const Home = () => {
  return (
    <React.Fragment>
        <Hero />
        <New />
        <Categories />
        <Reviews />
    </React.Fragment>
  )
}

export default Home