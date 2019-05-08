'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as actions from './actions';
import layoutState from '../../components/layout/reducer';
import store from '../../combiner/store';
import * as reducers from '../views/**/reducer.js';

const Layout = lazy(() => import('../layout/index.jsx'));
store.attachReducers({layoutState});

export class Application extends Component {

    setViewReducer() {

        this.props.applicationState.routes.map((obj, i) => {

            let viewReducer = `{"${obj.viewFolderName}State": {}}`;

            viewReducer = JSON.parse(viewReducer);
            viewReducer[`${obj.viewFolderName}State`] = reducers[obj.viewFolderName];
            store.attachReducers(viewReducer);
        });
    }

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `http://${process.env.SERVER_CONFIG.database.address}:${process.env.SERVER_CONFIG.database.port}`,
            url: '/routes',
            timeout: 3000,
        })
            .then((response) => {

                this.props.dispatch(actions.setRoutes(response.data));
                this.setViewReducer();
            });
    }

    render() {

        return (
            <Suspense fallback={<div>Loading ...</div>}>
                <Layout/>
            </Suspense>
        );
    }
}

function mapStateToProps(state) {

    return {

        applicationState: state.applicationState
    };
}

export default withRouter(connect(mapStateToProps)(Application));