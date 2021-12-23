import React from 'react';

import BadgeComponent from '../../Components/BadgeComponent/BadgeComponent';
import BannerCardsComponent from '../../Components/BannerCardsComponent/BannerCardsComponent';
import ProductsCardComponent from '../../Components/ProductsCardComponent/productsCardComponent';
import SidebarComponent from '../../Components/SidebarComponent/SidebarComponent';
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
import HeadingComponent from '../../Components/HeadingComponent/HeadingComponent';
import BannerSectionComponent from '../../Components/BannerSectionComponent/BannerSectionComponent';

import './HomePage.css';
import NewsLetterComponent from '../../Components/NewsLetterComponent.js/NewsLetterComponent';

function HomePage() {
  return (
    <div>
      <BadgeComponent />

      <div className="HomePage__Banner_Div Container">
        <SidebarComponent />
        <SlideComponent />
      </div>

      <BannerCardsComponent />
      <HeadingComponent />
      <ProductsCardComponent />
      <BannerSectionComponent />
      <NewsLetterComponent />
    </div>
  );
}

export default HomePage;
