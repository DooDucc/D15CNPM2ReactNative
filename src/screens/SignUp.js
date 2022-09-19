import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '../components';

const SignUp = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <FontAwesome5 name="arrow-left" size={24} style={styles.backBtn} onPress={back} />
            <Text style={styles.text}>Create new account</Text>
            <View style={styles.form}>
                <Input type="text" placeholder="Full name" />
                <Input type="numeric" placeholder="Phone number" />
                <Input type="text" placeholder="Email address" />
                <Input type="password" placeholder="Pass word" />
                <View style={styles.btnGroup}>
                    <Button title="Sign up" color="#3b5998" full />
                </View>
            </View>
        </View>
    );
};

export default SignUp;

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
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
    form: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    btnGroup: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
});
