import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UserDetailsComponent from '../UserDetailsComponent/UserDetailsComponent';
import { showSideBar } from '../../Redux/Action/action';

import { useSelector, useDispatch } from 'react-redux';

import './NavbarComponent.css';

function NavbarComponent() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  const [Icons, setIcons] = useState([
    {
      ClassIcons: 'far fa-user',
      urlPage: 'User',
    },
    {
      ClassIcons: 'far fa-heart',
      urlPage: 'Like',
    },
    {
      ClassIcons: 'fas fa-shopping-bag basket',
      urlPage: 'Store',
    },
  ]);

  return (
    <div className="Navbar__Container_Div Container padding_One">
      {/* Logo */}
      <div className="Navbar_Logo_Div">
        <Link to="/">
          <img src="/Images/logo.png"></img>
        </Link>
      </div>

      <div className="User__Details_Div">
        <div className="User__Phone">
          <UserDetailsComponent Icon={'fas fa-phone'} timeData={'CALL US:'} SubData={'1 001 234 456 789'} />
          <UserDetailsComponent Icon={'fas fa-clock'} timeData={'OPEN TIME:'} SubData={'7 DAYS a week from 9:00 am to 7:00'} />
        </div>

        <div className="Navbar__Icons_Div">
          {/* Icons */}
          {Icons.map((el) =>
            el.ClassIcons == 'fas fa-shopping-bag basket' ? (
              <div className="Basket_Div">
                <div className="Orders">{selector.WishListProductsData.length}</div>
                <i className={el.ClassIcons} onClick={() => dispatch(showSideBar(!selector.ShowSideBar))}></i>
              </div>
            ) : (
              <Link to={el.urlPage}>
                <i className={el.ClassIcons}></i>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
