import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class Users extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            data: this.props.data
        };

    }
    handleDelete(id) {
        this.setState({
            data: id
        })

    }
    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <ListItem a={{ item }} _handleDelete={this.handleDelete} _handleEdit={this.props._handleEdit} />}
            />
        );
    }
}
Users.propTypes = {
    data: PropTypes.array.isRequired,

}
export default Users;