'use strict';

import TYPES from './types';

export const initialState = {

    value: '',
    name: '',
    error: ''
};

const converterState = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_VALUE:
            return Object.assign({}, state, {'value': action.value});
        case TYPES.SET_NAME:
            return Object.assign({}, state, {'name': action.name});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default converterState;
