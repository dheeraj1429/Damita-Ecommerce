import { ACTION_TYPE } from '../ActionType/actionType';

export const showMegaMenu = function (data) {
  return {
    type: ACTION_TYPE.SHOW_AND_HIDE_MEGA_MENU,
    payload: data,
  };
};
