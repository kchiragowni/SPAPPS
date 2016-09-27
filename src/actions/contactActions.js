import * as types from '../constants/actionTypes';
import contactApi from '../api/mockContactApi';
import spApi from '../api/spApi';

export function fetchContacts() {
  return fetch("/sites/dev/_api/web/lists/GetByTitle('Contacts')/items");
}

export function loadContactsSuccess(contacts) {
  return {type: types.LOAD_CONTACTS_SUCCESS , contacts};
}

export function loadSPContactsSuccess(contacts) {
  return {type: types.LOAD_CONTACTS_SUCCESS, contacts};
}

export function loadContacts() {
  return function(dispatch) {
    return contactApi.getAllContacts()
      .then(contacts => {
        dispatch(loadContactsSuccess(contacts));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function loadSPContacts(){
  return function(dispatch) {
    return spApi.getRequest('Contacts')
            .then((contacts) => {
              dispatch(loadContactsSuccess(contacts));
            })
            .catch((error) => {
              console.log(error);
            });
  };
}
