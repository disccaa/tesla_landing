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
    <div  id={'OurAdvantages'}>
      <div className="container mx-auto bg-grey pb-20">
        <div className='text-white text-center pt-14 text-sm mb-3'>WHAT WE SERVE</div>
        <div className='text-center mb-6'><BaseH className={''}>НАШИ ПРЕИМУЩЕСТВА</BaseH></div>
        <div className='flex justify-center gap-x-10'>
          <ListAdvantages  advList={itemContent}/>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;