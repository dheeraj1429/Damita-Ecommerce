import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryNavComponent.css';

function CategoryNavComponent({ data, ClassName }) {
  return (
    <Link to={data.replaceAll(' ', '_')}>
      <div className={ClassName ? `Category__Div ${ClassName}` : 'Category__Div'}>
        <p>{data}</p>
      </div>
    </Link>
  );
}

export default CategoryNavComponent;
