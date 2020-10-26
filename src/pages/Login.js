import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Form from '../components/Form.js'

export default class Login extends Component<{}> {
    render() {
        return (
            <View styles={styles.container}>
                <StatusBar
                    backgroundColor='#000000'
                    barStyle='light-content'
                />
                <Form/>
                <View style={styles.signUp}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    <TouchableOpacity><Text style={styles.signUpButton}>Sign up here</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    signUp: {
        flexGrow:1,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"center",
        marginTop:10,
    },

    signUpText: {
        fontSize: 18,
    },

    signUpButton: {
        fontWeight:'700',
        fontSize: 18
    }
});