import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartCss from '../screens/cart/CartCss';

const Price = ({ total }) => {
    return (
        <View style={CartCss.orderInfo}>
            <Text style={CartCss.deliveryText}>Order Info</Text>
            <View style={CartCss.orderRow}>
                <Text style={CartCss.subTotal}>Subtotal</Text>
                <Text style={CartCss.subTotal}>${total}</Text>
            </View>
            <View style={[CartCss.orderRow, { marginBottom: 22 }]}>
                <Text style={CartCss.subTotal}>Shipping Tax</Text>
                <Text style={CartCss.subTotal}>${total / 20}</Text>
            </View>
            <View style={CartCss.orderRow}>
                <Text style={CartCss.subTotal}>Total</Text>
                <Text style={CartCss.subTotal}>${total + total / 20}</Text>
            </View>
        </View>
    );
};

export default Price;

const styles = StyleSheet.create({});
