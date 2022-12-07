import { Text, View, Image } from 'react-native';
import { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withDelay,
    Extrapolation,
    interpolate,
} from 'react-native-reanimated';
import Banner from './Banner';

import HomeCss from '../screens/home/HomeCss';

const Header = () => {
    const translateY = useSharedValue(300);

    useEffect(() => {
        translateY.value = withDelay(1000, withSpring(0));
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateY.value, [300, 0], [0, 1], Extrapolation.CLAMP);
        const scale = interpolate(translateY.value, [300, 0], [0, 1], Extrapolation.CLAMP);
        return {
            opacity,
            transform: [{ translateY: -translateY.value }, { scale }],
        };
    });
    return (
        <Animated.View style={[HomeCss.introduction, animatedStyle]}>
            <Text style={HomeCss.title}>Hi-Fi Shop &amp; Service</Text>
            <Text style={HomeCss.desc}>
                Audio shop on {'\n'}28 Thuy Khue, Ha Noi, Viet Nam.
                {'\n'}This shop offers both products and services
            </Text>
            <Banner />
        </Animated.View>
    );
};

export default Header;
