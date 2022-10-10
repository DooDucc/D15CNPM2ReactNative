import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLOURS} from '../../constants';
import {ProCard} from '../../components';
import HomeCss from './HomeCss';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getProducts = async () => {
      axios
        .get(
          'https://raw.githubusercontent.com/DooDucc/fakeApi/master/LTMobile.json',
        )
        .then(res => {
          const productList = [];
          const accessoryList = [];
          res.data.forEach(item => {
            if (item.category === 'accessory') {
              accessoryList.push(item);
            }
            if (item.category === 'product') {
              productList.push(item);
            }
          });
          setProducts(productList);
          setAccessory(accessoryList);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getProducts();
  }, []);

  if (products.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <View style={HomeCss.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={HomeCss.cartBtn}
          onPress={() => navigation.navigate('Cart')}>
          <MaterialCommunityIcons name="cart" style={HomeCss.cartIcon} />
        </TouchableOpacity>
        <View style={HomeCss.introduction}>
          <Text style={HomeCss.title}>Hi-Fi Shop &amp; Service</Text>
          <Text style={HomeCss.desc}>
            Audio shop on {'\n'}28 Thuy Khue, Ha Noi, Viet Nam.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View style={HomeCss.products}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={HomeCss.productTitle}>Products</Text>
          </View>
          <View style={HomeCss.productList}>
            {products?.map(data => {
              return <ProCard key={data.id} data={data} />;
            })}
          </View>
        </View>
        <View style={HomeCss.products}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={HomeCss.productTitle}>Accessories</Text>
          </View>
          <View style={HomeCss.productList}>
            {accessory?.map(data => {
              return <ProCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
