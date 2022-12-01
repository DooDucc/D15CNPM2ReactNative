import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartCss from '../screens/cart/CartCss';
import { COLOURS } from '../constants';
import PopUp from './PopUp';

const Payment = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({
        type: 'payment',
        payment: '',
        phone: '',
    });
    return (
        <View
            style={{
                paddingHorizontal: 16,
                marginVertical: 10,
            }}
        >
            <Text style={CartCss.deliveryText}>Payment Method</Text>
            <TouchableOpacity style={CartCss.deliverBox} onPress={() => setShow(true)}>
                <View style={CartCss.boxLeft}>
                    <View style={CartCss.boxLeftWrapper}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: '900',
                                color: COLOURS.blue,
                                letterSpacing: 1,
                            }}
                        >
                            VISA
                        </Text>
                    </View>
                    <View>
                        <Text style={CartCss.location}>{content.payment ? content.payment : 'Visa Classic'}</Text>
                        <Text style={CartCss.phone}>{content.phone ? content.phone : '0921394752'}</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="chevron-right" style={{ fontSize: 30, color: COLOURS.black }} />
            </TouchableOpacity>

            {show ? <PopUp setContent={setContent} content={content} onPress={() => setShow(false)} /> : null}
        </View>
    );
};

export default Payment;
