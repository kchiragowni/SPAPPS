// Set up your application entry point here...

/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import './styles/styles.scss';

// globals.scss
import '../node_modules/office-ui-fabric-react/dist/sass/Fabric.Typography.Fonts.Output.scss';
import '../node_modules/office-ui-fabric-react/dist/sass/Fabric.Icons.Font.Output.scss';

import routes from './routes';
import { loadContacts } from './actions/contactActions';

const store = configureStore();
store.dispatch(loadContacts());

render(
    <Provider store={store}>    
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
