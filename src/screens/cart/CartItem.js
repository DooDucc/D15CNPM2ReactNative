import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCss from './CartCss';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, updateProduct} from '../../redux/CartSlice';

const CartItem = ({data}) => {
  const [productQuatity, setProductQuatity] = React.useState(data.quantity);
  const [disabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  React.useEffect(() => {
    const indexOfProduct = cart.findIndex(product => product.id === data.id);
    if (cart[indexOfProduct].quantity === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setProductQuatity(cart[indexOfProduct].quantity);
  }, [cart]);

  return (
    <View key={data.key} style={CartCss.cartItem}>
      <View style={CartCss.cartItemImgWrap}>
        <Image source={{uri: data.productImage}} style={CartCss.cartItemImg} />
      </View>
      <View style={CartCss.cartItemInfo}>
        <View>
          <Text style={CartCss.cartItemName}>{data.productName}</Text>
          <View style={CartCss.cartItemPrice}>
            <Text style={CartCss.cartItemPriceText}>${data.productPrice}</Text>
            <Text style={CartCss.cartItemPriceText}>
              (~${data.productPrice + data.productPrice / 20})
            </Text>
          </View>
        </View>
        <View style={CartCss.cartItemQuantity}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={CartCss.minus}
              disabled={disabled}
              onPress={() =>
                dispatch(updateProduct({id: data.id, type: 'minus'}))
              }>
              <MaterialCommunityIcons
                name="minus"
                style={CartCss.quantityIcon}
              />
            </TouchableOpacity>
            <Text>{productQuatity}</Text>
            <TouchableOpacity
              style={CartCss.plus}
              onPress={() =>
                dispatch(updateProduct({id: data.id, type: 'plus'}))
              }>
              <MaterialCommunityIcons
                name="plus"
                style={CartCss.quantityIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => dispatch(deleteProduct(data.id))}>
            <MaterialCommunityIcons
              name="delete-outline"
              style={CartCss.delete}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
