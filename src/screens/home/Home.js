import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS } from '../../constants';
import { Products, Header, Loader, LoadMoreBtn } from '../../components';
import HomeCss from './HomeCss';
import axios from 'axios';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withDelay,
    withTiming,
    Extrapolation,
    interpolate,
} from 'react-native-reanimated';

let productsPerLoad = 4;

const Home = () => {
    const animatedValue = useSharedValue(0);
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [filterPrice, setFilterPrice] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            axios
                .get('https://637207bc025414c637042ac4.mockapi.io/api/v1/products')
                .then((res) => {
                    setProducts(() => res.data.slice(0, productsPerLoad));
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getProducts();
    }, []);

    useEffect(() => {
        animatedValue.value = withDelay(2000, withSpring(1));
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(animatedValue.value, [0, 1], [0, 1], Extrapolation.CLAMP);
        return {
            transform: [{ scale }],
            opacity: animatedValue.value,
        };
    });

    const handleCategory = (type) => {
        productsPerLoad = 4;
        let filterProducts;
        if (type !== 'all') {
            filterProducts = data
                ?.filter((product) => {
                    return product.category === type;
                })
                .slice(0, productsPerLoad);
            setProducts(filterProducts);
        } else {
            setProducts(() => data.slice(0, productsPerLoad));
        }
        setCategory(type);
        setFilterPrice('');
    };

    const handleLoadMore = () => {
        productsPerLoad += 4;
        let filterProducts;
        if (category !== 'all') {
            filterProducts = data
                ?.filter((product) => {
                    return product.category === category;
                })
                .slice(0, productsPerLoad);
            if (filterPrice === 'lowest') {
                setProducts(() => filterProducts.sort((item1, item2) => item1.productPrice - item2.productPrice));
            } else if (filterPrice === 'highest') {
                setProducts(() => filterProducts.sort((item1, item2) => item2.productPrice - item1.productPrice));
            } else {
                setProducts(filterProducts);
            }
        } else {
            if (filterPrice === 'lowest') {
                setProducts(() =>
                    data.sort((item1, item2) => item1.productPrice - item2.productPrice).slice(0, productsPerLoad),
                );
            } else if (filterPrice === 'highest') {
                setProducts(() =>
                    data.sort((item1, item2) => item2.productPrice - item1.productPrice).slice(0, productsPerLoad),
                );
            } else {
                setProducts(() => data.slice(0, productsPerLoad));
            }
        }
    };

    const handleFilterPrice = (price) => {
        setFilterPrice(price);
        if (price === 'lowest') {
            setProducts(() => products.sort((item1, item2) => item1.productPrice - item2.productPrice));
        }
        if (price === 'highest') {
            setProducts(() => products.sort((item1, item2) => item2.productPrice - item1.productPrice));
        }
    };

    return (
        <>
            {products.length > 0 ? (
                <View style={HomeCss.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Header />
                        <Animated.Text style={[HomeCss.ourPro, animatedStyle]}>Our Products</Animated.Text>
                        <Animated.View style={[HomeCss.categoryBoxes, animatedStyle]}>
                            <TouchableOpacity
                                onPress={() => handleCategory('all')}
                                style={[
                                    HomeCss.categoryBox,
                                    category === 'all'
                                        ? { backgroundColor: COLOURS.black, borderColor: 'none', borderWidth: 0 }
                                        : {},
                                ]}
                            >
                                <Text
                                    style={[
                                        HomeCss.categoryBoxText,
                                        category === 'all' ? { color: COLOURS.white } : {},
                                    ]}
                                >
                                    All
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleCategory('accessory')}
                                style={[
                                    HomeCss.categoryBox,
                                    category === 'accessory'
                                        ? { backgroundColor: COLOURS.black, borderColor: 'none', borderWidth: 0 }
                                        : {},
                                ]}
                            >
                                <Text
                                    style={[
                                        HomeCss.categoryBoxText,
                                        category === 'accessory' ? { color: COLOURS.white } : {},
                                    ]}
                                >
                                    Ear Phone
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleCategory('product')}
                                style={[
                                    HomeCss.categoryBox,
                                    category === 'product'
                                        ? { backgroundColor: COLOURS.black, borderColor: 'none', borderWidth: 0 }
                                        : {},
                                ]}
                            >
                                <Text
                                    style={[
                                        HomeCss.categoryBoxText,
                                        category === 'product' ? { color: COLOURS.white } : {},
                                    ]}
                                >
                                    Head Phone
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[HomeCss.filterPrice, animatedStyle]}>
                            <TouchableOpacity
                                style={[
                                    HomeCss.priceBtn,
                                    filterPrice === 'highest' ? { backgroundColor: COLOURS.black } : {},
                                ]}
                                onPress={() => handleFilterPrice('highest')}
                            >
                                <Text
                                    style={[
                                        HomeCss.priceBtnText,
                                        filterPrice === 'highest' ? { color: COLOURS.white } : {},
                                    ]}
                                >
                                    Highest price
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    HomeCss.priceBtn,
                                    filterPrice === 'lowest' ? { backgroundColor: COLOURS.black } : {},
                                ]}
                                onPress={() => handleFilterPrice('lowest')}
                            >
                                <Text
                                    style={[
                                        HomeCss.priceBtnText,
                                        filterPrice === 'lowest' ? { color: COLOURS.white } : {},
                                    ]}
                                >
                                    Lowest price
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>
                        <Products products={products} />
                        {productsPerLoad <= products.length && <LoadMoreBtn onPress={handleLoadMore} />}
                    </ScrollView>
                </View>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Home;
