import { ADD_WINE, DELETE_WINE, SELECT_WINE, DESELECT_WINE } from './actionTypes'

export const addWine = (wineName) => {
  return {
    type: ADD_WINE,
    wineName: wineName
  }
}

export const deleteWine = () => {
  return {
    type: DELETE_WINE,
  }
}

export const selectWine = (key) => {
  return {
    type: SELECT_WINE,
    wineKey: key
  }
}

export const deselectWine = () => {
  return {
    type: DESELECT_WINE
  }
}