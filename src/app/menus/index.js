import React from 'react'
import {Menu} from 'element-react'
import {Link} from 'react-router-dom'


export default class Menus extends React.Component {
    render () {
        return (
            <Menu defaultActive="1-1">
                <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>网站管理</span>}>
                    <Menu.Item index="1-1">
                        <Link to="/admin/index" className="">首页</Link>
                        <Link to="/navigation" className="">导航管理</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
                <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
            </Menu>
        )
    }
}