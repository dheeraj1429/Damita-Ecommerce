import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSideBar } from '../../Redux/Action/action';

import './ProductsSideBarComponent.css';

function ProductsSideBarComponent() {
  const selector = useSelector((state) => state.userStoreData.ShowSideBar);
  const dispatch = useDispatch();

  const HideSideBar = function (e) {
    if (e.target.classList.contains('ActiveSidebarOverLay')) {
      dispatch(showSideBar(false));
    }
  };

  return (
    <div className={selector == true ? 'Products_SideBar_Div ActiveSidebarOverLay' : 'Products_SideBar_Div'} onClick={HideSideBar}>
      <div className={selector == true ? 'Products_SideBar_Inner ActiveSideBar' : 'Products_SideBar_Inner'}></div>
    </div>
  );
}

export default ProductsSideBarComponent;
