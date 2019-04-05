import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from './reducers/reducers-index.js';
import {Provider} from 'react-redux';
import { sessionService } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';

const store = createStore(allReducers, undefined, compose(applyMiddleware(thunkMiddleware)));
// Init the session service
sessionService.initSessionService(store);
sessionService.loadSession()
    .then(currentSession => allReducers.session = currentSession)
    .catch(err => console.log(err));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));



