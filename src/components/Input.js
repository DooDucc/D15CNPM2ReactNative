import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = ({ placeholder, type }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} type={type} placeholder={placeholder} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#999',
        color: '#999',
        borderRadius: 40,
        padding: 10,
        fontSize: 20,
    },
});
