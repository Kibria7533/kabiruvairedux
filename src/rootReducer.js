import incrementReducer from './incrementReducer'
import {combineReducers} from 'redux'
import storeReducer from './storeReducer'

const rootReducer=combineReducers({
incrementReducer,storeReducer
});

export default rootReducer;