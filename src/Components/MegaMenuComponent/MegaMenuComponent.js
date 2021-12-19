import React from 'react';

import './MegaMenuComponent.css';

function MegaMenuComponent({ Data }) {
  const ShowMegaMenuFunction = function (e) {
    if (e.target.classList.contains('Mega_Menu_Div')) {
      e.target.style.visibility = 'visible';
      e.target.style.transform = 'translate(0)';
    }
  };

  const HideMegaMenu = function (e) {
    if (e.target.classList.contains('Mega_Menu_Div')) {
      e.target.style.visibility = 'hidden';
      e.target.style.transform = 'translateY(70px)';
    }
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
    >
      <div className="Mega_Menu_Content">
        <div className="Mega_Menu_Content_Inner">
          <h3>Featured</h3>
          <p>New Release</p>
          <p>New Members</p>
          <p>Neutrals</p>
          <p>Member Access</p>
        </div>
        <div className="Mega_Menu_Content_Inner">
          <h3>Shoes</h3>
          <p>Basketball</p>
          <p>FootBall</p>
          <p>Runing</p>
          <p>All Shoes</p>
        </div>
        <div className="Mega_Menu_Content_Inner">
          <h3>Cloting</h3>
          <p>Top</p>
          <p>Bootom</p>
          <p>Outwears</p>
          <p>Tracksuits</p>
        </div>
      </div>
    </div>
  );
}

export default MegaMenuComponent;
