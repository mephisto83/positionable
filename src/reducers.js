import { combineReducers } from 'redux'
import positionableReducer from './reducers/positionableReducer'
const todoApp = combineReducers({
    positionableReducer
})

export default todoApp