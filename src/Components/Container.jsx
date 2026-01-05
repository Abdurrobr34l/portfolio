import React from 'react';

const Container = ({children, customStyle}) => {
  return (
    <div className={`container mx-auto px-5 md:px-10 lg:px-14 ${customStyle}`}>
      {children}
    </div>
  );
};

export default Container;