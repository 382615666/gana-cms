import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
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
                account: 'admin',
                password: '123456'
            },
            selectName: '',
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
    onSelect = (name) => {
        this.setState({
            selectName: name
        })
    }
    onChange = (value) => {
        this.setState({
            form: Object.assign({}, this.state.form, {[this.state.selectName]: value})
        })
    }
    login = (e) => {
        this.refs.login.validate(async valid => {
            if (valid) {
                let res = await axios.get(`/login/${this.state.form.account}/${this.state.form.password}`)
                if (!res.data.err) {
                    window.location.href="/admin/index"
                }
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
                            <Input prepend="账号" value={this.state.form.account} placeholder="请输入您的账号" onSelect={() => this.onSelect('account')} onChange={this.onChange}></Input>
                        </Form.Item>
                        <Form.Item prop="password">
                            <Input prepend="密码" value={this.state.form.password} type="password" placeholder="请输入您的密码" onSelect={() => this.onSelect('password')} onChange={this.onChange}></Input>
                        </Form.Item>
                    </Form>
                    <Button className="login-btn" type="primary" onClick={this.login}>立即登录</Button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('login'));
