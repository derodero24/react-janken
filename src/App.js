import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { rootPath } from './config'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Hand from './components/Hand'
import * as imgs from './imgs'

const Rock = () => (<Hand src={imgs.rock} alt='rock'/>);
const Scissor = () => (<Hand src={imgs.scissor} alt='scissor'/>);
const Paper = () => (<Hand src={imgs.paper} alt='paper'/>);

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={rootPath}
                    component={Home}/>
                <Route exact path={rootPath + '/rock'}
                    component={Rock}/>
                <Route exact path={rootPath + '/scissor'}
                    component={Scissor}/>
                <Route exact path={rootPath + '/paper'}
                    component={Paper}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}
