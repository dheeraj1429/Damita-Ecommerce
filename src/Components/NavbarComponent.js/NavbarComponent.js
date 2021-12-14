import React, { useState } from 'react';

import UserDetailsComponent from '../UserDetailsComponent/UserDetailsComponent';

import './NavbarComponent.css';

function NavbarComponent() {
  const [Icons, setIcons] = useState([
    {
      ClassIcons: 'far fa-user',
    },
    {
      ClassIcons: 'far fa-heart',
    },
    {
      ClassIcons: 'fas fa-shopping-bag basket',
    },
  ]);

  return (
    <div className="Navbar__Container_Div Container padding_One">
      {/* Logo */}
      <div className="Navbar_Logo_Div">
        <img src="/Images/logo.png"></img>
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
                <div className="Orders">0</div>
                <i className={el.ClassIcons}></i>
              </div>
            ) : (
              <i className={el.ClassIcons}></i>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
