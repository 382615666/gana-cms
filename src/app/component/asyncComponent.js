import React, {Component} from 'react'

export default class AsyncComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            component: null
        }
    }
    componentDidMount () {
        const {default: component} = import()
        this.setState({component})
    }
    render () {
        return this.state.component
    }
}