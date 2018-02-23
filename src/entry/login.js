import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Button } from 'element-react'

import 'element-theme-default'
import '../static/scss/reset'
import './login.scss'

import logo from '../static/svg/logo'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.onSubmit.bind(this)
        this.state = {
            form: {}
        }
    }
    onSubmit () {
    }
    render() {
        return (
            <div className="login-dialog">
                <div className="login-box">
                    <img src={logo} alt="" className="logo"/>
                    <Form model={this.state.form} onSubmit={this.onSubmit}>
                        <Form.Item>
                            <Input prepend="账号" value={this.state.form.name} placeholder="请输入您的账号"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Input prepend="密码" value={this.state.form.name} placeholder="请输入您的密码"></Input>
                        </Form.Item>
                    </Form>
                    <Button className="login-btn" type="primary">立即登录</Button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('login'));
