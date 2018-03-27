import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReportsStore from './reducers/index';
import AppContainer from './containers/app-container';
import thunkMiddleware from 'redux-thunk';

let store = createStore(
    ReportsStore,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
