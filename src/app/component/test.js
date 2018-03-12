import React from 'react'

export default class Test extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }
    test = () => {
        debugger
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <p onClick={this.test}>aaaa</p>
            </div>
        )
    }
}
