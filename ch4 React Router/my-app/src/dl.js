import React, { Component } from 'react';

export default class Dl extends Component {
    state = { isOpen: false }
    render() {
        let { dlData, name, openName, changeOpen } = this.props
        // let { isOpen } = this.state
        return (
            <dl className={`friend-group ${name === openName && 'expanded'}`}>
                <dt
                    onClick={() => changeOpen(openName === name ? "" : name)}
                >
                    {dlData.title}
                </dt>
                {
                    dlData.list.map((item, index) => <dd key={index}>{item.name}</dd>)
                }
            </dl>)
    }
}