import React, { useState } from 'react';
import MegaMenuComponent from '../MegaMenuComponent/MegaMenuComponent';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';

import './SecondNavbarComponent.css';

function SecondNavbarComponent() {
  const [NavbarLinks, setNavbarLinks] = useState([{ name: 'HOME' }, { name: 'SHOP' }, { name: 'PAGES' }, { name: 'CONTACT US' }, { name: 'ABOUT' }]);

  // const [ShowMegaMenu, setShowMegaMenu] = useState(false);

  // const ShowMegeMenu = function () {
  //   setShowMegaMenu(true);
  // };

  // const HideMegaMenu = function () {
  //   setShowMegaMenu(false);
  // };

  return (
    <div className="Second__Navbar_Div Container">
      {/* Links */}
      <div className="Navbar__Links">
        {NavbarLinks.map((el) => (
          <p>
            {el.name}
            <span>{/* <i class="fas fa-chevron-down"></i> */}</span>
          </p>
        ))}
      </div>
      {/* Search Component */}
      <SearchBarComponent icon={'fas fa-search'} />

      {/* Mega Menu Component */}
      {/* <MegaMenuComponent Data={ShowMegaMenu} /> */}
    </div>
  );
}

export default SecondNavbarComponent;
