import React, { Component } from 'react'
import './main.css';
import AddCardForm from '../AddCardForm/addCardForm.js'

const Card = (props) => {
    return (
        <div className="cardlist">
            <img width="75" src={props.avatarURL} alt="" />
            <div className="card">
                <div className="name">{props.name}</div>
                <div className='companyName'>{props.company}</div>
            </div>
        </div>
    );
}

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}


class Main extends Component {
    state = {
        cards: [
            {
                key: 1,
                name: "Cesareo Fernandez",
                avatarURL: "https://avatars2.githubusercontent.com/u/11856978?v=4",
                company: "NCCI"
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
    render() {
        return (
            <div className="main">
                <AddCardForm />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default Main;