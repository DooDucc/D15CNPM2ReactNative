import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOURS } from '../../constants';

const HomeCss = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },
    settingBtn: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        right: 80,
        width: 50,
        height: 50,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.black,
        zIndex: 100,
    },
    cartBtn: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        right: 20,
        width: 50,
        height: 50,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.black,
        zIndex: 100,
    },
    cartIcon: {
        fontSize: 22,
        color: COLOURS.black,
    },
    introduction: {
        marginVertical: 10,
        padding: 16,
    },
    title: {
        fontSize: 26,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 10,
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
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: COLOURS.black,
        borderWidth: 1,
    },
    categoryBoxText: {
        color: COLOURS.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default HomeCss;
