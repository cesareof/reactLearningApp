import React, { Component } from 'react'

class RemoveCardButton extends Component {
    render() {
        return (
            <button title='Delete this user from list' onClick={() => this.props.onDelete(this.props.cardToRemove)}>X</button>
        );
    }
}

export default RemoveCardButton;