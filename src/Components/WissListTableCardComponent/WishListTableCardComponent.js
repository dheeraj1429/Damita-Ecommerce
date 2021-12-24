import React from 'react';

import { removeWhislistProducts } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';

import './WishListTableCardComponent.css';

function WishListTableCardComponent({ posterUrl, shortTitle, Deal_of_the_Day, quntity, totalPrice }) {
  const dispatch = useDispatch();

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
        <i class="fas fa-trash-alt Remove_Products" onClick={() => dispatch(removeWhislistProducts(shortTitle))}></i>
      </td>
    </tr>
  );
}

export default WishListTableCardComponent;
