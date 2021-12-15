import React from 'react';

import './CategoryNavComponent.css';

function CategoryNavComponent({ data, ClassName }) {
  return (
    <div className={ClassName ? `Category__Div ${ClassName}` : 'Category__Div'}>
      <p>{data}</p>
    </div>
  );
}

export default CategoryNavComponent;
