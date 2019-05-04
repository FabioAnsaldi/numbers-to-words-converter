'use strict';

import {applyMiddleware} from 'redux';
import {createStore} from 'redux-dynamic-reducer';
import {createLogger} from 'redux-logger';
import createReducer from './index';

const logger = createLogger({

    predicate: (getState, action) => {

        return process.env.NODE_ENV !== 'production';
    }
});

const store = createStore(createReducer(), applyMiddleware(logger));

if (module.hot) {
    // Enable Webpack hot module replacement for combiner
    module.hot.accept('../combiner', () => {

        const nextReducer = createReducer();
        store.replaceReducer(nextReducer);
    });
}

export default store;