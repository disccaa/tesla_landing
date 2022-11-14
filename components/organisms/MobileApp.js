import React from 'react';

const MobileApp = () => {
  return (
    <div>
      <div className='container mx-auto py-36 px-72'>
        <div className='flex justify-between'>
          <div>
            <img src="/mobile.png" alt="mobile" width="270px"/>
          </div>
          <div>
            <p className='text-spaceGrey mt-4 mb-4'>Скачать приложение</p>
            <h3 className=' font-bold text text-4xl text-black mb-6'>Сделать заказ в <br/> приложении
              "QuatPoint" <br/> стало проще.</h3>
            <h4 className='text-spaceGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod
              tempor incididunt ut.</h4>
            <div className='flex justify-between pr-4 mt-24'>
              <div className='flex items-center	'><img src="/apple.svg" alt="appstore" width='43px'/>
                <div className='text-black font-medium text-xl ml-6'>App Store</div>
              </div>
              <div className='flex items-center	'><img src="/playMarket.svg" alt="playmarket" width='34px'/>
                <div className='text-black font-medium text-xl ml-6'>Play Market</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;