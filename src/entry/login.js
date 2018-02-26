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
        this.state = {
            form: {
            },
            rules: {
                account: [{
                    required: true,
                    message: '请输入您的账号',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入您的密码',
                    trigger: 'blur'
                }]
            }
        }
    }
    onChange () {
        debugger
    }
    login (e) {
        debugger
        this.refs.login.validate(valid => {
            if (valid) {
                axios
                    .get(`/login/${this.state.form.accout}/${this.state.form.password}`)
                    .then(res => {

                    })
            }
        })
    }
    render() {
        return (
            <div className="login-dialog">
                <div className="login-box">
                    <img src={logo} alt="" className="logo"/>
                    <Form ref="login" model={this.state.form} rules={this.state.rules}>
                        <Form.Item prop="account">
                            <Input prepend="账号" value={this.state.form.account} placeholder="请输入您的账号" onChange={this.onChange}></Input>
                        </Form.Item>
                        <Form.Item prop="password">
                            <Input prepend="密码" value={this.state.form.password} placeholder="请输入您的密码"></Input>
                        </Form.Item>
                    </Form>
                    <Button className="login-btn" type="primary" onClick={this.login}>立即登录</Button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('login'));
