import React, { useState } from 'react';

import './HeadingComponent.css';

function HeadingComponent() {
  const [HeadingContent, setHeadingContent] = useState([{ data: 'BEST SELLER' }, { data: 'FEATURED PRODUCTS' }, { data: 'NEW PRODUCTS' }]);

  const [HeadingArrow, setHeadingArrpow] = useState([{ data: 'fas fa-chevron-left' }, { data: 'fas fa-chevron-right' }]);

  const [ActiveBar, setActiveBar] = useState();

  const ChangeStyleHandler = function (e) {
    const target = e.target.textContent;
    setActiveBar(target);
  };

  return (
    <div className="Products__Heading_Div Container">
      <div className="Products_Heading_Inner">
        <div className="Heading_Content_Div">
          {HeadingContent.map((el) => (
            <p onClick={ChangeStyleHandler} className={ActiveBar == el.data ? 'HeadingActive' : null}>
              {el.data}
            </p>
          ))}
        </div>
        <div className="Heading_Arrow_Div">
          {HeadingArrow.map((el) => (
            <i className={el.data}></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadingComponent;
