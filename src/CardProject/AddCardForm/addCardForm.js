import React, { Component } from 'react';
import Axios from 'axios';

class AddCardForm extends Component {
    state = { username: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://api.github.com/users/${this.state.username}`
        console.log('Event: Form Submit to: ', url);
        Axios.get(url)
            .then(resp => { this.props.onSubmit(resp.data) });
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