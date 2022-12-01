import { Text, View } from 'react-native';
import React from 'react';
import ProInfoCss from '../screens/info/ProInfoCss';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOURS } from '../constants';

const ProductInfo = ({ data }) => {
    return (
        <View style={ProInfoCss.shopping}>
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
                    <Text style={ProInfoCss.locationText}>An Duong, Tay Ho, Ha Noi</Text>
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
                }}
            >
                <Text style={ProInfoCss.price}>${data?.productPrice}</Text>
                <Text style={ProInfoCss.proDesc}>Tax Rate 2% ~ ${data?.productPrice / 20}</Text>
            </View>
        </View>
    );
};

export default ProductInfo;
