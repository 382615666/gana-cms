import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import 'element-theme-default'
import '../static/scss/reset'
import './index.scss'
import '../static/scss/common.scss'
import logo from '../static/svg/logo'

import Menus from '../app/menus/index'
import Header from '../app/header/index'
import Navigation from '../app/route/navigation'

class Index extends React.Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
    }
    render() {
        return (
            <Router>
                <div className="main-content">
                    <div className="menu-box">
                        <img src={logo} alt="" className="logo" style={{height:"150px"}}/>
                        <Menus></Menus>
                    </div>
                    <div className="content-box">
                        <Header></Header>
                        <section className="content-wrap">
                            <Route exact path="/navigation" component={Navigation}/>
                        </section>
                    </div>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('app'));
