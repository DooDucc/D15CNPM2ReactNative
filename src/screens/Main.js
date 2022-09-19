import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Logo, Input, Button } from '../components';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('LogIn');
    };
    const signup = () => {
        navigation.navigate('SignUp');
    };
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.welcome}>Welcome to your app</Text>
            <Text style={styles.desc}>Welcome to your app, build your own social network in minutes</Text>
            <Button title="Log in" color="#3975e8" full onPress={login} />
            <Button title="Sign up" color="#3975e8" onPress={signup} />
        </View>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        textAlign: 'center',
        color: '#3975e8',
        fontSize: 20,
        marginVertical: 20,
    },
    desc: {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
        marginBottom: 40,
    },
});
