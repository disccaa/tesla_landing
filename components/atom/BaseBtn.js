import React from 'react';

const BaseBtn = ({children, className , ...props }) => {
  // console.log(className)
  return (
    <button {...props} className={`${className} w-48 h-14 bg-white radio rounded-xl border-black border-solid border`} >{children}</button>
  );
};

export default BaseBtn;