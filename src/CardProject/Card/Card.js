import React, { Component } from 'react'
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton.js'


class Card extends Component {
    render() {
        return (
            <tr>
                <td><img width="75" src={this.props.avatarURL} alt="" /></td>
                <td>{this.props.name}</td>
                <td>{this.props.company}</td>
                <td>{this.props.location}</td>

                <td><RemoveCardButton onDelete={this.props.onDelete} cardToRemove={this.props} /></td>
            </tr>
        );
    }
}


export default Card;