import { Animated, View } from 'react-native';
import React from 'react';
import ProInfoCss from '../screens/info/ProInfoCss';

const Slider = ({ data, position }) => {
    return (
        <View style={ProInfoCss.navigationSlider}>
            {data?.productImageList &&
                data?.productImageList.map((_, index) => {
                    let opacity = position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.2, 1, 0.2],
                        extrapolate: 'clamp',
                    });
                    return <Animated.View key={index} style={[ProInfoCss.navigationBar, { opacity }]}></Animated.View>;
                })}
        </View>
    );
};

export default Slider;
