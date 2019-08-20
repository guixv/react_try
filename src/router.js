import React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import Detail from './detail';

const BasicRoute =()=>(

    <HashRouter>
        <Switch>
           <Route exact path="/" component={App}/>
           <Route exact path="/detail" component={Detail}/>
            <Redirect to="/" />
        </Switch>
    </HashRouter>
);

export default BasicRoute;
