'use strict';

import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class Layout extends Component {

    render() {

        return (
            <div>
                <header>
                    <h1>Numbers to Words Converter</h1>
                </header>
                <main>
                    <p>Content ...</p>
                </main>
                <footer>
                    <p>Powered by React + Redux</p>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        layoutState: state.layoutState,
        applicationState: state.applicationState,
    };
}

export default withRouter(connect(mapStateToProps)(Layout));