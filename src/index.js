/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//import './styles/styles.scss';

import routes from './routes';
import { loadSPContacts } from './actions/contactActions';

const store = configureStore();
store.dispatch(loadSPContacts());

render(
    <Provider store={store}>    
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
