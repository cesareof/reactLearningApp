import React, { Component } from 'react';
import Axios from 'axios';

class AddCardForm extends Component {
    state = { username: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event: Form Submit', this.state.username);
        Axios.get(`https://api.github.com/users/${this.state.username}`);

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ username: event.target.value })}
                    placeholder="Git Username" required />
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

export default AddCardForm;