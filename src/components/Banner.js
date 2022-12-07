import { useState } from 'react';

import { Text, Dimensions, ScrollView, StyleSheet, Image, View } from 'react-native';
import { COLOURS } from '../constants';

const { width } = Dimensions.get('window');

const bannerImg = [
    'https://padhkedekho.com/wp-content/uploads/2021/06/BoAt-Rockerz-510-Vs-BoAt-Rockerz-550.jpg',
    'https://www.guidefolder.com/wp-content/uploads/2022/04/boAt-Airdopes-441-vs-441-Pro-Comparison.jpg',
    'https://i.ytimg.com/vi/60cPt5gIyE8/maxresdefault.jpg',
];

const Banner = () => {
    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {bannerImg.map((img) => (
                        <Image key={img} source={{ uri: img }} resizeMode="stretch" style={styles.wrap} />
                    ))}
                </ScrollView>
                <View style={styles.wrapDot}>
                    {bannerImg.map((img, index) => (
                        <Text key={img} style={imgActive == index ? styles.dotActive : styles.dot}>
                            ●
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    wrap: {
        borderRadius: 20,
        width: width * 0.9,
        height: 230,
    },
    wrapDot: {
        position: 'absolute',
        bottom: -20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: COLOURS.black,
    },
    dot: {
        margin: 3,
        color: COLOURS.backgroundMedium,
    },
});

export default Banner;
