import { StyleSheet } from 'react-native';
import { COLOURS } from '../../constants';

const ProCardCss = StyleSheet.create({
    cardContainer: {
        width: '48%',
    },
    proCard: {
        width: '100%',
        marginVertical: 14,
        alignItems: 'center',
    },
    container: {
        position: 'relative',
        width: '100%',
        height: 170,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    sale: {
        position: 'absolute',
        width: '24%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saleText: {
        fontSize: 16,
        color: COLOURS.white,
        fontWeight: 'bold',
    },
    productImg: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    productName: {
        textAlign: 'center',
        fontSize: 16,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2,
        textTransform: 'capitalize',
    },
    productPrice: {
        fontSize: 16,
    },
    available: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleIcon: {
        fontSize: 16,
        marginRight: 6,
        color: COLOURS.green,
    },
    availableText: {
        fontSize: 16,
        color: COLOURS.green,
    },
});

export default ProCardCss;
