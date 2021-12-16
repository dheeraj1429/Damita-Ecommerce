import React from 'react';

import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './SlideComponent.css';

function SlideComponent() {
  return (
    <div className="HomePage__Slider_Div">
      <div
        className="Slides_Container"
        style={{
          backgroundImage: 'url(/Images/slider-one.png)',
        }}
      >
        <div>
          <h4>Products Sale 20%</h4>
          <h2>
            COMPUTER <br /> APPLE
          </h2>
          <p>The brand commes form the goolge home</p>

          <CustomButtonComponent type={'button'} InnerData={'SHOP NOW'} ButtonClassName={'ShopButton'} />
        </div>
      </div>
    </div>
  );
}

export default SlideComponent;
