import React, { Component } from 'react';
import context, { Consumer } from './context'

export default class Child extends Component {
    render() {
        return (
            <>
                {/* recieve the param via Consumer */}
                <Consumer>
                    {(val) => <p>This is from Consumer:{val.info}</p>}
                </Consumer>
                {/*  recieve the param via contextType */}
                <p>This is from static context: {this.context.info}</p>
            </>
        )
    }
}

Child.contextType = context