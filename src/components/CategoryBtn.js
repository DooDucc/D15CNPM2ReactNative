import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLOURS } from '../constants';
import HomeCss from '../screens/home/HomeCss';

const CategoryBtn = ({ onPress, category, title, type }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                HomeCss.categoryBox,
                category === type ? { backgroundColor: COLOURS.black, borderColor: 'none', borderWidth: 0 } : {},
            ]}
        >
            <Text style={[HomeCss.categoryBoxText, category === type ? { color: COLOURS.white } : {}]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CategoryBtn;
