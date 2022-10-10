import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProInfoCss from './ProInfoCss';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../redux/CartSlice';

const width = Dimensions.get('window').width;

const ProInfo = props => {
  const data = props.route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  //add to cart
  const addToCart = async () => {
    dispatch(addProduct(data));
    ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
    navigation.navigate('Home');
  };

  //product horizontal scroll product card
  const renderProduct = ({item}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: item}}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View style={ProInfoCss.proInfo}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={ProInfoCss.container}>
          <View style={ProInfoCss.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo name="chevron-left" style={ProInfoCss.backIcon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data?.productImageList ? data.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={ProInfoCss.navigationSlider}>
            {data?.productImageList &&
              data?.productImageList.map((item, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp',
                });
                return (
                  <Animated.View
                    key={index}
                    style={[
                      ProInfoCss.navigationBar,
                      {opacity},
                    ]}></Animated.View>
                );
              })}
          </View>
        </View>
        <View style={ProInfoCss.shopping}>
          <View style={ProInfoCss.shoppingRow}>
            <Entypo name="shopping-cart" style={ProInfoCss.shoppngIcon} />
            <Text style={ProInfoCss.shoppingText}>Shopping</Text>
          </View>
          <View style={ProInfoCss.detail}>
            <Text style={ProInfoCss.proName}>{data?.productName}</Text>
            <Ionicons name="link-outline" style={ProInfoCss.linkIcon} />
          </View>
          <Text style={ProInfoCss.proDesc}>{data?.description}</Text>
          <View style={ProInfoCss.location}>
            <View style={ProInfoCss.locationRow}>
              <View style={ProInfoCss.locationWrap}>
                <Entypo name="location-pin" style={ProInfoCss.locationIcon} />
              </View>
              <Text style={ProInfoCss.locationText}>
                An Duong, Tay Ho, Ha Noi
              </Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLOURS.backgroundDark,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}>
            <Text style={ProInfoCss.price}>${data?.productPrice}</Text>
            <Text style={ProInfoCss.proDesc}>
              Tax Rate 2% ~ ${data?.productPrice / 20}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => (data?.isAvailable ? addToCart() : null)}
          style={ProInfoCss.addToCart}>
          <Text style={ProInfoCss.addToCartText}>
            {data?.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProInfo;
