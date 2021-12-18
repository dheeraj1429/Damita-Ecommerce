import React from 'react';

import { useSelector } from 'react-redux';

import './SmallProductsShowCardComponent.css';

function SmallProductsShowCardComponent({ shortTitle, posterUrl, Deal_of_the_Day, quntity }) {
  return (
    <div className="AddTo_Card_Products_Show_Div">
      <div className="AddTO_Card_Products_Img_Div">
        <img src={posterUrl} />
      </div>

      <div className="AddTO_Card_Products_Content">
        <h3>{shortTitle}</h3>
      </div>

      <div className="AddTOCard_Price_Div">
        <h4>${Deal_of_the_Day}</h4>
        <p>Qty: {quntity}</p>
      </div>
    </div>
  );
}

export default SmallProductsShowCardComponent;
