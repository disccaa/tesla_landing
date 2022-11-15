import React from 'react';
import NewsLatter from "../molecules/NewsLatter";
import BaseBtn from "../atom/BaseBtn";
import BaseH from "../atom/BaseH";

const News = () => {
  return (
    <div id={'News'}>
      <div className='container mx-auto bg-black py-44'>
        <NewsLatter className="mx-auto"/>
        <BaseH className='font-bold text-center mt-24 text-3xl'>НАШИ КОНТАКТЫ</BaseH>
        <div className='text-center max-w-2xl mx-auto text-sm mt-24'>Наша цель предоставить знания населению по электромобилям и зарядным станциям. Создать достойную
          конкуренцию зарубежным компаниям, чтобы стоимость продукции последних была обоснованной, а не завышенной.
        </div>
        <div className='text-center mt-24'><img className='mx-auto ' src="/lightning.svg" alt="lightning"/></div>
      </div>
    </div>
  );
};

export default News;