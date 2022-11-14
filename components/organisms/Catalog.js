import React from 'react';
import BaseH from "../atom/BaseH";
import HotSing from "../molecules/HotSing";
import CatalogItem from "../molecules/CatalogItem";
import BaseBtn from "../atom/BaseBtn";

const Catalog = () => {

  const hotSingContent = {
    title: "TYPE 1 с кабелем",
    subTitle: `Зарядная станция для`,
    br: 'электромобилей с кабелем TYPE 1',
    power: 'Мощность - 7,4 кВт',
    amperage: 'Ток - 32 А',
    voltage: 'Напряжение - 220В',
    guarantee: 'Гарантия  - 12 м',
    price: new Intl.NumberFormat('ru-RU').format(250000)
  }
  const catalogItems = [{
    title: 'TYPE 2 с кабелем ',
    title2: '',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type2.svg'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/cable2.svg'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type3.svg'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type4.svg'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type2.svg'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type6.png'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type7.png'
  },{
    title: 'Переходник с TYPE 1 ',
    title2: 'на TYPE 2',
    subTitle: 'Зарядная станция для электромобилей с кабелем TYPE 2',
    price: new Intl.NumberFormat('ru-RU').format(300000),
    img: '/type8.png'
  },]
  return (
    <div>
      <div className='container mx-auto bg-grey text-center pb-44'>
        <BaseH>КАТАЛОГ</BaseH>
        <div className='text-white text-center pt-8 text-sm mb-10 max-w-3xl mx-auto'>Ознакомьтесь с продукцией, которую
          мы продаем. Уточнить наличие и получить прайс конкретных позиций товара можно позвонив нам, написав в
          WHATSAPP.
        </div>
        <div className='mx-auto'>
          <HotSing content={hotSingContent}/>
        </div>
        <div className='flex flex-wrap justify-around w-5/6 mx-auto mt-10'>
          {catalogItems.map((item, idx) => {
            return(
              <CatalogItem catalogContent={item} key={idx}/>
            )
          })}
        </div>
        <div className='flex justify-around w-5/6 mx-auto mt-12'>
          <BaseBtn className="text-black font-medium w-60 h-12 hover:bg-opacity-50 duration-300">Сделать заказ</BaseBtn>
          <BaseBtn className="text-black font-medium w-60 h-12 hover:bg-opacity-50 duration-300">Буклеты и патенты</BaseBtn>
          <BaseBtn className="text-white bg-grey border-white font-medium w-60 h-12 hover:text-opacity-90 hover:bg-white hover:bg-opacity-10 duration-200">Сектификаты</BaseBtn>
        </div>

        {/*<CatalogItem/>*/}
      </div>
    </div>
  );
};

export default Catalog;