import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../component/loading'

const TestComponent = Loadable({
    loader: () => import('../component/test'),
    loading: Loading
});

export default class Test extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return <TestComponent {...this.props}/>;
    }
}

