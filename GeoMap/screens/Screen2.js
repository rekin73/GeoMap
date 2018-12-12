import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MyButton from '../components/MyButton';
import { Location, Permissions } from 'expo';
import { AsyncStorage } from "react-native";
import LocList from "../components/LocList";


export default class componentName extends Component {
    static navigationOptions = {

        title: "Admin Page",
        headerStyle: {
            backgroundColor: "lime",

        }

    }
    constructor(props) {
        super(props);
        this.setPermissions()
        this.state = {
        };
    }
    setData = async (pos) => {

    }
    deleteData = async () => {
        await AsyncStorage.clear();

    }
    getAllData = async () => {
        let keys = await AsyncStorage.getAllKeys();
        console.log("keys", keys)
        let stores = await AsyncStorage.multiGet(keys);
        console.log("stores", stores)
        let maps = stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];
            console.log(key, value)
        });
    }
    setPermissions = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
        }
    }
    getPosition = async () => {
        let pos = await Location.getCurrentPositionAsync({})
        alert(JSON.stringify(pos, null, 4))
        await AsyncStorage.setItem(pos.timestamp.toString(), JSON.stringify(pos));
    }
    render() {
        //let data = this.props.navigation.state.params.data;
        return (
            <View style={styles.view}>
                <View><MyButton text="Pobierz i zapisz pozycję" style={styles.myButton} fn={this.getPosition} /><MyButton text="Usuń wszystkie dane" style={styles.myButton} fn={this.deleteData} /></View>
                <MyButton text="Przejdź do mapy" style={styles.myButton} fn={this.getAllData} />
                <LocList data={this.getAllData()} />
            </View>
        );
    }
}
const styles = {
    view: {
        flex: 1
    }

}