import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchData,
  addTocardProducts,
  closeModelWindow,
  selectedProduct,
  addToWishList,
  showProductPrev,
  showProductPrevData,
} from '../../Redux/Action/action';
import AddToCardPopupComponent from '../AddToCardPopupComponent/AddToCardPopupComponent';
import ImageViewComponent from '../ImageViewComponent/ImageViewComponent';

import './productsCardComponent.css';

function ProductsCardComponent() {
  const [IconsData, setIconsData] = useState([
    { icon: 'fas fa-search', id: 1 },
    { icon: 'far fa-heart', id: 2 },
    { icon: 'fas fa-shopping-bag', id: 3 },
  ]);
  const [ShowNotification, setShowNotification] = useState(false);

  const [ProductsImageRef, setProductsImagesRef] = useState([
    {
      ProductRef: '',
    },
  ]);

  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  const IconEventHandler = function (item, el) {
    if (item == 'fas fa-shopping-bag') {
      dispatch(addTocardProducts(el));
      dispatch(closeModelWindow(true));
      dispatch(selectedProduct(el));
    } else if (item == 'far fa-heart') {
      dispatch(addToWishList(el));
      setProductsImagesRef({ ProductRef: el.posterUrl });
      setShowNotification(true);
    } else if (item == 'fas fa-search') {
      dispatch(showProductPrev(!selector.ShowProductPrev));
      dispatch(showProductPrevData(el));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false);
    }, 2500);
  }, [ShowNotification]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="Products_Cards__Container Container padding_One">
      <AddToCardPopupComponent />
      <ImageViewComponent />

      <div className={!ShowNotification ? 'Products_Notification_Bar ' : 'Products_Notification_Bar showNotification_div'}>
        <div className="Products_Notification_Img_Div">
          <img src={ProductsImageRef.ProductRef} />
        </div>
        <div>
          <p>Added Into the Wishlist</p>
        </div>
      </div>

      {selector.Products !== null
        ? selector.Products.slice(0, 4).map((el) => (
            <div className="Products_Card_Inner" key={el.id}>
              <div className="New_Products">
                <p>-{Math.trunc((el.Deal_of_the_Day / el.ragulerPrice) * 100)}%</p>
              </div>
              <div className="Product_Image_Div">
                <Link to={`/Ecommerce/Products:${el.shortTitle}`}>
                  <img src={el.posterUrl} onClick={() => dispatch(selectedProduct(el))} />
                </Link>
              </div>
              <div className="Products_Container_div">
                <h2>{el.shortTitle}</h2>
                <div className="Price_Div">
                  <p className="Sale_Price">${el.Deal_of_the_Day}</p>
                  <p className="Ragular_Price">
                    <strike>${el.ragulerPrice}</strike>
                  </p>
                </div>
              </div>

              {/* Icons  */}
              <div className="Products_Icons_div">
                {IconsData.map((item) => (
                  <div className="Products_Icon_Inner_Div">
                    <i key={el.id} className={item.icon} onClick={() => IconEventHandler(item.icon, el)}></i>
                  </div>
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ProductsCardComponent;
