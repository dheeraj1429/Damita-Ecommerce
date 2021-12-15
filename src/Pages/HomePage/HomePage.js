import React from 'react';

import BadgeComponent from '../../Components/BadgeComponent/BadgeComponent';
import SidebarComponent from '../../Components/SidebarComponent/SidebarComponent';

import './HomePage.css';

function HomePage() {
  return (
    <div>
      <BadgeComponent />

      <div className="HomePage__Banner_Div Container">
        {/* Side bar Component */}
        <SidebarComponent />

        {/* 1 swith between the side bar component */}
        {/* 2 slider banner */}

        {/* Slider Section */}
        <div className="HomePage__Slider_Div">
          <img src="/Images/slider-one.png" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
