import { NEW_VINTAGE, NEW_WINE_NAME, NEW_WINE_MAKER, NEW_WINE_VARIETAL, NEW_WINE_GRAPES, NEW_WINE_NOTES } from './actionTypes'

export const newWineVintage = (vintage) => {
  return {
    type: NEW_VINTAGE,
    vintage: vintage
  }
}

export const newWineName = (name) => {
  return {
    type: NEW_WINE_NAME,
    name: name
  }
}

export const newWineMaker = (maker) => {
  return {
    type: NEW_WINE_MAKER,
    maker: maker 
  }
}

export const newWineVarietal = (varietal) => {
  return {
    type: NEW_WINE_VARIETAL,
    varietal: varietal
  }
}

export const newWineGrapes = (grapes) => {
  return {
    type: NEW_WINE_GRAPES,
    grapes: grapes
  }
}

export const newWineNotes = (notes) => {
  return {
    type: NEW_WINE_NOTES,
    notes: notes
  }
}