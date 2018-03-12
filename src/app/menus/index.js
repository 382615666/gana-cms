import React from 'react'
import {Menu} from 'element-react'
import {Link} from 'react-router-dom'


export default class Menus extends React.Component {
    componentDidMount () {
    }
    render () {
        return (
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
        )
    }
}