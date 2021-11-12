import React from 'react';

const Citation = (props) => {
  const { text, color } = props;
  return (
    <div className='citation'>
      <span
        className='square'
        style={{
          backgroundColor: color ? color : 'white',
          border: color ? '' : '1px solid black',
        }}
      ></span>
      <span>{text}</span>
    </div>
  );
};

export default Citation;
