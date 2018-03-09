import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Form, Input, Button, Menu } from 'element-react'

import 'element-theme-default'
import '../static/scss/reset'
import './index.scss'
import logo from '../static/svg/logo'


import getC from '../app/component/test1'

class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            Test: null
        }
    }
    componentWillMount () {
        const a = getC()
        debugger
        this.setState({
            Test: a
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div className="main-content">
                    <div className="menu-box">
                        <img src={logo} alt="" className="logo" style={{height:"150px"}}/>
                        <Menu defaultActive="2" className="el-menu-vertical-demo">
                            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                                <Menu.Item index="1-1">
                                    <Link to="/abc">选项2</Link>
                                </Menu.Item>
                                <Menu.Item index="1-2">选项2</Menu.Item>
                                <Menu.Item index="1-3">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
                            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
                        </Menu>
                    </div>
                    <div className="content-box">
                        <header className="header-info">
                            aaaaaaa
                        </header>
                        <section className="content-wrap">
                            <Route exact path="/abc" component={this.state.Test}/>
                        </section>
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('app'));
