import React, {useState} from 'react';
import BaseH from "../atom/BaseH";
import ItemAdvantage from "../atom/ItemAdvantage";
import check from '../../public/check.svg'
import ListAdvantages from "../molecules/ListAdvantages";

const OurAdvantages = () => {
  const [itemContent, setItemContent] = useState([{
    img: check,
    title: "Сертификация\n" +
      "на товары",
    text: "Вся наша продукция имеет сертификаты соответствия, наличие всех необходимых сертификатов и документов. "
  }, {
    img: check,
    title: "Сертификация\n" +
      "на товары",
    text: "Вся наша продукция имеет сертификаты соответствия, наличие всех необходимых сертификатов и документов. "
  }, {
    img: check,
    title: "Сертификация\n" +
      "на товары",
    text: "Вся наша продукция имеет сертификаты соответствия, наличие всех необходимых сертификатов и документов. "
  }])

  function test() {
    itemContent.map((i, index) => console.log(i, index))
  }

  // test()
  return (
    <div className=''>
      <div className="container mx-auto bg-grey pb-44">
        <div className='text-white text-center pt-14 text-sm mb-3'>WHAT WE SERVE</div>
        <div className='text-center mb-6'><BaseH className={''}>Отзывы покупателей</BaseH></div>
        <div className='flex justify-center '>
          <ListAdvantages advList={itemContent}/>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;