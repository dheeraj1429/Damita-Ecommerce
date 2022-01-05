import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import WishListTableCardComponent from '../../Components/WissListTableCardComponent/WishListTableCardComponent';
import { removCardItem } from '../../Redux/Action/action';
import './CheckOutPage.css';

function CheckOutPage() {
  const selector = useSelector((state) => state.userStoreData.AddToCardProducts);
  const dispatch = useDispatch();

  console.log(selector);

  return (
    <div className="CheckOut_Container_Div Container">
      <div className="CheckOut_Inner_Div padding_One">
        <div className="Shopping_Heading">
          <h2>Shopping Cart</h2>
        </div>

        <div className="CheckOut_Payment_Inner_div">
          {/* Products Tables */}
          <div className="CheckOut_Products_div">
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
          </div>
          {/* Payment Info */}
          <div className="CheckOut_Payment_div"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
