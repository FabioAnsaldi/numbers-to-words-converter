'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';

export class About extends Component {

    render() {

        return (
            <Grid item xs={12}>
                <h1>About page</h1>
            </Grid>
        );
    }
}

function mapStateToProps(state) {

    return {

        aboutState: state.aboutState
    };
}

export default withRouter(connect(mapStateToProps)(About));
