import React, { useState, useEffect } from 'react';

const ColorCard = ({
  getRandomColor,
  colorChangeTrigger,
  toggleColorChangeTrigger,
  showPrev,
  setIsPrev,
}) => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [curColor, setCurColor] = useState(randomColor);
  const [prevColor, setPrevColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const handleButton = (event) => {
    setIsLocked(!isLocked);
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isLocked) {
      if (colorChangeTrigger) {
        setPrevColor(randomColor);
        setRandomColor(getRandomColor());
        setIsPrev(true);
      }
    }
  }, [colorChangeTrigger]);

  useEffect(() => {
    if (!isLocked) {
      const matchList = ntc.name(curColor);
      const nearestColor = matchList[1];
      setColorName(nearestColor);
    }
  }, [randomColor, showPrev, isLocked]);

  useEffect(() => {
    if (!isLocked) {
      if (showPrev) {
        setCurColor(prevColor);
      } else {
        setCurColor(randomColor);
      }
    }
  });

  return (
    <>
      <div
        className='colorBox'
        style={{ backgroundColor: curColor }}
        onClick={toggleColorChangeTrigger}
      >
        <div className='textContainer'>
          <div className='textBox'>
            <p className='colorName'>{colorName}</p>
            <p className='colorHex'>{curColor}</p>
          </div>
          <button
            className={`colorButton ${isLocked && 'locked'}`}
            onClick={(event) => handleButton(event)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
