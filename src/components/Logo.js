import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>C</Text>
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 100,
        color: '#3875e8',
        fontWeight: 'bold',
    },
});
