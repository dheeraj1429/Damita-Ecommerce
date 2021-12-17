import React from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import { closeModelWindow } from '../../Redux/Action/action';

import './AddToCardPopupComponent.css';

function AddToCardPopupComponent() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  const { posterUrl, Deal_of_the_Day, ragulerPrice, shortTitle } = selector.SelectedProduct[0];

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
      <div className="AddToCard_PopUp_Div">
        <i class="fas fa-times AddToCar_Close_Button" onClick={() => dispatch(closeModelWindow(false))}></i>
        <div className="AddToCard_Flex_Div">
          <div className="Products_Img_div">
            <img src={posterUrl} />
          </div>
          <div>
            <div className="Products_Container_div">
              <h1>You added to your cart.</h1>
              <h2>{shortTitle}</h2>
              <div className="Price_Div">
                <p className="Sale_Price">${Deal_of_the_Day}</p>
                <p className="Ragular_Price">
                  <strike>${ragulerPrice}</strike>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="AddToCard_PopUp_Div_Buttons">
          <CustomButtonComponent type={'button'} InnerData={'View Cart'} ButtonClassName={'View-Cart-Button'} />
          <CustomButtonComponent type={'button'} InnerData={'CONTINUE SHOPPING'} ButtonClassName={'View-Cart-Button'} />
        </div>
      </div>
    </div>,
    document.getElementById('Portal-Div')
  );
}

export default AddToCardPopupComponent;
