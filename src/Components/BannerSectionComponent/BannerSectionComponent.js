import React, { useState } from 'react';

import './BannerSectionComponent.css';

function BannerSectionComponent() {
  const [BannerUrl, setBannerUrl] = useState([
    { url: '/Images/banner-five.jpg', id: 1 },
    { url: '/Images/banner-four.jpg', id: 2 },
  ]);
  return (
    <div className="Banner_Section_Div Container">
      <div className="Banner_Cards padding_One">
        <div className="Banner_Section_Div_Inner_Card">
          <div className="Banner_Section_Card_ZtD">
            {BannerUrl.map((el) => (
              <div key={el.id}>
                <img src={el.url} />
              </div>
            ))}
          </div>
          <div>
            <iframe
              width="560"
              src="https://www.youtube.com/embed/XKfgdkcIUxw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="Video"
            ></iframe>
          </div>
          <div className="Section_Banner_Second">
            <img src="/Images/sale-banner.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSectionComponent;
