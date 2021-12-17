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
