'use strict';

import {combineReducers} from 'redux';
import applicationState from "../components/application/reducer";

export default function createReducer() {

    return combineReducers({

        applicationState: applicationState
    });
}