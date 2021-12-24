import React from 'react';

import WishListTableCardComponent from '../../Components/WissListTableCardComponent/WishListTableCardComponent';
import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';
import ProductsSummerTabComponent from '../../Components/ProductsSummerTabComponent/ProductsSummerTabComponent';

import { removeAllProducts } from '../../Redux/Action/action';
import { useSelector, useDispatch } from 'react-redux';

import './WishListPage.css';

function WishLsitPage() {
  const selector = useSelector((state) => state.userStoreData.WishListProducts);
  const dispatch = useDispatch();

  const RemoveAllProductsHandler = function () {
    dispatch(removeAllProducts());
  };

  return (
    <div className="Wishlist_Cotainer_div Container padding_One">
      <div className="Wishlist_Products_card">
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
          {selector !== null ? selector.map(({ id, ...otherData }) => <WishListTableCardComponent {...otherData} key={id} />) : null}
        </table>
      </div>

      <div className="Wishlist_Div_Buttons">
        <CustomButtonComponent type={'button'} InnerData={'CONTINUE SHOPPING'} ButtonClassName={'Continue_shopping_Button'} />
        <CustomButtonComponent type={'button'} InnerData={'CLEAR WISHLIST CARD'} ButtonClassName={'Add_to_cart'} onClick={RemoveAllProductsHandler} />
      </div>

      <div className="Products_Summer_Div">
        <ProductsSummerTabComponent />
      </div>
    </div>
  );
}

export default WishLsitPage;
