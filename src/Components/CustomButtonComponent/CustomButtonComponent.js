import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModelWindow } from '../../Redux/Action/action';
import { useLocation } from 'react-router';
import { showSideBar } from '../../Redux/Action/action';

import './CustomButtonComponent.css';

function CustomButtonComponent({ type, InnerData, ButtonClassName, onClick }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const ChangeUrlLoactionFunction = function (data) {
    return `${data.toLowerCase().replaceAll(' ', '')}`;
  };

  const DispatchFunction = function () {
    dispatch(closeModelWindow(false));
    dispatch(showSideBar(false));
  };

  return (
    <Link
      to={
        InnerData == 'CLEAR WISHLIST CARD'
          ? `${location.pathname}`
          : ChangeUrlLoactionFunction(InnerData)
          ? InnerData == 'CONTINUE SHOPPING'
            ? '/'
            : ChangeUrlLoactionFunction(InnerData)
            ? InnerData == 'ADD TO CART'
              ? '/card'
              : ChangeUrlLoactionFunction(InnerData)
            : null
          : null
      }
    >
      <button
        type={type}
        className={ButtonClassName ? ` ${ButtonClassName} EcoButtonXqe` : 'EcoButtonXqe'}
        onClick={
          onClick
            ? () => {
                onClick();
              }
            : () => DispatchFunction()
        }
      >
        {InnerData}
      </button>
    </Link>
  );
}

export default CustomButtonComponent;
