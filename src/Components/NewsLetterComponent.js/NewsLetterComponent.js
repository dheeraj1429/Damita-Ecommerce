import React, { useEffect, useState } from 'react';
import SendEmailComponent from '../SendEmailComponent/SendEmailComponent';

import firestore from '../../Firebase/Firebase.utility';
import { useSelector } from 'react-redux';

import './NewsLetterComponent.css';

function NewsLetterComponent() {
  const selector = useSelector((state) => state.userStoreData.UserEmail);
  const [UserAv, setUserAv] = useState(false);

  return (
    <div className="NewsLetter_Div Container padding_One">
      <div className="NewsLetter_Inner_Div">
        {!UserAv ? (
          <>
            <div className="NewsLetter_Content">
              <h2>SINGIN FOR OUR NEWSLETTER</h2>
              <p>“Thank you for your love and all the ways you support me – you’re simply the best.”</p>
            </div>
            <div className="NewsLetter_SignIn_Div">
              <SendEmailComponent />
            </div>
          </>
        ) : (
          <>
            <h3>Thank you For Subscribe</h3>
            <p>“Thank you for your love and all the ways you support me – you’re simply the best.”</p>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsLetterComponent;
