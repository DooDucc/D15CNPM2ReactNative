import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SettingCss from './SettingCss';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation();
    return (
        <View style={SettingCss.setting}>
            <ScrollView>
                <View style={SettingCss.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" style={SettingCss.backIcon} />
                    </TouchableOpacity>
                    <Text style={SettingCss.title}>Settings</Text>
                    <View></View>
                </View>
                <View style={SettingCss.seacrh}>
                    <FontAwesome style={SettingCss.seacrhIcon} name="search" />
                    <TextInput placeholder="Search..." style={SettingCss.searchInput} />
                </View>
                <View style={SettingCss.options}>
                    <View></View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Setting;
