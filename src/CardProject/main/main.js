import React, { Component } from 'react'
import './main.css';
import AddCardForm from '../AddCardForm/addCardForm.js'
import CardList from '../CardList/CardList.js'
import StyleSelector from '../StyleSelector/StyleSelector.js'

class Main extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: "Jordan Walker",
                avatarURL: "https://avatars3.githubusercontent.com/u/977348?v=4",
                company: "Facebook, ReactJS",
                location: "Palo Atlo, California USA"
            },
            {
                id: 2,
                name: "Paul O'Shannessy",
                avatarURL: "https://avatars.githubusercontent.com/u/8445?v=3",
                company: "Facebook",
                location: "Palo Atlo, California USA"
            },
            {
                id: 3,
                name: "Ben Alpert",
                avatarURL: "https://avatars.githubusercontent.com/u/6821?v=3",
                company: "Facebook",
                location: "Palo Atlo, California USA"
            }
        ],
        removeButtonOptions: {
            bgcolor: 'red'
        },
        addButtonOptions: {
            bgcolor: 'green'
        }
    };

    addNewCard = (cardInfo) => {
        const newCard = {
            id: this.state.cards.reduce((prev, curr) => (prev.id > curr.id) ? prev.id : curr.id, 1) + 1,
            name: `${cardInfo.name ? cardInfo.name : cardInfo.login}`,
            avatarURL: `${cardInfo.avatar_url} `,
            company: `${cardInfo.company ? cardInfo.company : ' '}`,
            location: `${cardInfo.location ? cardInfo.location : 'Unknown'}`
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
        const idToDelete = this.state.cards.map(card => card.id).indexOf(deleteCard.id);
        if (idToDelete >= 0) {
            this.setState(prevState => prevState.cards.splice(idToDelete, 1));
        }
        else {
            const notFoundAlert = `Cannot find ${deleteCard ? deleteCard.name : ''} in List`;
            alert(notFoundAlert);
        }
    }

    updateAddButton = (newOptions) => {
        this.setState(prevState => prevState.addButtonOptions.bgcolor = newOptions);
    }

    updateRemoveButton = (newOptions) => {
        this.setState(prevState => prevState.removeButtonOptions.bgcolor = newOptions);
    }

    render() {
        return (
            <div className="main">
                {console.log("State: ", this.state.removeButtonOptions)}
                <AddCardForm onSubmit={this.addNewCard} styleOptions={this.state.addButtonOptions} />
                <CardList cards={this.state.cards} onDelete={this.deleteCard} styleOptions={this.state.removeButtonOptions} />

                <table>
                    <tbody>
                        <tr><td>Add Card Button: <StyleSelector options={this.state.addButtonOptions} onChangeColor={this.updateAddButton} /></td></tr>
                        <tr><td>Remove Card Buttons: <StyleSelector options={this.state.removeButtonOptions} onChangeColor={this.updateRemoveButton} /></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Main;