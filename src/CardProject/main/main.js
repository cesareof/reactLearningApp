import React, { Component } from 'react'
import './main.css';
import AddCardForm from '../AddCardForm/addCardForm.js'
import CardList from '../CardList/CardList.js'

class Main extends Component {
    state = {
        cards: [
            {
                key: 1,
                name: "Jordan Walker",
                avatarURL: "https://avatars3.githubusercontent.com/u/977348?v=4",
                company: "Facebook, ReactJS"
            },
            {
                key: 2,
                name: "Paul O'Shannessy",
                avatarURL: "https://avatars.githubusercontent.com/u/8445?v=3",
                company: "Facebook"
            },
            {
                key: 3,
                name: "Ben Alpert",
                avatarURL: "https://avatars.githubusercontent.com/u/6821?v=3",
                company: "Facebook"
            }
        ]
    };

    addNewCard = (cardInfo) => {
        const newCard = {
            key: this.state.cards.reduce((prev, curr) => (prev.key > curr.key) ? prev.key : curr.key, 1) + 1,
            name: `${cardInfo.name ? cardInfo.name : cardInfo.login}`,
            avatarURL: `${cardInfo.avatar_url} `,
            company: `${cardInfo.company ? cardInfo.company : ' '}`
        }
        if (this.state.cards.filter(card => (card.avatarURL === newCard.avatarURL)).length <= 0) {
            this.setState(prevState => (
                prevState.cards.push(newCard)
            ));
        }
        else {
            const dupalert = `Already added user ${newCard.name}`;
            alert(dupalert);
        }
    }

    deleteCard = (deleteCard) => {
        const keyToDelete = this.state.cards.map(card => card.key).indexOf(deleteCard.key);
        if (keyToDelete >= 0) {
            this.setState(prevState => prevState.cards.splice(keyToDelete, 1));
        }
        else {
            const notFoundAlert = `Cannot find ${deleteCard ? deleteCard.name : ''} in List`;
            alert(notFoundAlert);
        }
    }

    render() {
        return (
            <div className="main">
                <AddCardForm onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} onDelete={this.deleteCard} />
            </div>
        );
    }
}

export default Main;