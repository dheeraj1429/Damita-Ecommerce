import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './BannerCardsComponent.css';

function BannerCardsComponent() {
  const [Cards, setCards] = useState([
    { url: '/Images/banner-three.jpg', id: 'Samsung-Tablate' },
    { url: '/Images/banner-two.jpg', id: 'New-Arrivls' },
    { url: '/Images/banner-one.jpg', id: 'Populat-Brand' },
  ]);

  return (
    <div className="Banner_Cards_Div Container padding_One">
      {Cards.map((el) => (
        <Link to={el.id}>
          <div className="Cards_Inner_Div" key={el.id}>
            <img src={el.url} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BannerCardsComponent;
