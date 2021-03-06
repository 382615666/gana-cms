import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../component/loading'

const NavigationComponent = Loadable({
    loader: () => import('../navigation/index'),
    loading: Loading
});

export default class Navigation extends React.Component {
    render() {
        return <NavigationComponent {...this.props}/>;
    }
}

