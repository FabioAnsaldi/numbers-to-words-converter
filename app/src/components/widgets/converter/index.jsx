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

    numberToWords(e) {

        if (0 === parseInt(e) || "" === isNaN(e)) {

            return "zero";
        }

        let d = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        let h = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        let b = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"];

        function getHundreds(e) {

            return ("000" + e).substr(-3);
        }

        function getThousands(e) {

            return e.substr(0, e.length - 3);
        }

        function parseNumber(result, t, hundreds, thousands) {

            if ("000" === hundreds && 0 === thousands.length) {

                return result;
            } else {

                let n, o, l, s, c, u, partial;

                n = result;
                s = hundreds[0];
                c = hundreds[1];
                u = hundreds[2];
                o = ("0" === s ? "" : d[s] + " hundred ") +
                    (("0" !== s || thousands.length > 0) && ("0" !== u || "0" !== c) ? " and " : "" ) +
                    ("0" === u ? h[c] : h[c] && h[c] + "-" || "") +
                    (d[c + u] || d[u]);
                l = b[t];

                if (o) {

                    partial = o + (l && " " + l || "") + " " + n;
                } else {

                    partial = n;
                }
                return parseNumber(partial, ++t, getHundreds(thousands), getThousands(thousands));
            }
        }
        return parseNumber("", 0, getHundreds(String(e)), getThousands(String(e)));
    }

    convertNumberToWords(e) {

        let t = e.split(".");

        if (2 < t.length) {
            // invalid
        } else {

            if (1 === t.length) {
                e = this.numberToWords(e);
            } else {
                e = this.numberToWords(t[0]) + " point " + this.numberToWords(t[1]);
            }
            this.props.dispatch(actions.setName(e));
        }
    }

    numberChange(e) {

        let value = e && e.target && e.target.value || '';

        this.props.dispatch(actions.setValue(value));
        this.convertNumberToWords(value);
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
                                style={{marginLeft: 1}}
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
                                style={{marginLeft: 1}}
                                disabled
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
