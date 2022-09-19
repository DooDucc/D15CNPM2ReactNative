import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, color, full, onPress }) => {
    return (
        <>
            {full ? (
                <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
                    <Text style={{ color: '#fff' }}>{title}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={[styles.container, { backgroundColor: '#fff', borderWidth: 1, borderColor: color }]}
                    onPress={onPress}
                >
                    <Text style={{ color: color }}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        width: '70%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20,
    },
});
