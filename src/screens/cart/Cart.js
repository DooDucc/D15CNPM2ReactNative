import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartCss from './CartCss';
import CartItem from './CartItem';
import { Delivery, Payment, Price } from '../../components';
import { useSelector } from 'react-redux';

const Cart = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = cart.reduce((a, b) => a + b.productPrice * b.quantity, 0);
        setTotal(totalPrice);
    }, [cart]);

    const checkOut = () => {
        ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
        navigation.navigate('Home');
    };

    return (
        <View style={CartCss.cart}>
            <ScrollView>
                <View style={CartCss.title}>
                    <Text style={CartCss.order}>Order Details</Text>
                </View>
                <Text style={CartCss.cartTitile}>My Products</Text>
                <View style={{ paddingHorizontal: 16 }}>
                    {cart.length > 0 ? (
                        cart.map((item, i) => <CartItem key={i} data={item} />)
                    ) : (
                        <Text style={CartCss.emptyText}>Your cart is empty</Text>
                    )}
                </View>
                <View>
                    <Delivery />
                    <Payment />
                    <Price total={total} />
                    <View style={CartCss.checkout}>
                        <TouchableOpacity onPress={checkOut} style={CartCss.checkoutBtn}>
                            <Text style={CartCss.checkoutBtnText}>CHECKOUT (${total + total / 20} )</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Cart;
