import * as types from '../actions';

const initialState = {
  showModal: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {...state, showModal: true, user: action.response};
    case types.LOGIN_USER_ERROR:
      return {...state, showModal: false};
    case types.CLOSE_MODAL:
      return {state, showModal: false};
    default:
      return state;
  }
}
