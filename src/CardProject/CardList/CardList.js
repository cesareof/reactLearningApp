import React, { Component } from 'react'
import Card from '../Card/Card.js'
import styled from 'styled-components';


const UserTable = styled.table`
    @borderColor = ${props => props.bordercolor}; 
    ${props => props.showborder ? "border: 1px solid @borderColor" : ""}
    padding: 10px 10px;
`;

class CardList extends Component {
    render() {
        return (
            <UserTable showborder bordercolor="red">
                <thead>
                    <tr><th>Avatar</th><th>Name</th><th>Company</th><th>Location</th><th></th></tr>
                </thead>
                <tbody>{this.props.cards.map(card => <Card {...card} styleOptions={this.props.styleOptions} onDelete={this.props.onDelete} />)}</tbody>
            </UserTable>
        );
    }
}

export default CardList;