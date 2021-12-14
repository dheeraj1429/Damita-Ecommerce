import React from 'react';

import './UserDetailsComponent.css';

function UserDetailsComponent({ Icon, timeData, SubData }) {
  return (
    <>
      <div className="User_Phone_Div">
        <i class={Icon}></i>
      </div>
      <div>
        <h3>{timeData}</h3>
        <p>{SubData}</p>
      </div>
    </>
  );
}

export default UserDetailsComponent;
