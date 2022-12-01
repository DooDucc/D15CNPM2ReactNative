import { Text, View, Image } from 'react-native';

import HomeCss from '../screens/home/HomeCss';

const Header = () => {
    return (
        <View style={HomeCss.introduction}>
            <Text style={HomeCss.title}>Hi-Fi Shop &amp; Service</Text>
            <Text style={HomeCss.desc}>
                Audio shop on {'\n'}28 Thuy Khue, Ha Noi, Viet Nam.
                {'\n'}This shop offers both products and services
            </Text>
            <Image
                style={HomeCss.banner}
                source={{
                    uri: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef28ce40-3f94-4828-a80b-34260d35fba0.__CR0,0,970,600_PT0_SX970_V1___.jpg',
                }}
            />
        </View>
    );
};

export default Header;
