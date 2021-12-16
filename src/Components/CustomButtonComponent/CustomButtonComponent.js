import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ type, InnerData, ButtonClassName }) {
  return (
    <button type={type} className={ButtonClassName}>
      {InnerData}
    </button>
  );
}

export default CustomButtonComponent;
