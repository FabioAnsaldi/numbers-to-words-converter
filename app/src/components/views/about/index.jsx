'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';

export class About extends Component {

    render() {

        return (
            <Grid item xs={12}>
                <h1>Exercise track</h1>
                <p>Create a function which takes a number and returns the name of the number in English as a lowercase string.</p>
                <p>The function should support as well as positive and negative numbers</p>
                <hr/>
                <h4>How it works</h4>
                <p>You have to insert an <b>Integer Number</b> into input field and you will see the relative <b>String Name</b> of the number.</p>
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
