import React from 'react';

import FooterContnetComponent from '../FooterContentComponent/FooterContnetComponent';

import './FooterComponent.css';

function FooterComponent() {
  return (
    <div className="Footer_Div padding_One">
      <div className="Footer_Container_Div Container">
        <FooterContnetComponent
          Heading={'CONTACT INFORMATION'}
          data={{
            first: 'DELHI, NEW DELHI, CHIRAG DELHI 402 H.NO.',
            second: 'Phone - 1001-245-545-786',
            three: 'Fax - 1022-548-565-823',
            Four: 'Email - support@gmail.com',
          }}
        />
        <FooterContnetComponent
          Heading={'FIND IT FAST'}
          HeadingOne={'About Us'}
          data={{
            first: 'About Us',
            second: 'Shop Products',
            three: 'My Card',
            Four: 'Checkout',
            Five: 'Contact Us',
          }}
        />
        <FooterContnetComponent
          Heading={'CUSTMER CARE'}
          data={{
            first: 'Gift a Smile',
            second: 'Creybit Cares',
            three: 'Size Guide',
            Four: 'F.A.Q.',
            Five: 'Privacy & P0licy',
          }}
        />
        <FooterContnetComponent
          Heading={'USEFUL LINKS'}
          data={{
            first: 'Product Recall',
            second: 'Gilf Vouchers',
            three: 'Return & Exchanges',
            Four: 'Shipping Option',
            Five: 'Help & FAQs',
          }}
        />
      </div>
    </div>
  );
}

export default FooterComponent;
