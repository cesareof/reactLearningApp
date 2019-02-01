import React, { Component } from 'react';
import Axios from 'axios';

class AddCardForm extends Component {
    state = { userName: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://api.github.com/users/${this.state.userName}`;
        Axios.get(url)
            .then(resp => {
                if (resp.data) {
                    this.props.onSubmit(resp.data);
                    this.setState({ userName: '' });
                }
            })
            .catch(error => {
                alert(error.response.status === 404 ? `${this.state.userName} Not A Valid GitHub Username` : `${error.response.statusText}`);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Git Username" required />
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

export default AddCardForm;