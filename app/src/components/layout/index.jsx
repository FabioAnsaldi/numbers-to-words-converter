'use strict';

import React, {Component, lazy, Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as reducers from '../views/**/reducer.js';
import topbarState from '../widgets/topbar/reducer';
import store from '../../combiner/store';

const Topbar = lazy(() => import('../widgets/topbar/index.jsx'));
store.attachReducers({topbarState});

export class Layout extends Component {

    render() {

        const defaultView = this.props.applicationState.routes.reduce((accumulator, current, i) => {

            return current.default ? (<Redirect to={`${current.path}`}/>) : accumulator;
        }, null);

        const viewsList = (
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    {this.props.applicationState.routes.map((obj, i) => {

                        let View = lazy(() => import(`../views/${obj.viewFolderName}/index.jsx`));

                        return <Route key={i} exact path={obj.path} component={props => <View {...props} />}/>
                    })}
                    {defaultView}
                </Switch>
            </Suspense>
        );

        return (
            <div>
                <header>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Topbar/>
                    </Suspense>
                </header>
                <main>
                    {viewsList}
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