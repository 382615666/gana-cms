import React from 'react'
import Loadable from 'react-loadable';

function MyLoadingComponent() {
    return <div>Loading...</div>;
}

const LoadableAnotherComponent = Loadable({
    loader: () => import('../component/test'),
    loading: MyLoadingComponent
});

export default class Test extends React.Component {
    render() {
        return <LoadableAnotherComponent/>;
    }
}

