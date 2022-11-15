import React from 'react';
import Header from "../components/organisms/Header";
import Preview from "../components/organisms/Preview";
import OurAdvantages from "../components/organisms/OurAdvantages";
import Catalog from "../components/organisms/Catalog";
import MobileApp from "../components/organisms/MobileApp";
import News from "../components/organisms/News";
import Footer from "../components/organisms/Footer";


const Home = () => {
  return (
    <div className='text-white'>
      <Header className={'sticky'} />
      <Preview/>
      <OurAdvantages/>
      <Catalog/>
      <MobileApp/>
      <News/>
      <Footer/>
    </div>
  );
};



export default Home;