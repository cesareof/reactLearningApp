import React, { Component } from 'react'

class Button extends Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {

        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    const counterToText = `The value of the button is now ${props.counter}`;
    return (<div>{counterToText}</div>);
};

class App extends Component {
    //This is a class level object state that has the property counter
    state = { counter: 0 };
    //OR
    //This is a constructor to instantiate the state counter. You can do either one. I like the class level object better
    /*constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }*/

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({ counter: prevState.counter + incrementValue }));
    }

    render() {
        return (
            <div>
                <Button onClickFunction={this.incrementCounter} incrementValue={1} />
                <Button onClickFunction={this.incrementCounter} incrementValue={5} />
                <Button onClickFunction={this.incrementCounter} incrementValue={10} />
                <Button onClickFunction={this.incrementCounter} incrementValue={100} />

                <Result counter={this.state.counter} />
            </div>
        );
    }
}

export default App;