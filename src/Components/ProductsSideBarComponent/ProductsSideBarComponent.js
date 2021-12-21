import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSideBar } from '../../Redux/Action/action';
import SmallProductsShowCardComponent from '../SmallProductShowCardComponent/SmallProductsShowCardComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './ProductsSideBarComponent.css';

function ProductsSideBarComponent() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();
  let sum = 0;

  selector.AddToCardProducts.map((el) => {
    sum += el.totalPrice;
  });

  const HideSideBar = function (e) {
    if (e.target.classList.contains('ActiveSidebarOverLay')) {
      dispatch(showSideBar(false));
    }
  };

  return (
    <div className={selector.ShowSideBar == true ? 'Products_SideBar_Div ActiveSidebarOverLay' : 'Products_SideBar_Div'} onClick={HideSideBar}>
      <div className={selector.ShowSideBar == true ? 'Products_SideBar_Inner ActiveSideBar' : 'Products_SideBar_Inner'}>
        <div className="Products_SideBar_Title_Div">
          <h3>MY CART</h3>
          <h3>{selector.AddToCardProducts.length} ITEM</h3>
        </div>

        <div className="AddTOCard_AllProducts">
          {selector.AddToCardProducts.length > 0
            ? selector.AddToCardProducts.map(({ id, ...otherProps }) => <SmallProductsShowCardComponent key={id} {...otherProps} />)
            : null}
        </div>

        {/* CARD SUBTOTAL */}
        <div className="Card_Sub_Toal_Div">
          <div className="SubTotal_Div_Content">
            <h3>CART SUBTOTAL</h3>
            <h3>${sum}</h3>
          </div>

          <div className="Card_Sub_Button_Div">
            <CustomButtonComponent type={'button'} InnerData={'ADD TO CART'} ButtonClassName={'Keep_Shopping'} />
            <CustomButtonComponent type={'button'} InnerData={'GO TO CHECKOUT'} ButtonClassName={'CheckOutButton'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSideBarComponent;
