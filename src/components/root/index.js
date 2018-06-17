import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import Content from '../layout/styled-components/content'
import Home from '../views/home/home'

const Root = ({store}) => {
    baseStyles();
    return (<Provider store={store}>
        <Router>
            <div>
                <Content>
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Content>
            </div>
        </Router>
    </Provider>)
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root