import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchData, wishListProducts, closeModelWindow, selectedProduct } from '../../Redux/Action/action';
import AddToCardPopupComponent from '../AddToCardPopupComponent/AddToCardPopupComponent';

import './productsCardComponent.css';

function ProductsCardComponent() {
  const [IconsData, setIconsData] = useState([
    { icon: 'fas fa-search', id: 1 },
    { icon: 'far fa-heart', id: 2 },
    { icon: 'fas fa-shopping-bag', id: 3 },
  ]);

  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  console.log(selector.Products);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="Products_Cards__Container Container padding_One">
      <AddToCardPopupComponent />

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
                    <i
                      key={el.id}
                      className={item.icon}
                      onClick={() => {
                        if (item.icon == 'fas fa-shopping-bag') {
                          dispatch(wishListProducts(el));
                          dispatch(closeModelWindow(true));
                        }
                      }}
                    ></i>
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
