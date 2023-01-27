import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons'
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { searchRobots, requestRobots } from './reducer';
import { createLogger } from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';

const logger =createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore (rootReducer, applyMiddleware(thunkMiddleware, logger))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}>
            <App />
            </Provider>
);
