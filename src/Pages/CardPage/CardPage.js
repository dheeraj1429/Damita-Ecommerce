import React from 'react';
import { useSelector } from 'react-redux';

import WishListTableCardComponent from '../../Components/WissListTableCardComponent/WishListTableCardComponent';
import ProductsSummerTabComponent from '../../Components/ProductsSummerTabComponent/ProductsSummerTabComponent';

import { removCardItem } from '../../Redux/Action/action';

import './CardPage.css';

function CardPage() {
  const selector = useSelector((state) => state.userStoreData.AddToCardProducts);

  return (
    <div className="Card_Container">
      <div className="Card_Container_Inner Container padding_One">
        <div className="Card_Heading">
          <h1>Card</h1>
        </div>

        <div className="Wishlist_Products_card">
          <div className="Table_Div">
            <table>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
              {selector !== null
                ? selector.map(({ id, ...otherData }) => <WishListTableCardComponent {...otherData} key={id} removeItemfrom={removCardItem} />)
                : null}
            </table>
          </div>
          <div className="TotalPrice_Div">
            <ProductsSummerTabComponent data={selector} style={'style_2'} buttonInner={'PROCEED TO CHECKOUT'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
