import React from 'react';
import Image from "next/image";
import check from '../../public/check.svg'


const ItemAdvantage = ({content, ...props}) => {
 console.log(content)
  return (

    <div className='w-72 text-center bg-white text-black py-4 rounded-xl min-h-max gap-x-2'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div><img  className='mx-auto' src={content.img.src} alt='check'/></div>
      <div className="font-medium text-lg mb-2 px-10 leading-5">{content.title}</div>
      <div className='px-6 text-sm '>{content.text}</div>
    </div>
  );
};

export default ItemAdvantage;