import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  ShowMegaMenu: false,
};

const userReducer = function (state = initalState, action) {
  switch (action.type) {
    case ACTION_TYPE.SHOW_AND_HIDE_MEGA_MENU:
      return {
        ...state,
        ShowMegaMenu: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
