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

export const wishListProducts = function (data) {
  return {
    type: ACTION_TYPE.WISH_LIST_PRODUCTS,
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
