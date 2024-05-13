// components/MedicineCard.js
import React, { useState, useEffect } from 'react';
import PlusButton from "/public/assets/plusButton.svg"
import MinusButton from "/public/assets/minusButton.svg"
import Image from "next/image"

const MedicineCard = ({ name, imageUrl, dosage, limit }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count >= limit) {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
        setCount(0);
      }, 12 * 3600 * 1000); // Появится снова через 12 часов
    }
  }, [count, limit]);

  const incrementCount = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  if (!isVisible) {
    return null;
  }

  return (
    <div className="med_card mr-[15px] mb-[15px]" style={{paddingBottom: '0px'}}>
      <img className="background-image" src={imageUrl}/>
      <div className="med_content">
        <div className="H2 mt-[20px] text-white">{name}</div>
        <div className="H3 mt-[30px]">{dosage}</div>
        <div className="items-center justify-between med_content_container">
          <div className="button_text w-[50px]">
            {count} / {limit}
          </div>
          <div className='flex gap-[10px]'>
            <button className="minusButton w-[35px]" onClick={decrementCount}>
              <Image src={MinusButton} alt="button"/>
            </button>
            <button className="plus-button" onClick={incrementCount}>
              <Image src={PlusButton} alt="button"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
