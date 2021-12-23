import { ACTION_TYPE } from '../ActionType/actionType';

import { combineSelectedProducts } from '../../Products/Products-Group';

const initalState = {
  ShowMegaMenu: false,
  Products: null,
  AddToCardProducts: [],
  CloseModelWindow: false,
  SelectedProduct: null,
  ShowSideBar: false,
  UserEmail: null,
  WishListProducts: [],
  ShowProductPrev: false,
  ShowProductPrevData: null,
};

const userReducer = function (state = initalState, action) {
  switch (action.type) {
    case ACTION_TYPE.SHOW_AND_HIDE_MEGA_MENU:
      return {
        ...state,
        ShowMegaMenu: action.payload,
      };

    case ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        Products: [...action.payload],
      };

    case ACTION_TYPE.ADD_TO_CARD_PRODUCTS:
      return {
        ...state,
        AddToCardProducts: combineSelectedProducts(state.AddToCardProducts, action.payload),
      };

    case ACTION_TYPE.CLOSE_MODEL_WINDOW:
      return {
        ...state,
        CloseModelWindow: action.payload,
      };

    case ACTION_TYPE.SELECTED_PRODUCTS:
      return {
        ...state,
        SelectedProduct: [action.payload],
      };

    case ACTION_TYPE.SHOW_SIDE_BAR:
      return {
        ...state,
        ShowSideBar: action.payload,
      };

    case ACTION_TYPE.SET_EMAIL_ADDRESS:
      return {
        ...state,
        UserEmail: action.payload,
      };

    case ACTION_TYPE.WISH_LIST_PRODUCTS:
      return {
        ...state,
        WishListProducts: combineSelectedProducts(state.WishListProducts, action.payload),
      };

    case ACTION_TYPE.SHOP_PRODUCT_PREV:
      return {
        ...state,
        ShowProductPrev: action.payload,
      };

    case ACTION_TYPE.SHOP_PRODUCT_PREV_DATA:
      return {
        ...state,
        ShowProductPrevData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
