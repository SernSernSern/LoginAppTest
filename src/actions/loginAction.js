import * as types from './index';

export const loginAction = user => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};
