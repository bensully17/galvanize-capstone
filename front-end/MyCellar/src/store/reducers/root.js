import { ADD_WINE, DELETE_WINE, SELECT_WINE, DESELECT_WINE } from '../actions/actionTypes'

const initialState = {
  wines: [],
  selectedWine: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WINE:
      return {
        ...state,
        wines: state.wines.concat({
          key: Math.random(),
          name: action.wineName
        })
      }
    case DELETE_WINE: 
      return {
        ...state,
        wines: state.wines.filter(wine => {
          return wine.key !== state.selectedWine.key
        }),
        selectedWine: null
      }

    default:
      return state
  }
}

export default reducer