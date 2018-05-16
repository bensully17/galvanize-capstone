import { UI_START_LOADING, UI_STOP_LOADING, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  console.log('in reducers', action)
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case UI_STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case LOG_OUT:
      return {
        initialState
      }
    default:
      return state
  }
};

export default reducer