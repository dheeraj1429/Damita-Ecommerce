import React from 'react';

import CustomBedgeComponent from '../CustomBedgeComponent/CustomBedgeComponent';

import './BadgeComponent.css';

function BadgeComponent() {
  return (
    <div className="Bedge__Div Container">
      <CustomBedgeComponent img={'/Icons/like.png'} title={'100% SATISFACATION'} subTitle={'If you are unable'} />
      <CustomBedgeComponent img={'/Icons/flight.png'} title={'SAVE 20% WHEN YOU'} subTitle={'Use credit card'} />
      <CustomBedgeComponent img={'/Icons/money.png'} title={'FAST FREE SHIPMENT'} subTitle={'Load any computers'} />
      <CustomBedgeComponent img={'/Icons/mouse.png'} title={'60-DAY MONEY BACK'} subTitle={'If youare unible'} />
    </div>
  );
}

export default BadgeComponent;
