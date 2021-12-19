import React, { useState, useEffect } from 'react';

import firestore, { auth } from '../../Firebase/Firebase.utility';
import { setEmailData } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';

import './SendEmailComponent.css';

function SendEmailComponent() {
  const dispatch = useDispatch();
  const [UserEmail, setUserEmail] = useState('');

  const ChangeUserValue = function (e) {
    setUserEmail(e.target.value);
  };

  const SendUserDetialsHandler = function () {};

  return (
    <div className="SendEmail_Div">
      <input type="email" placeholder="Your email letter" value={UserEmail} onChange={ChangeUserValue} />
      <div className="Send_Email_Button_Div" onClick={SendUserDetialsHandler}>
        <img src="https://m2.alothemes.com/dimita/static/version1638848983/frontend/Alothemes/dimita9/en_US/images/alothemes/email.png" />
      </div>
    </div>
  );
}

export default SendEmailComponent;
