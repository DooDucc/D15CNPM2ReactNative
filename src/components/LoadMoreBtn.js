import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeCss from '../screens/home/HomeCss';

const LoadMoreBtn = ({ onPress }) => {
    return (
        <TouchableOpacity style={HomeCss.loadMoreBtn} onPress={onPress}>
            <Text style={HomeCss.loadMoreBtnText}>Load More...</Text>
        </TouchableOpacity>
    );
};

export default LoadMoreBtn;
