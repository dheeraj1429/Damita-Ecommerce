import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { showProductPrev } from '../../Redux/Action/action';

import './ImageViewComponent.css';

function ImageViewComponent() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <>
      {selector.ShowProductPrevData !== null ? (
        <div className={!selector.ShowProductPrev ? 'Products_Images_View HideProducts_Image_View' : 'Products_Images_View'}>
          <div className="Products_image">
            <div
              className="Products_close_Button_Div"
              onClick={() => {
                dispatch(showProductPrev(!selector.ShowProductPrev));
              }}
            >
              <i class="fas fa-times"></i>
            </div>
            <div>
              <img src={selector.ShowProductPrevData.posterUrl} />
            </div>

            <div className="Products_Dec">
              <h1>{selector.ShowProductPrevData.Discription}</h1>
              <div className="Product_dec_Div">
                <p>{selector.ShowProductPrevData.About}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('Image_View_Div')
  );
}

export default ImageViewComponent;
