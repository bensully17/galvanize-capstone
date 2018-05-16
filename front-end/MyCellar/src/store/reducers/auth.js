import { AUTH_SET_TOKEN, LOG_OUT } from "../actions/actionTypes"

const initialState = {
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case LOG_OUT:
      return {
        initialState
      }
    default:
      return state;
  }
};

export default reducer;