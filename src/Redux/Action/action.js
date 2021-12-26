import { ACTION_TYPE } from '../ActionType/actionType';
import { AllProducts } from '../../Products/Products-Utility';

export const showMegaMenu = function (data) {
  return {
    type: ACTION_TYPE.SHOW_AND_HIDE_MEGA_MENU,
    payload: data,
  };
};

export const fetchData = function () {
  return async function (dispatch) {
    const data = AllProducts;

    dispatch({
      type: ACTION_TYPE.SET_PRODUCTS,
      payload: data,
    });
  };
};

export const addTocardProducts = function (data) {
  return {
    type: ACTION_TYPE.ADD_TO_CARD_PRODUCTS,
    payload: data,
  };
};

export const closeModelWindow = function (data) {
  return {
    type: ACTION_TYPE.CLOSE_MODEL_WINDOW,
    payload: data,
  };
};

export const selectedProduct = function (data) {
  return {
    type: ACTION_TYPE.SELECTED_PRODUCTS,
    payload: data,
  };
};

export const showSideBar = function (data) {
  return {
    type: ACTION_TYPE.SHOW_SIDE_BAR,
    payload: data,
  };
};

export const setEmailData = function (data) {
  return {
    type: ACTION_TYPE.SET_EMAIL_ADDRESS,
    payload: data,
  };
};

export const addToWishList = function (data) {
  return {
    type: ACTION_TYPE.WISH_LIST_PRODUCTS,
    payload: data,
  };
};

export const showProductPrev = function (data) {
  return {
    type: ACTION_TYPE.SHOP_PRODUCT_PREV,
    payload: data,
  };
};

export const showProductPrevData = function (data) {
  return {
    type: ACTION_TYPE.SHOP_PRODUCT_PREV_DATA,
    payload: data,
  };
};

export const removeWhislistProducts = function (data) {
  return {
    type: ACTION_TYPE.REMOVE_WISHLIST_PRODUCTS,
    payload: data,
  };
};

export const removeAllProducts = function () {
  return {
    type: ACTION_TYPE.REMOVE_ALL_PRODUCTS,
  };
};

export const removCardItem = function (data) {
  return {
    type: ACTION_TYPE.REMOVE_CARD_ITEM,
    payload: data,
  };
};
