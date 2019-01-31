import React, { Component } from 'react'
import Card from '../Card/Card.js'
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton.js'

class CardList extends Component {

    render() {
        return (
            <table>
                <tbody>
                    {this.props.cards.map(card =>
                        <tr>
                            <td><Card {...card} /></td>
                            <td><RemoveCardButton onDelete={this.props.onDelete} cardToRemove={card} /></td>
                        </tr>)}
                </tbody>
            </table>
        );
    }
}

export default CardList;