import React from 'react';

import BadgeComponent from '../../Components/BadgeComponent/BadgeComponent';
import BannerCardsComponent from '../../Components/BannerCardsComponent/BannerCardsComponent';
import ProductsCardComponent from '../../Components/ProductsCardComponent/productsCardComponent';
import SidebarComponent from '../../Components/SidebarComponent/SidebarComponent';
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
import HeadingComponent from '../../Components/HeadingComponent/HeadingComponent';
import ProductsSideBarComponent from '../../Components/ProductsSideBarComponent/ProductsSideBarComponent';

import './HomePage.css';

function HomePage() {
  return (
    <div>
      <ProductsSideBarComponent />
      <BadgeComponent />

      <div className="HomePage__Banner_Div Container">
        {/* Side bar Component */}
        <SidebarComponent />

        {/* 1 swith between the side bar component */}
        {/* 2 slider banner */}

        {/* Slider Section */}
        <SlideComponent />
      </div>

      {/* Banner Cards Section */}
      <BannerCardsComponent />

      <HeadingComponent />
      {/* Products Cards */}
      <ProductsCardComponent />
    </div>
  );
}

export default HomePage;
