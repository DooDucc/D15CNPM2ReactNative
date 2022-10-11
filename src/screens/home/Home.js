import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { COLOURS } from '../../constants';
import { ProCard } from '../../components';
import HomeCss from './HomeCss';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');

    const navigation = useNavigation();

    useEffect(() => {
        const getProducts = async () => {
            axios
                .get('https://raw.githubusercontent.com/DooDucc/fakeApi/master/LTMobile.json')
                .then((res) => {
                    setProducts(res.data);
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getProducts();
    }, []);

    const handleCategory = (type) => {
        console.log(type);
        if (type !== 'all') {
            const filterProducts = data?.filter((product) => {
                return product.category === type;
            });
            setProducts(filterProducts);
        } else {
            setProducts(data);
        }
        setCategory(type);
    };

    if (products.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }

    return (
        <View style={HomeCss.container}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={HomeCss.cartBtn} onPress={() => navigation.navigate('Cart')}>
                    <MaterialCommunityIcons name="cart" style={HomeCss.cartIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={HomeCss.settingBtn} onPress={() => navigation.navigate('Setting')}>
                    <SimpleLineIcons name="settings" style={HomeCss.cartIcon} />
                </TouchableOpacity>
                <View style={HomeCss.introduction}>
                    <Text style={HomeCss.title}>Hi-Fi Shop &amp; Service</Text>
                    <Text style={HomeCss.desc}>
                        Audio shop on {'\n'}28 Thuy Khue, Ha Noi, Viet Nam.
                        {'\n'}This shop offers both products and services
                    </Text>
                </View>
                <View style={HomeCss.categoryBoxes}>
                    <TouchableOpacity
                        onPress={() => handleCategory('all')}
                        style={[
                            HomeCss.categoryBox,
                            category === 'all'
                                ? { backgroundColor: COLOURS.green, borderColor: 'none', borderWidth: 0 }
                                : {},
                        ]}
                    >
                        <Text style={[HomeCss.categoryBoxText, category === 'all' ? { color: COLOURS.white } : {}]}>
                            All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory('accessory')}
                        style={[
                            HomeCss.categoryBox,
                            category === 'accessory'
                                ? { backgroundColor: COLOURS.green, borderColor: 'none', borderWidth: 0 }
                                : {},
                        ]}
                    >
                        <Text
                            style={[HomeCss.categoryBoxText, category === 'accessory' ? { color: COLOURS.white } : {}]}
                        >
                            Ear Phone
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory('product')}
                        style={[
                            HomeCss.categoryBox,
                            category === 'product'
                                ? { backgroundColor: COLOURS.green, borderColor: 'none', borderWidth: 0 }
                                : {},
                        ]}
                    >
                        <Text style={[HomeCss.categoryBoxText, category === 'product' ? { color: COLOURS.white } : {}]}>
                            Head Phone
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={HomeCss.products}>
                    <View style={HomeCss.productList}>
                        {products?.map((data) => {
                            return <ProCard key={data.id} data={data} />;
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
