import React from 'react';
import BaseBtn from "../atom/BaseBtn";

const NewsLatter = ({className, ...props}) => {
  return (
    <div className={`max-w-screen-lg bg-cover rounded-3xl py-20 ${className}`}
         style={{backgroundImage: `url('/newsBg.png')`}}>
      <div className='text-center mx-auto'>
        <div className='font-tesla text-black mb-6'>NEWS LETTER</div>
        <div className='font-bold text-5xl mb-12'>ПОДПИСАТЬСЯ НА НОВОСТИ</div>
        <div className='bg-white rounded-xl w-fit mx-auto pl-7 py-2 pr-1 '>
          <input placeholder='Оставь свой e-mail адрес' className=' text-black text-xl w-80'/>
          <BaseBtn className="border-none bg-black w-32 h-16 font-medium">Подписаться</BaseBtn>
        </div>

      </div>
    </div>
  );
};

export default NewsLatter;