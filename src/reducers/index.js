import { combineReducers } from 'redux'
import search from './search'
import fields from './fields'

const rootReducer = combineReducers({
  search,
  fields
})

export default rootReducer