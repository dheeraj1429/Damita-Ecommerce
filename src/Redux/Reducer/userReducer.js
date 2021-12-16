import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  ShowMegaMenu: false,
  Products: null,
  LikeProductsData: [],
};

const combineSelectedProducts = function (cardItem, addToCardItem) {
  const exiting = cardItem.find((el) => el.id == addToCardItem.id);

  if (exiting) {
    return cardItem.map((el) =>
      el.id === addToCardItem.id ? { ...el, quntity: el.quntity + 1, totalPrice: el.totalPrice + el.Deal_of_the_Day } : el
    );
  }

  return [...cardItem, { ...addToCardItem, quntity: 1, totalPrice: addToCardItem.Deal_of_the_Day }];
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

    case ACTION_TYPE.LIKE_PRODUCTS:
      return {
        ...state,
        LikeProductsData: combineSelectedProducts(state.LikeProductsData, action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
