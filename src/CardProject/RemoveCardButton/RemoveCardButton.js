import React, { Component } from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
    background-color: ${props => props.bgcolor ? props.bgcolor : "red"};;
    color: white;
    padding: 5px 5px;
    border: 1px solid black;
    border-radius: 10px;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    `;

class RemoveCardButton extends Component {
    render() {
        const styleOptions = this.props.styleOptions;
        console.log(styleOptions)
        return (
            <RemoveButton {...styleOptions} title='Delete this user from list' onClick={() => this.props.onDelete(this.props.cardToRemove)}>X</RemoveButton>
        );
    }
}

export default RemoveCardButton;