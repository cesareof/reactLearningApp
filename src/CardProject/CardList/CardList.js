import React, { Component } from 'react'
import Card from '../Card/Card.js'


class CardList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr><th>Avatar</th><th>Name</th><th>Company</th><th>Location</th><th></th></tr>
                </thead>
                <tbody>{this.props.cards.map(card => <Card {...card} onDelete={this.props.onDelete} />)}</tbody>
            </table>
        );
    }
}


export default CardList;