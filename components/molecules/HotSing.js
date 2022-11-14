import React from 'react';

import BaseBtn from "../atom/BaseBtn";

const HotSing = ({content, ...props}) => {
  return (
    <div className='max-w-5xl bg-cover mx-auto bg-cover text-left'   style={{backgroundImage: `url('/img_1.png')`}} >
     <div style={{background: "conic-gradient(from 96.47deg at 50% 50.07%, rgba(0, 0, 0, 0.18) 0deg, rgba(0, 0, 0, 0.53) 70.5deg, rgba(0, 0, 0, 0.16) 203.62deg, rgba(0, 0, 0, 0.18) 360deg)"}}>
       <div className='px-12 pt-28' >
         <div className='mb-4'>
           <p className='text-4xl font-black '>{content.title}  </p>

         </div>
         <div className='font-normal text-xl mb-20'>
           <p>{content.subTitle}</p>
           <p>{content.br}</p>
         </div>
         <div className='font-normal text-xl'>
           <div className=' mb-10'>
             <p>{content.power}</p>
             <p>{content.amperage}</p>
             <p>{content.voltage}</p>
             <p>{content.guarantee}</p>
           </div>
           <div className='text-3xl font-black mb-32'>
             <p>{content.price} ₸</p>
           </div>
         </div>
         <div className='flex justify-between px-8 pb-10 items-center' >
           <div className='font-black text-3xl'>Успей заказать по горячей цене!</div>
           <div><BaseBtn className='hover:opacity-80 duration-300 w-40 h-12 items-center' style={{background:" linear-gradient(90deg, #5DDFAC 0%, #6EAFC6 100%)"}}>Заказать</BaseBtn></div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default HotSing;