import React from 'react';

import './FooterContnetComponent.css';

function FooterContnetComponent({ Heading, data }) {
  const { first, second, three, Four, Five } = data;
  return (
    <div>
      <h3>{Heading}</h3>
      <p>{first}</p>
      <p>{second}</p>
      <p>{three}</p>
      <p>{Four}</p>
      <p>{Five}</p>
    </div>
  );
}

export default FooterContnetComponent;
