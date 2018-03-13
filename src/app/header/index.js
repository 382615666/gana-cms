import React from 'react'
import './index.scss'

export default class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <img src="" alt="" className="portrait"/>
                欢迎您，陌生人
                <a href="javascript:void(0)" className="logout">退出</a>
            </header>
        )
    }
}