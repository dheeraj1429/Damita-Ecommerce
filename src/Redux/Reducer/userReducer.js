import { ACTION_TYPE } from '../ActionType/actionType';

import { combineSelectedProducts } from '../../Products/Products-Group';

const initalState = {
  ShowMegaMenu: false,
  Products: null,
  WishListProductsData: [],
  CloseModelWindow: false,
  SelectedProduct: null,
  ShowSideBar: false,
  UserEmail: null,
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

    case ACTION_TYPE.WISH_LIST_PRODUCTS:
      return {
        ...state,
        WishListProductsData: combineSelectedProducts(state.WishListProductsData, action.payload),
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

    default:
      return state;
  }
};

export default userReducer;
