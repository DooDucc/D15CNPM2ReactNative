import { View, Image } from 'react-native';
import React from 'react';

const Loader = () => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 150, height: 150 }}
                source={{
                    uri: 'https://previews.123rf.com/images/doublerdesign/doublerdesign2002/doublerdesign200200205/140588848-headphone-music-icon-logo-design-vector-template-illustration.jpg',
                }}
            />
        </View>
    );
};

export default Loader;
