import React from 'react';

import './MegaMenuComponent.css';

function MegaMenuComponent({ Data }) {
  const ShowMegaMenuFunction = function (e) {
    e.target.style.visibility = 'visible';
    e.target.style.transform = 'translate(0)';
  };

  const HideMegaMenu = function (e) {
    e.target.style.visibility = 'hidden';
    e.target.style.transform = 'translateY(70px)';
  };

  return (
    <div
      className="Mega_Menu_Div"
      onMouseEnter={ShowMegaMenuFunction}
      onMouseLeave={HideMegaMenu}
      style={
        !Data
          ? {
              visibility: 'hidden',
            }
          : {
              visibility: 'visible',
              transform: 'translate(0)',
            }
      }
    ></div>
  );
}

export default MegaMenuComponent;
