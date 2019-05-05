'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetConverter = () => {

    return Object.assign({}, {

        type: TYPES.RESET_STATE
    }, initialState);
};

export const setValue = (input) => {

    return {

        type: TYPES.SET_VALUE,
        value: input
    };
};

export const setName = (input) => {

    return {

        type: TYPES.SET_NAME,
        name: input
    };
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};