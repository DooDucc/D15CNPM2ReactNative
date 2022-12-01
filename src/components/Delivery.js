import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCss from '../screens/cart/CartCss';
import { COLOURS } from '../constants';
import PopUp from './PopUp';

const Delivery = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({
        type: 'delivery',
        address: '',
        name: '',
    });
    return (
        <View style={CartCss.delivery}>
            <Text style={CartCss.deliveryText}>Delivery Location</Text>
            <TouchableOpacity style={CartCss.deliverBox} onPress={() => setShow(true)}>
                <View style={CartCss.boxLeft}>
                    <View style={CartCss.boxLeftWrapper}>
                        <MaterialCommunityIcons
                            name="truck-delivery-outline"
                            style={{
                                fontSize: 40,
                                color: COLOURS.blue,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={CartCss.location}>
                            {content.address ? content.address : '2 Yen Phu, Tay Ho, Ha Noi'}
                        </Text>
                        <Text style={CartCss.phone}>{content.name ? content.name : 'Do Chi Duc'}</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="chevron-right" style={{ fontSize: 30, color: COLOURS.black }} />
            </TouchableOpacity>

            {show ? <PopUp setContent={setContent} content={content} onPress={() => setShow(false)} /> : null}
        </View>
    );
};

export default Delivery;

const styles = StyleSheet.create({});
