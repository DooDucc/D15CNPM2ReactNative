import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLOURS} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProCardCss from './ProCardCss';

const ProCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProInfo', data)}
      style={ProCardCss.proCard}>
      <View style={ProCardCss.container}>
        {data.isOff ? (
          <View style={ProCardCss.sale}>
            <Text style={ProCardCss.saleText}>{data.offPercentage}%</Text>
          </View>
        ) : null}
        <Image
          source={{uri: data.productImage}}
          style={ProCardCss.productImg}
        />
      </View>
      <Text style={ProCardCss.productName}>{data.productName}</Text>
      {data.category == 'accessory' ? (
        data.isAvailable ? (
          <View style={ProCardCss.available}>
            <FontAwesome name="circle" style={ProCardCss.circleIcon} />
            <Text style={ProCardCss.availableText}>Available</Text>
          </View>
        ) : (
          <View style={ProCardCss.available}>
            <FontAwesome
              name="circle"
              style={[ProCardCss.circleIcon, {color: COLOURS.red}]}
            />
            <Text style={[ProCardCss.availableText, {color: COLOURS.red}]}>
              Unavailable
            </Text>
          </View>
        )
      ) : null}
      <Text style={ProCardCss.productPrice}>${data.productPrice}</Text>
    </TouchableOpacity>
  );
};

export default ProCard;
