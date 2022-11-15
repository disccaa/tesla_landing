import React from 'react';
import Image from "next/image";
import img from '../../public/img.png';
import BaseBtn from "../atom/BaseBtn";

const Preview = () => {
  return (
    <div id='Preview'>
      <div className='container bg-cover mx-auto text-center' style={{backgroundImage: `url('/img.png')`}}>
        <div className='text-6xl'><h1>Зарядные станции для <br/> электромобилей</h1></div>
        <div className='text-2xl mt-96'>Наша компания предлагает зарядные <br/> станции собственного производства.</div>
        <div className='mt-6 pb-44'><BaseBtn className='text-black hover:bg-opacity-80 duration-300'> Перейти в каталог</BaseBtn></div>
        <div/>
      </div>
    </div>
  );
};

export default Preview;