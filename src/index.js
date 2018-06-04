import '../resources/style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import promise from "redux-promise"
import ReduxThunk from "redux-thunk";
import "babel-polyfill";


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app-container')
);

