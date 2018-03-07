import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Form, Input, Button, Menu } from 'element-react'

import 'element-theme-default'
import '../static/scss/reset'
import './index.scss'
import logo from '../static/svg/logo'

import asyncComponent from '../app/component/test1'

debugger
const AsyncHome = asyncComponent(() => System.import("../app/component/test"));


const routes = [
    { path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    { path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    { path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
]



class Index extends React.Component {
    constructor (props) {
        super(props)
    }
    async render() {
        return (
            <BrowserRouter>
                <div className="main-content">
                    <div className="menu-box">
                        <img src={logo} alt="" className="logo" style={{height:"150px"}}/>
                        <Menu defaultActive="2" className="el-menu-vertical-demo">
                            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                                <Menu.Item index="1-1">
                                    <Link to="/">选项2</Link>
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
                            <Route exact path="/" component={AsyncHome}/>
                        </section>
                    </div>
                </div>

            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('app'));
