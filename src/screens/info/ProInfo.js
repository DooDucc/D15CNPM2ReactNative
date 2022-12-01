import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    Animated,
    ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { ProductInfo, Slider, BackBtn } from '../../components';
import ProInfoCss from './ProInfoCss';
import { addProduct } from '../../redux/CartSlice';

const width = Dimensions.get('window').width;

const ProInfo = (props) => {
    const data = props.route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    const addToCart = async () => {
        dispatch(addProduct(data));
        ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
        navigation.navigate('Home');
    };

    const renderProduct = ({ item }) => {
        return (
            <View
                style={{
                    width: width,
                    height: 240,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={{ uri: item }}
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
            <ScrollView>
                <View style={ProInfoCss.container}>
                    <BackBtn />
                    <FlatList
                        data={data?.productImageList ? data.productImageList : null}
                        horizontal
                        renderItem={renderProduct}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0.8}
                        snapToInterval={width}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                    />
                    <Slider data={data} position={position} />
                </View>
                <ProductInfo data={data} />
                <TouchableOpacity onPress={() => (data?.isAvailable ? addToCart() : null)} style={ProInfoCss.addToCart}>
                    <Text style={ProInfoCss.addToCartText}>{data?.isAvailable ? 'Add to cart' : 'Not Avialable'}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ProInfo;
