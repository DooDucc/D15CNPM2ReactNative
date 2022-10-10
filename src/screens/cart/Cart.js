import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOURS} from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCss from './CartCss';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart);

  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    const totalPrice = cart.reduce(
      (a, b) => a + b.productPrice * b.quantity,
      0,
    );
    setTotal(totalPrice);
  }, [cart]);

  const checkOut = () => {
    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
    navigation.navigate('Home');
  };

  return (
    <View style={CartCss.cart}>
      <ScrollView>
        <View style={CartCss.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={CartCss.backIcon}
            />
          </TouchableOpacity>
          <Text style={CartCss.order}>Order Details</Text>
          <View></View>
        </View>
        <Text style={CartCss.cartTitile}>My Products</Text>
        <View style={{paddingHorizontal: 16}}>
          {cart
            ? cart.map((item, i) => <CartItem key={i} data={item} />)
            : null}
        </View>
        <View>
          <View style={CartCss.delivery}>
            <Text style={CartCss.deliveryText}>Delivery Location</Text>
            <View style={CartCss.deliverBox}>
              <View style={CartCss.boxLeft}>
                <View style={CartCss.boxLeftWrapper}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 40,
                      color: COLOURS.blue,
                    }}
                  />
                </View>
                <View>
                  <Text style={CartCss.location}>
                    2 Yen Phu, Tay Ho, Ha Noi
                  </Text>
                  <Text style={CartCss.phone}>0921394752, Duc</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 30, color: COLOURS.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text style={CartCss.deliveryText}>Payment Method</Text>
            <View style={CartCss.deliverBox}>
              <View style={CartCss.boxLeft}>
                <View style={CartCss.boxLeftWrapper}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: '900',
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text style={CartCss.location}>Visa Classic</Text>
                  <Text style={CartCss.phone}>0921394752</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 30, color: COLOURS.black}}
              />
            </View>
          </View>
          <View style={CartCss.orderInfo}>
            <Text style={CartCss.deliveryText}>Order Info</Text>
            <View style={CartCss.orderRow}>
              <Text style={CartCss.subTotal}>Subtotal</Text>
              <Text style={CartCss.subTotal}>${total}</Text>
            </View>
            <View style={[CartCss.orderRow, {marginBottom: 22}]}>
              <Text style={CartCss.subTotal}>Shipping Tax</Text>
              <Text style={CartCss.subTotal}>${total / 20}</Text>
            </View>
            <View style={CartCss.orderRow}>
              <Text style={CartCss.subTotal}>Total</Text>
              <Text style={CartCss.subTotal}>${total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={CartCss.checkout}>
        <TouchableOpacity onPress={checkOut} style={CartCss.checkoutBtn}>
          <Text style={CartCss.checkoutBtnText}>
            CHECKOUT (${total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
