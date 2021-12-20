import React, { useState } from 'react';

import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';

import { useSelector } from 'react-redux';

import './ProductsSinglePage.css';

function ProductsSinglePage() {
  const [ProductData, setProductData] = useState('');
  const [ProductQty, setProductQty] = useState(1);
  const selector = useSelector((state) => state.userStoreData.SelectedProduct);

  const IncProductQty = function () {
    setProductQty(ProductQty + 1);
  };

  const decProductQty = function () {
    if (ProductQty <= 1) return;
    setProductQty(ProductQty - 1);
  };

  return (
    <>
      {selector !== null ? (
        <div className="Products_Single_page Container">
          <div className="Products_Single_Page_Inner_Div padding_One">
            <div className="Products_Single_Img_Data">
              <div className="Img_Prev">{ProductData ? <img src={ProductData} /> : <img src={selector[0].posterUrl} />}</div>
              <div className="Img_Prev_Sm">
                {selector[0]
                  ? selector[0].shortImages.map((el) => (
                      <div className="Img_Prev_Cards" key={el.id}>
                        <img src={el.url} onMouseEnter={() => setProductData(el.url)} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="Products_Single_Contnet_Data">
              <h3>{selector[0].Discription}</h3>
              <h4>${selector[0].Deal_of_the_Day}</h4>
              <div className="Products_Discription_Div">
                <p>{selector[0].About}</p>
                <div className="Single_Page_Input_Div">
                  <div className="Inc_Dec_Input_Div">
                    <div className="Input_Div Inc_Div" onClick={IncProductQty}>
                      +
                    </div>
                    <div className="Input_Div">{ProductQty}</div>
                    <div className="Input_Div Dec_Div" onClick={decProductQty}>
                      -
                    </div>
                  </div>
                  <CustomButtonComponent type={'button'} InnerData={'ADD TO CART'} ButtonClassName={'Add_to_cart'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductsSinglePage;
