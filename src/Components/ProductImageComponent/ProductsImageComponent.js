import React, { useState } from 'react';

import './ProductsImageComponent.css';

function ProductsImageComponent({ data }) {
  const [ProductData, setProductData] = useState('');

  return (
    <div className="Products_Single_Img_Data">
      <div className="Img_Prev">{ProductData ? <img src={ProductData} /> : <img src={data[0].posterUrl} />}</div>
      <div className="Img_Prev_Sm">
        {data[0]
          ? data[0].shortImages.map((el) => (
              <div className="Img_Prev_Cards" key={el.id}>
                <img src={el.url} onMouseEnter={() => setProductData(el.url)} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProductsImageComponent;
