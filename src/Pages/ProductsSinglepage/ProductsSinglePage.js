import React, { useState } from 'react';

import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';

import { useSelector, useDispatch } from 'react-redux';
import { addTocardProducts } from '../../Redux/Action/action';
import ProductsImageComponent from '../../Components/ProductImageComponent/ProductsImageComponent';

import './ProductsSinglePage.css';

function ProductsSinglePage() {
  const [ProductQty, setProductQty] = useState(1);
  const selector = useSelector((state) => state.userStoreData.SelectedProduct);
  const dispatch = useDispatch();

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
            <ProductsImageComponent data={selector} />

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
                  <CustomButtonComponent
                    type={'button'}
                    InnerData={'ADD TO CART'}
                    ButtonClassName={'Add_to_cart'}
                    onClick={() => dispatch(addTocardProducts(selector[0]))}
                  />
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
