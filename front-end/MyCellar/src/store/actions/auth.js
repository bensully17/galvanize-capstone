import { AUTH_SET_TOKEN } from './actionTypes'

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  }
}