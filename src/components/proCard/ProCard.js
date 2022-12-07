import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLOURS } from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProCardCss from './ProCardCss';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withDelay,
    Extrapolation,
    interpolate,
} from 'react-native-reanimated';
const ProCard = ({ data, index }) => {
    const translateX = useSharedValue(300);

    const navigation = useNavigation();

    useEffect(() => {
        translateX.value = withDelay(1000, withSpring(0));
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [300, 0], [0, 1], Extrapolation.CLAMP);
        const scale = interpolate(translateX.value, [300, 0], [0, 1], Extrapolation.CLAMP);
        return {
            opacity,
            transform: [{ translateX: index % 2 == 0 ? -translateX.value : translateX.value }, { scale }],
        };
    });
    return (
        <Animated.View style={[ProCardCss.cardContainer, animatedStyle]}>
            <TouchableOpacity onPress={() => navigation.navigate('ProInfo', data)} style={[ProCardCss.proCard]}>
                <View style={ProCardCss.container}>
                    {data.isOff ? (
                        <View style={ProCardCss.sale}>
                            <Text style={ProCardCss.saleText}>{data.offPercentage}%</Text>
                        </View>
                    ) : null}
                    <Image source={{ uri: data.productImage }} style={ProCardCss.productImg} />
                </View>
                <Text style={ProCardCss.productName}>{data.productName}</Text>
                {data.category == 'accessory' ? (
                    data.isAvailable ? (
                        <View style={ProCardCss.available}>
                            <FontAwesome name="circle" style={ProCardCss.circleIcon} />
                            <Text style={ProCardCss.availableText}>Available</Text>
                        </View>
                    ) : (
                        <View style={ProCardCss.available}>
                            <FontAwesome name="circle" style={[ProCardCss.circleIcon, { color: COLOURS.red }]} />
                            <Text style={[ProCardCss.availableText, { color: COLOURS.red }]}>Unavailable</Text>
                        </View>
                    )
                ) : null}
                <Text style={ProCardCss.productPrice}>${data.productPrice}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default ProCard;
