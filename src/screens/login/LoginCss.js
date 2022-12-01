import { StyleSheet } from 'react-native';
import { COLOURS } from '../../constants';

const LoginCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.black,
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLOURS.white,
        fontSize: 40,
        textAlign: 'center',
    },
    logo: {
        color: '#d65108',
        fontSize: 45,
        fontWeight: 'bold',
    },
    bottom: {
        position: 'relative',
        flex: 2,
        backgroundColor: COLOURS.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'flex-start',
        padding: 20,
    },
    back: {
        position: 'absolute',
        top: 25,
        left: 25,
        borderRadius: 20,
        padding: 8,
        backgroundColor: COLOURS.backgroundLight,
        zIndex: 100,
    },
    backIcon: {
        fontSize: 30,
    },
    form: {
        padding: 20,
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: 36,
        color: COLOURS.black,
        fontWeight: 'bold',
    },
    formBlock: {
        marginBottom: 30,
    },
    formLabel: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: 'bold',
    },
    formInput: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: COLOURS.backgroundDark,
    },
    formForgotBtn: {
        marginTop: -20,
    },
    formForgot: {
        color: COLOURS.red,
        fontWeight: 'bold',
    },
    formBtnGr: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formBtn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.backgroundLight,
        marginBottom: 10,
        borderRadius: 20,
        padding: 10,
    },
    formBtnText: {
        fontSize: 24,
        color: COLOURS.black,
    },
    err: {
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
    },
});

export default LoginCss;
