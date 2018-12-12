import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

//import Settings from './Settings';




export default class Main extends Component {
    static navigationOptions = {
        header: null,
        title: "Login",

    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            Login: "",
            Password: ""
        };
    }

    handleClick() {
        this.props.navigation.navigate("Screen")

    }
    render() {

        return (
            <KeyboardAvoidingView enabled style={styles.bodyView}>
                <View style={styles.titleView}><Text style={styles.textStyle}>GeoMap App</Text></View>
                <View style={styles.loginPanel}>

                    <MyButton text="Start" style={styles.myButton} fn={this.handleClick} />

                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = {
    bodyView: {
        flex: 1,
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lime",
    },
    loginPanel: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: "white",
        fontSize: 40,

    },
    textInput: {
        color: "green",
        height: 60
    },
    myButton: {
        //justifySelf: 'center',

    }
}