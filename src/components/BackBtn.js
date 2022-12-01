import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import ProInfoCss from '../screens/info/ProInfoCss';

const BackBtn = () => {
    const navigation = useNavigation();
    return (
        <View style={ProInfoCss.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                <Entypo name="chevron-left" style={ProInfoCss.backIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default BackBtn;
