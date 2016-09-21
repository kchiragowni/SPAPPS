// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import contacts from './contactReducer';
 import {routerReducer} from 'react-router-redux';
 
const rootReducer = combineReducers({
    contacts,
    routing: routerReducer
}); 

export default rootReducer;
