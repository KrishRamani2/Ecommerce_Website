import React, { useState } from 'react';
import './Colors.css';

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleLabelClick = (color,next) => {
    console.log(`Clicked on ${color} label`);
    setSelectedColor(color);
  };

  return (
    <>
      <div className="ll">
        <h2 className="sidebar-title colors-title">Colors</h2>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('All')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('Blue')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>Blue
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('Green')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>Green
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('White')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>White
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('Black')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('Red')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>Red
        </label>
        <label className="sidebar-label-container" onClick={() => handleLabelClick('Others')}>
          <input type="radio" name="test" />
          <span className="checkmark"></span>Others
        </label>
      </div>
    </>
  );
};

export default Colors;
