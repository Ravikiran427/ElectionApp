import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Form extends Component<{}> {
    render() {
        return (
            <View styles={styles.container}>
                <TextInput style={styles.inputBox}
                  placeholder='Phone Number'
                  placeholderTextColor='#ffffff' 
                  keyboardType='phone-pad'
                  maxLength={10}
                />
                
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,100,100,0)'
                  placeholder='OTP to verify'
                  placeholderTextColor='#ffffff' 
                  secureTextEntry={true}
                  keyboardType='number-pad'
                  maxLength={6}
                />

                <TouchableOpacity>
                    <Text style={styles.sendOTP}>Send OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttonLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
    },

    inputBox : {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginTop: 10,
        marginHorizontal: 20
    },

    sendOTP : {
        fontSize : 16,
        fontWeight: '700',
        textAlign:"center",
        marginTop:5,
        marginHorizontal:100,
        backgroundColor:'#bcbcbc',
        borderRadius:5
    },

    buttonLogin : {
        backgroundColor: '#8CFF75',
        textAlign: "center",
        fontSize: 25,
        fontWeight: '700',
        marginHorizontal:20,
        borderRadius:10,
        marginTop: 5,
        padding:4
    }
});