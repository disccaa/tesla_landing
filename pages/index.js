import React from 'react';
import Header from "../components/organisms/Header";
import Preview from "../components/organisms/Preview";
const Home = () => {
  return (
    <div className='text-white'>
      <Header/>
      <Preview/>
      <OurAdvantages/>
    </div>
  );
};


import OurAdvantages from "../components/organisms/OurAdvantages";

export default Home;