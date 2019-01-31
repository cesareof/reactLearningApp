import React, { Component } from 'react'

class RemoveCardButton extends Component {
    handleClick = (card) => {
        this.props.onDelete(card);
    };

    render() {
        return (
            <button title='Delete this user from list' onClick={() => { this.handleClick(this.props.cardToRemove) }}>X</button>
        );
    }
}

export default RemoveCardButton;