import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '../components';
import { Context } from '../context/AuthContext';

const SignUp = () => {
    const navigation = useNavigation();
    const context = React.useContext(Context);

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogIn = async () => {
        await context.login(email, password);
        if (
            name !== '' &&
            phone !== '' &&
            context?.userInfo.email !== undefined &&
            context?.userInfo.password !== undefined
        ) {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <FontAwesome5 name="arrow-left" size={24} style={styles.backBtn} onPress={() => navigation.goBack()} />
            <Text style={styles.text}>Create new account</Text>
            <View style={styles.form}>
                <Input type="text" placeholder="Full name" value={name} onChange={setName} />
                <Input type="numeric" placeholder="Phone number" value={phone} onChange={setPhone} />
                <Input type="text" placeholder="Email address" value={email} onChange={setEmail} />
                <Input type="password" placeholder="Pass word" value={password} onChange={setPassword} />
                <View style={styles.btnGroup}>
                    <Button title="Sign up" color="#3b5998" full onPress={handleLogIn} />
                    <Button
                        title="Forgot Password"
                        color="#3b5998"
                        full
                        onPress={() => navigation.navigate('FGPassWord')}
                    />
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
