import React, {Component} from "react";
import {Stylesheet, Text, View} from "react-native";
import firebase from "firebase";

export default class Logout extends Component{
    componentDidMount() {
        firebase.auth().signOut();
        this.props.navigation.replace("Login");
    }
    render() {
        return (
            <View stylr={Stylesheet.container}>
                <Text>Logout</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

