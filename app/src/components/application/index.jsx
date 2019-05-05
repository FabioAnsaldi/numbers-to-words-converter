'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as actions from './actions';
import layoutState from '../../components/layout/reducer';
import store from '../../combiner/store';

const Layout = lazy(() => import('../layout/index.jsx'));
store.attachReducers({layoutState});

export class Application extends Component {

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `http://${process.env.SERVER_CONFIG.database.address}:${process.env.SERVER_CONFIG.database.port}`,
            url: '/routes',
            timeout: 3000,
        })
            .then((response) => {

                this.props.dispatch(actions.setRoutes(response.data));
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