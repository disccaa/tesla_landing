import React from 'react';
import ItemAdvantage from "../atom/ItemAdvantage";

const ListAdvantages = ({advList, ...props}) => {
  return (
    <>
      {advList.map((i, idx) => {
      return (
        <ItemAdvantage content={i} key={idx}/>
      )
    })}
    </>

  );
};

export default ListAdvantages;