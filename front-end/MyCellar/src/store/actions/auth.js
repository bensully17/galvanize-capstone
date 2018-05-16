import { AUTH_SET_TOKEN, LOG_OUT } from './actionTypes'

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  }
}

export const logout = () => {
  return {
    type: LOG_OUT
  }
}