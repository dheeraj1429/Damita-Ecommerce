import React, { useState } from 'react';

import './SearchBarComponent.css';

function SearchBarComponent() {
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
      <div className="Search__Icon_Div">
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBarComponent;
