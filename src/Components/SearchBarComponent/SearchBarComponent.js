import React, { useState } from 'react';

import './SearchBarComponent.css';

function SearchBarComponent({ icon }) {
  const [SearchState, setSearchState] = useState('');

  const ChangeSearchInputValue = function (e) {
    setSearchState(e.target.value);
  };

  return (
    <div className="Search_Bar_Div">
      <div className="All__Category_Div">
        <p>All Category</p> <i class="fas fa-sort-down"></i>
      </div>

      <input type="search" placeholder="I'm searching for.." value={SearchState} onChange={ChangeSearchInputValue} />
      <div className="Search__Icon_Div">{icon ? <i className={icon} /> : null}</div>
    </div>
  );
}

export default SearchBarComponent;
