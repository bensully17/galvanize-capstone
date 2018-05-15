import { NEW_VINTAGE, NEW_WINE_GRAPES, NEW_WINE_MAKER, NEW_WINE_NAME, NEW_WINE_NOTES, NEW_WINE_VARIETAL, NEW_WINE_RATING, NEW_WINE_IMAGE } from '../actions/actionTypes'

const initialState = {
  vintage: null,
  grapes: [],
  maker: null,
  name: null,
  notes: null,
  varietal: null,
  rating: null,
  imageURL: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case NEW_VINTAGE:
      return {
        ...state,
        vintage: action.vintage
      }
    case NEW_WINE_GRAPES:
      return {
        ...state,
        grapes: action.grapes
      }
    case NEW_WINE_MAKER:
      return {
        ...state,
        maker: action.maker
      }
    case NEW_WINE_NAME:
      return {
        ...state,
        name: action.name
      }
    case NEW_WINE_NOTES:
      return {
        ...state,
        notes: action.notes
      }
    case NEW_WINE_VARIETAL:
      return {
        ...state,
        varietal: action.varietal
      }
    case NEW_WINE_RATING:
      return {
        ...state,
        rating: action.rating
      }
    case NEW_WINE_IMAGE:
      return {
        ...state,
        imageURL: action.imageURL
      }
    default: 
      return state
  }
}

export default reducer