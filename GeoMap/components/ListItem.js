import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MyButton from './MyButton';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickEdit = this.handleClickEdit.bind(this)
        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.state = {
            Login: this.props.a.item.login,
            Password: this.props.a.item.password
        };
    }
    handleClickEdit() {
        this.props._handleEdit({ login: this.state.Login, password: this.state.Password })
    }
    handleClickDelete() {


        // Default options are marked with *
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: this.state.Login, password: this.state.Password })
        }).then(response => response.json()) // parses response to JSON
            .then(res => {
                switch (res.action) {
                    case 'ok':
                        console.log("next")
                        this.props._handleDelete(res.data)
                        break;
                    case 'notok':
                        alert('Unknown Error Check Connection')
                        break;
                    default:
                        break;
                }
            })
    }
    render() {
        console.log(this.props)
        return (
            <View style={Settings.styles.ListItem}>
                <Image source={require('./user.png')} /><Text style={{ flex: 2 }}>{this.props.a.item.key}:{this.props.a.item.login} {this.props.a.item.password}</Text><MyButton text="Edytuj" style={{ flex: 1 }} fn={this.handleClickEdit} /><MyButton text="Usuń" style={{ flex: 1 }} fn={this.handleClickDelete} />
            </View>
        );
    }
}
