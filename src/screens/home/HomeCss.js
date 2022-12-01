import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOURS } from '../../constants';

const HomeCss = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 20,
    },
    introduction: {
        marginVertical: 10,
        padding: 16,
    },
    title: {
        fontSize: 26,
        color: COLOURS.red,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 10,
        alignSelf: 'center',
    },
    ourPro: {
        alignSelf: 'center',
        marginBottom: 10,
        fontSize: 30,
    },
    desc: {
        fontSize: 16,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        lineHeight: 24,
    },
    products: {
        padding: 16,
        marginTop: -10,
    },
    productTitle: {
        fontSize: 25,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
    },
    productQuantity: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: 10,
    },
    productList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    categoryBoxes: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryBox: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.white,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: COLOURS.black,
        borderWidth: 1,
    },
    categoryBoxText: {
        color: COLOURS.black,
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize',
    },
    loadMoreBtn: {
        alignSelf: 'center',
        backgroundColor: COLOURS.black,
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    loadMoreBtnText: {
        fontSize: 25,
        color: COLOURS.white,
    },
    filterPrice: {
        width: '60%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    priceBtn: {
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 20,
        padding: 5,
    },
    priceBtnText: {
        fontSize: 15,
        fontWeight: '600',
    },
});

export default HomeCss;
