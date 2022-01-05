import React, { useEffect, useState } from 'react';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './ProductsSummerTabComponent.css';

function ProductsSummerTabComponent({ data, style, buttonInner }) {
  const selector = data;
  const [Price, setPrice] = useState('');

  useEffect(() => {
    if (selector !== null) {
      let sum = 0;
      selector.map((el) => {
        sum += el.totalPrice;
      });
      setPrice(sum);
    }
  }, [selector]);

  return (
    <div className={style ? `Products_Summer_Tab padding_One ${style}` : 'Products_Summer_Tab padding_One '}>
      {selector !== null ? (
        <div className="Products_Summer_Inner_Div ">
          <div className="Products_Total_Div">
            <div className="Products_Summer_Content_Div">
              <div className="Summer_Details_Div_inner">
                <h1>Order Total</h1>
                <h1>${Price}</h1>
              </div>

              <CustomButtonComponent
                type={'button'}
                InnerData={buttonInner ? buttonInner : 'ADD INTO CARD'}
                ButtonClassName={'Add_to_cart'}
                styleProperty={true}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductsSummerTabComponent;
