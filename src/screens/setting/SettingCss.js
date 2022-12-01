import { StyleSheet } from 'react-native';
import { COLOURS } from '../../constants';

const SettingCss = StyleSheet.create({
    setting: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
    },
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    backIcon: {
        fontSize: 22,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    seacrh: {
        position: 'relative',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        borderColor: COLOURS.black,
        borderWidth: 1,
        borderRadius: 20,
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        paddingLeft: 40,
    },
    seacrhIcon: {
        position: 'absolute',
        top: 10,
        left: 15,
        fontSize: 18,
        color: '#999',
    },
    options: {
        alignSelf: 'center',
        marginTop: 30,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        borderBottomColor: COLOURS.black,
        borderBottomWidth: 1,
    },
    left: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        fontSize: 25,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 20,
    },
    logoutBtn: {
        alignSelf: 'center',
        backgroundColor: COLOURS.black,
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
        paddingHorizontal: 20,
    },
    logoutBtnText: {
        fontSize: 25,
        color: COLOURS.white,
    },
});

export default SettingCss;
