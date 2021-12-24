import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModelWindow } from '../../Redux/Action/action';
import { useLocation } from 'react-router';

import './CustomButtonComponent.css';

function CustomButtonComponent({ type, InnerData, ButtonClassName, onClick }) {
  const location = useLocation();
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  return (
    <Link
      to={
        InnerData == 'CONTINUE SHOPPING' || InnerData == 'CLEAR WISHLIST CARD'
          ? `${location.pathname}`
          : `${InnerData.toLowerCase().replaceAll(' ', '')}`
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
            : () => dispatch(closeModelWindow(false))
        }
      >
        {InnerData}
      </button>
    </Link>
  );
}

export default CustomButtonComponent;
