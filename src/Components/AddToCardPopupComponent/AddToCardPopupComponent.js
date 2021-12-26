import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import { closeModelWindow } from '../../Redux/Action/action';

import './AddToCardPopupComponent.css';

function AddToCardPopupComponent() {
  const [ProductsData, setProductsData] = useState([]);
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selector.SelectedProduct !== null) {
      const { posterUrl, Deal_of_the_Day, ragulerPrice, shortTitle } = selector.SelectedProduct[0];

      setProductsData({
        posterUrl,
        Deal_of_the_Day,
        ragulerPrice,
        shortTitle,
      });
    }
  }, [selector.SelectedProduct]);

  const CloseModelWindow = function (e) {
    if (e.target.classList.contains('AddToCard_PopUp_Component_Active')) {
      dispatch(closeModelWindow(false));
    }
  };

  return ReactDom.createPortal(
    <div
      className={!selector.CloseModelWindow ? 'AddTOCard_OverLay_Div' : `AddToCard_PopUp_Component_Active AddTOCard_OverLay_Div`}
      onClick={CloseModelWindow}
    >
      {ProductsData ? (
        <div className="AddToCard_PopUp_Div">
          <i class="fas fa-times AddToCar_Close_Button" onClick={() => dispatch(closeModelWindow(false))}></i>
          <div className="AddToCard_Flex_Div">
            <div className="Products_Img_div">
              <img src={ProductsData.posterUrl} />
            </div>
            <div>
              <div className="Products_Container_div">
                <h1>You added to your cart.</h1>
                <h2>{ProductsData.shortTitle}</h2>
                <div className="Price_Div">
                  <p className="Sale_Price">${ProductsData.Deal_of_the_Day}</p>
                  <p className="Ragular_Price">
                    <strike>${ProductsData.ragulerPrice}</strike>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="AddToCard_PopUp_Div_Buttons">
            <CustomButtonComponent type={'button'} InnerData={'ADD TO CART'} ButtonClassName={'View-Cart-Button'} />
            <CustomButtonComponent type={'button'} InnerData={'CONTINUE SHOPPING'} ButtonClassName={'View-Cart-Button'} />
          </div>
        </div>
      ) : null}
    </div>,
    document.getElementById('Portal-Div')
  );
}

export default AddToCardPopupComponent;
