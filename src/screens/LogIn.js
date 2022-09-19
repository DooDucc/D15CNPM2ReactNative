import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input, Button } from '../components';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FontAwesome5 name="arrow-left" size={24} style={styles.backBtn} onPress={() => navigation.goBack()} />
            <Text style={styles.text}>Sign In</Text>
            <View style={styles.form}>
                <Input type="text" placeholder="Email or phone number" />
                <Input type="password" placeholder="Pass word" />
                <View style={styles.btnGroup}>
                    <Button title="Log in" color="#3975e8" full />
                    <Text style={{ marginBottom: 20, fontSize: 30, color: '#999' }}>OR</Text>
                    <Button title="Facebook Login" color="#3b5998" full />
                </View>
            </View>
        </View>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        color: '#3975e8',
        fontSize: 30,
        marginLeft: 30,
    },
    form: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 30,
    },

    btnGroup: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
});
