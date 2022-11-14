import React from 'react';
import Header from "../components/organisms/Header";
import Preview from "../components/organisms/Preview";
import OurAdvantages from "../components/organisms/OurAdvantages";
import Catalog from "../components/organisms/Catalog";
import MobileApp from "../components/organisms/MobileApp";


const Home = () => {
  return (
    <div className='text-white'>
      <Header/>
      <Preview/>
      <OurAdvantages/>
      <Catalog/>
      <MobileApp/>
    </div>
  );
};



export default Home;