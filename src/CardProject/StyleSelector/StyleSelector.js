import React, { Component } from 'react';

class StyleSelector extends Component {
    render() {
        const color = this.props.options.bgcolor;
        return (
            <select value={color} onChange={(event) => { this.props.onChangeColor(event.target.value) }} >
                <option value="blue" >Blue</option>
                <option value="black" >Black</option>
                <option value="green">Green</option>
                <option value="red" >Red</option>
                <option value="purple" >Purple</option>
            </select>
        );
    }
}
export default StyleSelector;