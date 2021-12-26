import React from 'react';

import { useDispatch } from 'react-redux';

import './WishListTableCardComponent.css';

function WishListTableCardComponent({ posterUrl, shortTitle, Deal_of_the_Day, quntity, totalPrice, removeItemfrom }) {
  const dispatch = useDispatch();

  const removeProductsData = function () {
    dispatch(removeItemfrom(shortTitle));
  };

  return (
    <tr>
      <td>
        <div className="Wishlist_Products_Img_div">
          <img src={posterUrl} />
          <h3>{shortTitle}</h3>
        </div>
      </td>
      <td>
        <h3>${Deal_of_the_Day}</h3>
      </td>
      <td>{quntity}</td>
      <td>${totalPrice}</td>
      <td>
        <i class="fas fa-trash-alt Remove_Products" onClick={removeItemfrom ? () => removeProductsData() : null}></i>
      </td>
    </tr>
  );
}

export default WishListTableCardComponent;
