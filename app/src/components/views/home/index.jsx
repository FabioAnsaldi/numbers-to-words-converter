'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from "@material-ui/core/Grid";
import converterState from '../../widgets/converter/reducer';
import store from '../../../combiner/store';

const Converter = lazy(() => import('../../widgets/converter/index.jsx'));
store.attachReducers({converterState});

export class Home extends Component {

    render() {

        return (
            <Grid item xs={12}>
                <h1>Welcome to Numbers to Words Converter</h1>
                <p>The fomr takes a <b>integer</b> number and returns the <b>name</b> of the number in English as a
                    lowercase string</p>
                <p><b>Enjoy it!</b></p>
                <Suspense fallback={<div>Loading ...</div>}>
                    <Converter/>
                </Suspense>
                <p>To gain information about the target of the exercise, got to <b>About</b> page
                    using <b>Menu</b> widget</p>
            </Grid>
        );
    }
}

function mapStateToProps(state) {

    return {

        homeState: state.homeState
    };
}

export default withRouter(connect(mapStateToProps)(Home));
