import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.fn}>
                <Text> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}
MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired,
}
export default MyButton