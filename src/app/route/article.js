import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../component/loading'

const ArticleComponent = Loadable({
    loader: () => import('../article/index'),
    loading: Loading
});

export default class Article extends React.Component {
    render() {
        return <ArticleComponent {...this.props}/>;
    }
}

