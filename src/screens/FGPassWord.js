import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '../components';

const FGPassWord = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FontAwesome5 name="arrow-left" size={24} style={styles.backBtn} onPress={() => navigation.goBack()} />
            <Text style={styles.text}>Create new password</Text>
            <View style={styles.form}>
                <Input type="password" placeholder="New password" />
                <Input type="password" placeholder="Confirm password" />
                <Input type="text" placeholder="Email address" />
                <View style={styles.btnGroup}>
                    <Button title="Login" color="#3b5998" full />
                </View>
            </View>
        </View>
    );
};

export default FGPassWord;

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
