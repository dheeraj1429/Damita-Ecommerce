import React from 'react';

import CategoryNavComponent from '../CategoryNavComponent/CategoryNavComponent';

import './SidebarComponent.css';

function SidebarComponent() {
  return (
    <div className="SideBar_Div">
      <CategoryNavComponent data={'BROWSER CATEGORIES'} ClassName="Active_Category" />
      <CategoryNavComponent data={'Audio & Home'} />
      <CategoryNavComponent data={'Camera & Phot'} />
      <CategoryNavComponent data={'Headphoes & spekers'} />
      <CategoryNavComponent data={'Computers & Laptops'} />
      <CategoryNavComponent data={'Games & Console'} />
      <CategoryNavComponent data={'Video & Game'} />
      <CategoryNavComponent data={'Battery & Accessries'} />
      <CategoryNavComponent data={'Headphones'} />
      <CategoryNavComponent data={'Samrtphone'} />
      <CategoryNavComponent data={'Children'} />
    </div>
  );
}

export default SidebarComponent;
