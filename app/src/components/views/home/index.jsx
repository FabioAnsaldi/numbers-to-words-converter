'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from "@material-ui/core/Grid";

export class Home extends Component {

    render() {

        return (
            <Grid item xs={12}>
                <h1>Welcome to Numbers to Words Converter</h1>
                <p><b>Enjoy it!</b></p>
                <p>To gain information about the target of the exercise, got to <b>About</b> page using <b>Menu</b> widget</p>
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
