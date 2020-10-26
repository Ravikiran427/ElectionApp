import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class Login extends Component<{}> {
    render() {
        return (
            <View styles={styles.container}>
                <StatusBar
                    backgroundColor='#1c313a'
                    barStyle='light-content'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});