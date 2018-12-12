import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable'

const Index = Loadable({
    loader: () => import('../views/Index'),
    loading: () => (<div>...</div>)
});

const About = Loadable({
    loader: () => import('../views/About'),
    loading: () => (<div>...</div>)
});

const User = () => {
    return <div className="user-box">
        nickname: 666
    </div>
}

const routerConf = {
    base: '/666',
    routes: [{
        path: '/',
        name: 'index',
        alias: '/index',
        exact: true,
        component: Index,
        children: [{
            path: '/index/:uid',
            component: User
        }]
    }, {
        path: '/about',
        name: 'about',
        component: About
    }]
};

export default () => {
    let base = routerConf.base || '';
    let routes = routerConf.routes || [];

    return (
        <div className="route-box">
            {routes.map(item => {
                return <Route basename={base} exact={item.exact} path={item.path} key={item.name || item.path} component={item.component}></Route>
            })}
            {/* <Route exact path="/" component={Index}></Route> */}
            {/* <Route path="/about">
            <About>
                <Route path='/about/:uid' component={User}></Route>
            </About>

            </Route> */}
        </div>
    )
}
