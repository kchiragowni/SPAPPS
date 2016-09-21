import * as types from '../constants/actionTypes';
//import objectAssign from 'object-assign';
import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
    switch(action.type) {
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts;

        default:
            return state;
    }
}
