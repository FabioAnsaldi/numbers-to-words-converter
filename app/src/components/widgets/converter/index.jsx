'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import * as actions from "../converter/actions";

export class Converter extends Component {

    constructor(props) {

        super(props);
        this.numberChange = this.numberChange.bind(this);
    }

    numberChange(e) {

        let value = e && e.target && e.target.value || '';

        this.props.dispatch(actions.setValue(value));
    };

    render() {

        return (

            <form noValidate autoComplete="off">
                <Grid container spacing={16}>
                    <Grid item lg={6} xs={12}>
                        <Paper elevation={1}>
                            <TextField
                                id="integer-number"
                                label="Number"
                                type="number"
                                value={this.props.converterState.value}
                                onChange={this.numberChange}
                                margin="normal"
                                fullWidth
                                style={{ marginLeft: 1 }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Paper elevation={1}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                value={this.props.converterState.name}
                                margin="normal"
                                fullWidth
                                style={{ marginLeft: 1 }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

function mapStateToProps(state) {

    return {

        converterState: state.converterState
    };
}

export default withRouter(connect(mapStateToProps)(Converter));
