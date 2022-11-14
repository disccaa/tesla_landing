import React from 'react';
import BaseBtn from "../atom/BaseBtn";

const CatalogItem = ({catalogContent, ...props}) => {
  return (
    <div className='max-w-xl mb-6'>
      <div className='mb-4'><img src={catalogContent.img} alt={catalogContent.title} width='564px' height='390px'/>
      </div>
      <div className='flex text-left justify-between'>
        <div className='w-3/5'>
          <div className='font-medium text-2xl'>{catalogContent.title} <br/> {catalogContent.title2}</div>
          <div className='text-liteGrey'>{catalogContent.subTitle}</div>
        </div>
        <div className='pr-2'>
          <div><BaseBtn
            className='w-36 h-10 bg-grey border-white  hover:text-opacity-90 hover:bg-white hover:bg-opacity-10 duration-200'>Заказать</BaseBtn>
          </div>
          <div className='text-xl font-bold mt-6 text-center'>{catalogContent.price} ₸</div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;