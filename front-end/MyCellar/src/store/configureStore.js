import { createStore, combineReducers } from 'redux'

import winesReducer from './reducers/wines'

const rootReducer = combineReducers({
    wines: winesReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore