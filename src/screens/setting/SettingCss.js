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
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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
});

export default SettingCss;
