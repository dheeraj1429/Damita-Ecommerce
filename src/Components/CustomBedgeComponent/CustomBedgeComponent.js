import React from 'react';

import './CustomBedgeComponent.css';

function CustomBedgeComponent({ img, title, subTitle }) {
  return (
    <div className="Custom__Bedge__Inner_Div">
      <div>
        <img src={img} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default CustomBedgeComponent;
