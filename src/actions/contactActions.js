import * as types from '../constants/actionTypes';
import contactApi from '../api/mockContactApi';
import axios from 'axios';

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

//const userName = 'kchiragowni';

export function loadSPContacts(){
  return function(dispatch) {
    //return fetch(`https://api.github.com/users/${userName}/repos`)
    return axios({
                  url: `web/lists/GetByTitle('Contacts')/items`,
                  method: 'get',
                  baseURL: 'https://devkitchen1.sharepoint.com/sites/dev/_api/',
                  headers: {
                    accept: "application/json;odata=verbose"
                  },
                  auth: {
                    username: 'kiran@devkitchen1.onmicrosoft.com',
                    password: 'Mahendra12*'
                  },
                })
      .then(contacts => contacts.data.value)
      .then(contacts => {
          /*eslint-disable no-console*/
          console.log(contacts);
          dispatch(loadSPContactsSuccess(contacts));
      })
      .catch(error => {
        throw(error);
      });
  };
}
