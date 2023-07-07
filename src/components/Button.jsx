import React from 'react';

export default function Button({ handleButtonClick, BtnText }) {
  const handleCLick = () => {
    handleButtonClick();
  }
  return (
    <button onClick={handleCLick}>{BtnText}</button>
  )
}